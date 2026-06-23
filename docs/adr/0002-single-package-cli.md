# CLI ships in the same package as the docs site

The `fluentui-recipes` CLI lives in the **same npm package and repo as the Astro docs site** (CLI source under `cli/`, built by Vite to `dist/cli.js`), rather than in a separate workspace package. To keep `pnpm dlx fluentui-recipes` lightweight, the docs-site dependencies (`astro`, `@astrojs/*`, `react`, `@fluentui/*`, etc.) are demoted to `devDependencies`, and only the CLI's runtime deps (`commander`, `ts-morph`, `execa`, `@antfu/ni`) stay in `dependencies`.

We chose a single package because a separate workspace was judged to complicate the setup more than it was worth. The non-obvious cost: anyone running `dlx` installs the package's `dependencies`, so the site stack **must** stay in `devDependencies` — promoting any of it back to `dependencies` would silently bloat every CLI invocation with the entire Astro/React/FluentUI stack.

## Consequences

- The published `package.json` name is `fluentui-recipes` (distinct from the site's historical name).
- `files` is restricted to `["dist", "src/registry"]` so the docs site source is not published.
- A reviewer tempted to "tidy" deps back into `dependencies` would break the lightweight-install guarantee.
