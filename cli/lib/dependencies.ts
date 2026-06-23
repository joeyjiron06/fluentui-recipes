import path from 'node:path';
import fs from 'node:fs';
import { execa } from 'execa';
import { detect } from '@antfu/ni';

export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

/**
 * Detect the package manager for `cwd`. Mirrors shadcn's get-package-manager:
 * prefer @antfu/ni's lockfile detection, fall back to npm_config_user_agent,
 * then npm.
 */
export async function getPackageManager(cwd: string): Promise<PackageManager> {
  const detected = await detect({ programmatic: true, cwd }).catch(() => null);
  if (detected) {
    if (detected === 'yarn@berry') return 'yarn';
    if (detected === 'pnpm@6') return 'pnpm';
    if (detected === 'bun') return 'bun';
    if (detected === 'npm' || detected === 'pnpm' || detected === 'yarn') {
      return detected;
    }
  }

  const userAgent = process.env.npm_config_user_agent ?? '';
  if (userAgent.startsWith('pnpm')) return 'pnpm';
  if (userAgent.startsWith('yarn')) return 'yarn';
  if (userAgent.startsWith('bun')) return 'bun';
  return 'npm';
}

type PackageJson = {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
};

function readPackageJson(cwd: string): PackageJson {
  const pkgPath = path.join(cwd, 'package.json');
  if (!fs.existsSync(pkgPath)) return {};
  try {
    return JSON.parse(fs.readFileSync(pkgPath, 'utf8')) as PackageJson;
  } catch {
    return {};
  }
}

/** All bare package names already declared in the user's package.json. */
export function getExistingDependencies(cwd: string): Set<string> {
  const pkg = readPackageJson(cwd);
  return new Set([
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.devDependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
    ...Object.keys(pkg.optionalDependencies ?? {}),
  ]);
}

/**
 * Filter the resolved npm deps down to those not already declared, to keep
 * `add` idempotent (never rewrite existing specifiers).
 */
export function filterMissingDependencies(
  cwd: string,
  dependencies: string[],
): string[] {
  const existing = getExistingDependencies(cwd);
  return dependencies.filter((dep) => !existing.has(dep));
}

export async function installDependencies(
  cwd: string,
  packageManager: PackageManager,
  dependencies: string[],
): Promise<void> {
  if (dependencies.length === 0) return;
  const addCommand = packageManager === 'npm' ? 'install' : 'add';
  await execa(packageManager, [addCommand, ...dependencies], {
    cwd,
    stdio: 'inherit',
  });
}
