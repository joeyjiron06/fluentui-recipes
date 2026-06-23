import { Command } from 'commander';
import * as p from '@clack/prompts';
import { runAdd } from './commands/add.js';
import { runInit } from './commands/init.js';

const program = new Command();

program
  .name('fluentui-recipes')
  .description('Copy FluentUI component & hook source into your project.');

program
  .command('init')
  .description('Create fluentui-recipes.json in the current project.')
  .option('-y, --yes', 'Use defaults, skip prompts.', false)
  .action(async (opts: { yes: boolean }) => {
    p.intro('fluentui-recipes init');
    await runInit({ cwd: process.cwd(), yes: opts.yes });
    p.outro('Done.');
  });

program
  .command('add')
  .description('Add components/hooks to your project.')
  .argument('<names...>', 'Registry item names (e.g. fileUpload001).')
  .option('-y, --yes', 'Skip prompts; auto-init and auto-install.', false)
  .option('-o, --overwrite', 'Overwrite existing files.', false)
  .option('-p, --path <path>', 'Override the install root.')
  .option('--dry-run', 'Preview changes without writing anything.', false)
  .action(
    async (
      names: string[],
      opts: {
        yes: boolean;
        overwrite: boolean;
        path?: string;
        dryRun: boolean;
      },
    ) => {
      p.intro('fluentui-recipes add');
      await runAdd(names, {
        cwd: process.cwd(),
        yes: opts.yes,
        overwrite: opts.overwrite,
        path: opts.path,
        dryRun: opts.dryRun,
      });
      p.outro('Done.');
    },
  );

program.parseAsync(process.argv).catch((error) => {
  p.log.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
