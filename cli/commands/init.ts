import path from 'node:path';
import fs from 'node:fs';
import * as p from '@clack/prompts';
import {
  type Config,
  DEFAULT_CONFIG,
  readConfig,
  writeConfig,
} from '../lib/config.js';

export type InitOptions = {
  cwd: string;
  yes: boolean;
};

/** Best-effort: warn (never fail) if the alias isn't found in tsconfig paths. */
function warnIfAliasMissing(cwd: string, alias: string): void {
  const tsconfigPath = ['tsconfig.json', 'jsconfig.json']
    .map((f) => path.join(cwd, f))
    .find((f) => fs.existsSync(f));
  if (!tsconfigPath) return;

  try {
    const raw = fs.readFileSync(tsconfigPath, 'utf8');
    // Strip comments crudely so JSONC tsconfigs still parse.
    const json = JSON.parse(
      raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|\s)\/\/.*$/gm, ''),
    );
    const paths = json?.compilerOptions?.paths ?? {};
    const aliasKey = `${alias}/*`;
    if (!paths[aliasKey]) {
      p.log.warn(
        `Alias "${aliasKey}" was not found in ${path.basename(tsconfigPath)} ` +
          `compilerOptions.paths. Imports may not resolve until you add it.`,
      );
    }
  } catch {
    // Ignore unparsable tsconfig — this is best-effort only.
  }
}

function defaultRoot(cwd: string): string {
  return fs.existsSync(path.join(cwd, 'src')) ? './src' : '.';
}

export async function runInit(options: InitOptions): Promise<Config> {
  const { cwd, yes } = options;

  const existing = readConfig(cwd);
  if (existing) {
    return existing;
  }

  let config: Config;

  if (yes) {
    config = {
      alias: DEFAULT_CONFIG.alias,
      root: defaultRoot(cwd),
    };
  } else {
    const alias = await p.text({
      message: 'Import alias prefix?',
      placeholder: DEFAULT_CONFIG.alias,
      defaultValue: DEFAULT_CONFIG.alias,
    });
    if (p.isCancel(alias)) {
      p.cancel('Aborted.');
      process.exit(1);
    }
    const root = await p.text({
      message: 'Which directory does the alias map to?',
      placeholder: defaultRoot(cwd),
      defaultValue: defaultRoot(cwd),
    });
    if (p.isCancel(root)) {
      p.cancel('Aborted.');
      process.exit(1);
    }
    config = {
      alias: (alias as string) || DEFAULT_CONFIG.alias,
      root: (root as string) || defaultRoot(cwd),
    };
  }

  warnIfAliasMissing(cwd, config.alias);
  writeConfig(cwd, config);
  p.log.success(`Wrote fluentui-recipes.json`);
  return config;
}
