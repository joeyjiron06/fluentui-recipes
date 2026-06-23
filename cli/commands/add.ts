import path from 'node:path';
import fs from 'node:fs';
import * as p from '@clack/prompts';
import {
  type Config,
  DEFAULT_CONFIG,
  readConfig,
} from '../lib/config.js';
import {
  loadRegistry,
  getRegistryRoot,
  resolveTree,
  type RegistryItem,
} from '../lib/registry.js';
import { rewriteImports } from '../lib/transform.js';
import {
  filterMissingDependencies,
  getPackageManager,
  installDependencies,
} from '../lib/dependencies.js';
import { runInit } from './init.js';

export type AddOptions = {
  cwd: string;
  yes: boolean;
  overwrite: boolean;
  path?: string;
  dryRun: boolean;
};

type FileAction = 'create' | 'overwrite' | 'skip';

type PlannedFile = {
  registryPath: string;
  targetPath: string;
  contents: string;
  action: FileAction;
};

/** Resolve the directory that registry files are written into. */
function resolveInstallRoot(options: AddOptions, config: Config): string {
  if (options.path) {
    return path.isAbsolute(options.path)
      ? options.path
      : path.resolve(options.cwd, options.path);
  }
  return path.resolve(options.cwd, config.root);
}

export async function runAdd(
  names: string[],
  options: AddOptions,
): Promise<void> {
  if (names.length === 0) {
    p.log.error('No components specified. Usage: add <names...>');
    process.exit(1);
  }

  // 1. Resolve config (or defaults / inline init).
  let config = readConfig(options.cwd);
  if (!config) {
    if (options.dryRun) {
      config = { alias: DEFAULT_CONFIG.alias, root: DEFAULT_CONFIG.root };
      p.log.info(
        'No fluentui-recipes.json found. Using defaults for this preview ' +
          `(alias "${config.alias}", root "${config.root}"). ` +
          'A real run would create the config via `init`.',
      );
    } else {
      config = await runInit({ cwd: options.cwd, yes: options.yes });
    }
  }

  // 2. Resolve the registry tree (transitive deps).
  const registry = loadRegistry();
  let tree;
  try {
    tree = resolveTree(registry, names);
  } catch (error) {
    if ((error as { isUnknownItem?: boolean }).isUnknownItem) {
      p.log.error((error as Error).message);
      process.exit(1);
    }
    throw error;
  }

  // 3. Plan file writes.
  const installRoot = resolveInstallRoot(options, config);
  const registryRoot = getRegistryRoot();
  const planned: PlannedFile[] = [];

  for (const item of tree.items) {
    for (const file of item.files) {
      const sourcePath = path.join(registryRoot, file.path);
      const raw = fs.readFileSync(sourcePath, 'utf8');
      const contents = rewriteImports(raw, file.path, config.alias);
      // Mirror the registry layout (components/..., hooks/...) under the root.
      const targetPath = path.join(installRoot, file.path);

      let action: FileAction = 'create';
      if (fs.existsSync(targetPath)) {
        action = options.overwrite ? 'overwrite' : 'skip';
      }
      planned.push({
        registryPath: file.path,
        targetPath,
        contents,
        action,
      });
    }
  }

  // 4. npm dependency resolution (skip already-declared, idempotent).
  const missingDeps = options.dryRun
    ? tree.npmDependencies
    : filterMissingDependencies(options.cwd, tree.npmDependencies);

  // 5. Dry-run: report and stop.
  if (options.dryRun) {
    printDryRun(planned, missingDeps, options.cwd);
    return;
  }

  // 6. Per-file overwrite prompting (only for skip-by-existence files when not
  //    --yes and not --overwrite).
  if (!options.overwrite && !options.yes) {
    for (const file of planned) {
      if (file.action === 'skip') {
        const rel = path.relative(options.cwd, file.targetPath);
        const answer = await p.confirm({
          message: `File ${rel} already exists. Overwrite?`,
          initialValue: false,
        });
        if (p.isCancel(answer)) {
          p.cancel('Aborted.');
          process.exit(1);
        }
        if (answer) file.action = 'overwrite';
      }
    }
  }

  // 7. Write files.
  const created: string[] = [];
  const overwritten: string[] = [];
  const skipped: string[] = [];

  for (const file of planned) {
    const rel = path.relative(options.cwd, file.targetPath);
    if (file.action === 'skip') {
      skipped.push(rel);
      continue;
    }
    fs.mkdirSync(path.dirname(file.targetPath), { recursive: true });
    fs.writeFileSync(file.targetPath, file.contents);
    if (file.action === 'overwrite') overwritten.push(rel);
    else created.push(rel);
  }

  // 8. Install npm dependencies.
  if (missingDeps.length > 0) {
    const pm = await getPackageManager(options.cwd);
    const spinner = p.spinner();
    spinner.start(`Installing dependencies with ${pm}`);
    try {
      await installDependencies(options.cwd, pm, missingDeps);
      spinner.stop(`Installed: ${missingDeps.join(', ')}`);
    } catch (error) {
      spinner.stop('Failed to install dependencies');
      throw error;
    }
  }

  // 9. Summary.
  const summary: string[] = [];
  if (created.length) summary.push(`Created ${created.length} file(s).`);
  if (overwritten.length)
    summary.push(`Overwrote ${overwritten.length} file(s).`);
  if (skipped.length)
    summary.push(
      `Skipped ${skipped.length} existing file(s) (use --overwrite to replace).`,
    );
  p.log.success(summary.join(' ') || 'Nothing to do.');
}

function printDryRun(
  planned: PlannedFile[],
  deps: string[],
  cwd: string,
): void {
  const lines: string[] = [];
  for (const file of planned) {
    const rel = path.relative(cwd, file.targetPath);
    const label =
      file.action === 'create'
        ? 'create'
        : file.action === 'overwrite'
          ? 'overwrite'
          : 'skip (exists, no --overwrite)';
    lines.push(`  ${label.padEnd(28)} ${rel}`);
  }
  lines.push('');
  if (deps.length) {
    lines.push('  would install npm deps:');
    for (const dep of deps) lines.push(`    ${dep}`);
  } else {
    lines.push('  no npm deps to install');
  }
  p.note(lines.join('\n'), 'Dry run — nothing written');
}

export type { RegistryItem };
