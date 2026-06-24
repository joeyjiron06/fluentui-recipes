import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

export type RegistryFile = {
  path: string;
  type: string;
};

export type RegistryItem = {
  name: string;
  type: string;
  files: RegistryFile[];
  registryDependencies?: string[];
  dependencies?: string[];
};

export type Registry = {
  name: string;
  items: RegistryItem[];
};

/**
 * Memoize a zero-arg function. These all read files bundled with the CLI
 * (registry.json, build.json, package.json) that cannot change during a single
 * process run, so computing them once is safe and avoids repeated disk reads
 * and JSON parsing across the install of many files.
 */
function once<T>(fn: () => T): () => T {
  let cached: { value: T } | undefined;
  return () => {
    if (!cached) cached = { value: fn() };
    return cached.value;
  };
}

/**
 * The bundled registry metadata (`registry.json`) and `build.json` live
 * alongside the built `dist/cli.js`. Resolve them relative to this module so it
 * works both in dev (cli/lib/registry.ts) and in the published tarball
 * (dist/cli.js). Component/hook *source* is no longer bundled — it is fetched
 * from GitHub at runtime (see ADR 0003).
 */
export const getRegistryRoot = once((): string => {
  // In the built bundle this file is collapsed into dist/cli.js, so
  // import.meta.url points at dist/cli.js → ../src/registry.
  // In dev (tsx/vite), it points at cli/lib/registry.ts → ../../src/registry.
  const here = fileURLToPath(import.meta.url);
  const candidates = [
    path.resolve(path.dirname(here), '../src/registry'), // dist/cli.js
    path.resolve(path.dirname(here), '../../src/registry'), // cli/lib/registry.ts
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(path.join(candidate, 'registry.json'))) {
      return candidate;
    }
  }
  throw new Error('Could not locate the bundled registry (registry.json).');
});

/** Resolve the package root (where build.json and package.json live). */
const getPackageRoot = once((): string => {
  const here = fileURLToPath(import.meta.url);
  const candidates = [
    path.resolve(path.dirname(here), '..'), // dist/cli.js → package root
    path.resolve(path.dirname(here), '../..'), // cli/lib/registry.ts → package root
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(path.join(candidate, 'package.json'))) {
      return candidate;
    }
  }
  throw new Error('Could not locate the package root (package.json).');
});

export const loadRegistry = once((): Registry => {
  const root = getRegistryRoot();
  const raw = fs.readFileSync(path.join(root, 'registry.json'), 'utf8');
  return JSON.parse(raw) as Registry;
});

type BuildInfo = { gitSha: string };

/** Read the git SHA captured at build time (scripts/write-build-info.js). */
const loadBuildInfo = once((): BuildInfo => {
  const root = getPackageRoot();
  const buildPath = path.join(root, 'build.json');
  if (!fs.existsSync(buildPath)) {
    throw new Error(
      'Missing build.json. The CLI cannot determine which source revision to ' +
        'fetch. Rebuild with `npm run build:cli`.',
    );
  }
  const info = JSON.parse(fs.readFileSync(buildPath, 'utf8')) as BuildInfo;
  if (!info.gitSha) {
    throw new Error('build.json is missing "gitSha".');
  }
  return info;
});

/** Parse "owner/repo" from package.json `repository.url`. */
const getRepoSlug = once((): string => {
  const root = getPackageRoot();
  const pkg = JSON.parse(
    fs.readFileSync(path.join(root, 'package.json'), 'utf8'),
  ) as { repository?: { url?: string } | string };
  const url =
    typeof pkg.repository === 'string' ? pkg.repository : pkg.repository?.url;
  if (!url) {
    throw new Error('package.json is missing repository.url.');
  }
  const match = url.match(/github\.com[/:]([^/]+\/[^/]+?)(?:\.git)?$/);
  if (!match) {
    throw new Error(`Could not parse a GitHub owner/repo from "${url}".`);
  }
  return match[1];
});

/**
 * Build the raw.githubusercontent.com URL for a registry file, pinned to the
 * commit the CLI was built from. `filePath` is registry-relative (e.g.
 * "components/fileUpload/fileUpload001.tsx").
 */
export function registryFileUrl(filePath: string): string {
  const { gitSha } = loadBuildInfo();
  const slug = getRepoSlug();
  // Forward slashes only, even on Windows.
  const fullPath = `src/registry/${filePath}`.split(path.sep).join('/');
  return `https://raw.githubusercontent.com/${slug}/${gitSha}/${fullPath}`;
}

/**
 * Fetch the contents of a registry file from GitHub. Throws a friendly error on
 * a non-200 response or a network failure (the 404 case usually means the build
 * SHA was never pushed — see ADR 0003).
 */
export async function fetchRegistryFile(filePath: string): Promise<string> {
  const url = registryFileUrl(filePath);
  let response: Response;
  try {
    response = await fetch(url);
  } catch (error) {
    throw new Error(
      `Failed to fetch ${filePath} from ${url}: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${filePath} (HTTP ${response.status}) from ${url}. ` +
        'The build revision may not be pushed to GitHub.',
    );
  }
  return response.text();
}

export type ResolvedTree = {
  /** Registry items in the install set (requested + transitive deps). */
  items: RegistryItem[];
  /** Union of npm package dependencies across the tree. */
  npmDependencies: string[];
};

/**
 * Resolve the requested item names plus their transitive `registryDependencies`.
 * Throws on an unknown name (caller maps it to a friendly message + exit 1).
 */
export function resolveTree(registry: Registry, names: string[]): ResolvedTree {
  const byName = new Map(registry.items.map((item) => [item.name, item]));
  const visited = new Set<string>();
  const items: RegistryItem[] = [];

  const visit = (name: string) => {
    if (visited.has(name)) return;
    const item = byName.get(name);
    if (!item) {
      const err = new Error(`Unknown component: "${name}"`);
      (err as { isUnknownItem?: boolean }).isUnknownItem = true;
      throw err;
    }
    visited.add(name);
    // Resolve dependencies first so they are written before dependents.
    for (const dep of item.registryDependencies ?? []) {
      visit(dep);
    }
    items.push(item);
  };

  for (const name of names) {
    visit(name);
  }

  const npmDependencies = Array.from(
    new Set(items.flatMap((item) => item.dependencies ?? [])),
  );

  return { items, npmDependencies };
}
