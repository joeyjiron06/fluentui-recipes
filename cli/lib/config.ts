import path from 'node:path';
import fs from 'node:fs';

export const CONFIG_FILENAME = 'fluentui-recipes.json';

export type Config = {
  /** Import alias prefix the registry's `@/` imports are rewritten to. */
  alias: string;
  /** Directory (relative to project root) the alias maps to. Files land here. */
  root: string;
};

export const DEFAULT_CONFIG: Config = {
  alias: '@',
  root: './src',
};

export function getConfigPath(cwd: string): string {
  return path.join(cwd, CONFIG_FILENAME);
}

export function readConfig(cwd: string): Config | null {
  const configPath = getConfigPath(cwd);
  if (!fs.existsSync(configPath)) {
    return null;
  }
  try {
    const raw = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    return {
      alias: typeof raw.alias === 'string' ? raw.alias : DEFAULT_CONFIG.alias,
      root: typeof raw.root === 'string' ? raw.root : DEFAULT_CONFIG.root,
    };
  } catch {
    return null;
  }
}

export function writeConfig(cwd: string, config: Config): void {
  fs.writeFileSync(getConfigPath(cwd), JSON.stringify(config, null, 2) + '\n');
}
