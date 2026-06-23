import { builtinModules } from 'node:module';
import { defineConfig } from 'vite';

// Build config for the `fluentui-recipes` CLI only (separate from the Astro site).
// Outputs dist/cli.js as a Node ESM bundle with a shebang.
export default defineConfig({
  build: {
    target: 'node20',
    outDir: 'dist',
    emptyOutDir: false,
    minify: false,
    lib: {
      entry: 'cli/index.ts',
      formats: ['es'],
      fileName: () => 'cli.js',
    },
    rollupOptions: {
      // Externalize node built-ins and the CLI's runtime dependencies; they are
      // installed from package.json `dependencies` when the CLI is run via dlx.
      external: [
        ...builtinModules,
        ...builtinModules.map((m) => `node:${m}`),
        'commander',
        'ts-morph',
        'execa',
        '@antfu/ni',
        '@clack/prompts',
      ],
      output: {
        banner: '#!/usr/bin/env node',
      },
    },
  },
});
