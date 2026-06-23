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
 * The bundled registry lives at `src/registry`, published alongside the built
 * `dist/cli.js`. Resolve it relative to this module so it works both in dev
 * (cli/lib/registry.ts) and in the published tarball (dist/cli.js). See ADR 0001.
 */
export function getRegistryRoot(): string {
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
}

export function loadRegistry(): Registry {
  const root = getRegistryRoot();
  const raw = fs.readFileSync(path.join(root, 'registry.json'), 'utf8');
  return JSON.parse(raw) as Registry;
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
