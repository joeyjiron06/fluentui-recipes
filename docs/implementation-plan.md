# Implementation Plan: `fluentui-recipes` CLI

> Handoff for the implementing agent. Everything below was resolved in a design
> grilling session. Decisions are final unless noted. Build in the order in
> §10. Cross-references: [CONTEXT.md](../CONTEXT.md),
> [ADR 0001](./adr/0001-bundled-local-registry.md),
> [ADR 0002](./adr/0002-single-package-cli.md),
> [shadcn add reference](../reference/shadcn/addCommand.md).

## 0. One-paragraph summary

Build a stripped-down shadcn-style CLI, published as the npm package
`fluentui-recipes`, that lets users run
`pnpm dlx fluentui-recipes@latest add fileUpload001` (and the npm/yarn/bun
equivalents) to copy FluentUI component/hook source into their project. The CLI
ships its own registry source (bundled, no network), resolves transitive
registry dependencies, rewrites `@/` imports to the user's configured alias, and
installs the required npm packages with their package manager. A `init` command
writes the config; `add` auto-runs it when missing. The same repo also hosts the
existing Astro docs site, whose component preview dialog gains an "Installation"
section showing the per-package-manager install command.

## 1. Context you must internalize first

- This repo is currently an **Astro docs site** (`package.json` name
  `fluent-ui-2-recipes`). We are turning it into a **single package** that is
  both the site (dev-only) and the published CLI. See ADR 0002.
- The **registry** is `src/registry/registry.json` + the source files under
  `src/registry/` (`components/`, `hooks/`). It uses the **shadcn registry
  schema**. It is the single source of truth for installable items.
- `tsconfig.json` paths: `@/*` → `./src/registry/*`, `~/*` → `./src/*`.
  **Therefore, inside registry source, `@/` means the registry root.** Example:
  `src/registry/components/fileUpload/fileUpload001.tsx` contains
  `import useFileUpload from '@/hooks/useFileUpload'`, which means
  `src/registry/hooks/useFileUpload.ts`.
- Read the shadcn source via `opensrc path shadcn-ui/ui` when you need
  implementation detail. Key files already studied:
  - `packages/shadcn/src/utils/get-package-manager.ts` (PM detection + runner
    command mapping)
  - `packages/shadcn/src/utils/updaters/update-dependencies.ts` (npm install)
  - `packages/shadcn/src/utils/updaters/update-files.ts` (`resolveFilePath`,
    `toRelativeImport`, ts-morph import rewriting)
  - `packages/shadcn/src/utils/transformers/transform-import.ts` (alias rewrite)

## 2. Scope (and explicit non-scope)

**In scope:** `init` command, `add` command, config file, registry resolution,
import rewriting, npm dep install, the docs "Installation" UI, packaging/build.

**Out of scope (do NOT build):** multiple registries / registry URLs, remote
fetching, themes/styles/CSS vars, Tailwind, fonts, env vars, monorepo/workspace
routing, `--all`, `--diff`, `--view`, `--silent`, project scaffolding
(`create-project`), framework detection beyond what's needed to read tsconfig.

## 3. CLI surface

Library: **commander**. Two commands.

### `add <names...>`

| Flag | Default | Behaviour |
|------|---------|-----------|
| `--yes` | false | Skip all prompts. Runs `init` with defaults if no config. Does **not** overwrite existing files unless `--overwrite` also passed. Auto-proceeds with npm install. |
| `--overwrite` | false | Clobber existing files without prompting. |
| `--path <path>` | — | Override the install root. Resolved relative to cwd; absolute passes through. Preserves the `components/`/`hooks/` substructure. |
| `--dry-run` | false | Resolve the full tree and print what would be created/overwritten/skipped + which npm deps would install. Write nothing, install nothing, write no config. |

- Items are addressed by **exact `registry.json` `name`** (e.g. `fileUpload001`,
  `useFileUpload`). Unknown name → print `Unknown component: "<name>"` and
  `process.exit(1)`.
- Existing file, no `--overwrite`, not `--yes`: **prompt per file**
  ("file X exists, overwrite?"). With `--yes`: skip existing files, report them
  as skipped.

### `init`

- Prompts (each with a default, `--yes` uses defaults silently):
  1. **alias** prefix — default `@`
  2. **root** directory the alias maps to — default `./src` (fall back to `.` if
     no `src/` dir exists)
- Best-effort validation: read `tsconfig.json`/`jsconfig.json`
  `compilerOptions.paths`; if the alias isn't found, print a **warning** and
  proceed (never hard-fail).
- Writes `fluentui-recipes.json` at project root.

## 4. Config file

`fluentui-recipes.json` at project root:

```json
{ "alias": "@", "root": "./src" }
```

- `add` reads it; if missing, runs `init` inline first (defaults under `--yes`).
- Under `--dry-run` with no config: use in-memory defaults (`@`, `./src`),
  preview where files would land, print a note that `init` would run for real,
  and **write no config file**.

## 5. Registry resolution

1. Load bundled `registry.json` (resolve `src/registry` **relative to the built
   `dist/cli.js`**, i.e. `../src/registry` — see ADR 0001).
2. Look up each requested name in `items[].name`.
3. Resolve `registryDependencies` transitively (track a visited set; the current
   data is one level deep — component → `useFileUpload`). Dedupe.
4. Collect the union of each item's `files` and npm `dependencies`.

### Required `registry.json` change

Add a `dependencies` array to each **component** item:

```json
"dependencies": ["@fluentui/react-components", "@fluentui/react-icons"]
```

The `useFileUpload` hook item needs no extra deps (only `react`, already a peer
of any consumer). Verify per item by checking actual imports before finalizing
the list — only add packages the file actually imports.

## 6. File writing + import rewriting

For each resolved file (registry path like `components/fileUpload/fileUpload001.tsx`
or `hooks/useFileUpload.ts`):

- **Target path:** mirror the registry layout under the install root.
  Install root = directory the config `root` points to (or `--path` if given).
  So `components/...` → `<root>/components/...`, `hooks/...` → `<root>/hooks/...`.
  Reference `resolveFilePath` in shadcn `update-files.ts` for the
  relative/absolute `--path` handling.
- **Import rewrite (alias prefix-swap via ts-morph):** parse the file with
  ts-morph, walk import/export module specifiers, and for any starting with
  `@/`, replace the `@` prefix with the configured alias. (If the user's alias
  is literally `@`, this is a no-op.) Leave all other specifiers untouched
  (`@fluentui/react-components`, `react`, etc. — these are real npm packages).
  Use ts-morph (not regex) so only genuine module specifiers are touched, never
  string literals/comments. This is the simplified analogue of shadcn's
  `transformImport`.
- Create target dirs as needed. Honour overwrite/skip rules from §3.

## 7. npm dependency install

Follow the shadcn pattern exactly:

- Detect package manager with `@antfu/ni`'s `detect({ programmatic: true, cwd })`,
  fall back to `npm_config_user_agent`, then `npm`. (See shadcn
  `get-package-manager.ts`.)
- Merge npm `dependencies` across the resolved tree, dedupe, and **skip bare
  package names already present** in the user's `package.json`
  (dependencies/devDependencies/peer/optional) to stay idempotent.
- Install via `execa`: `<pm> add <deps>` (npm uses `install`). See
  `update-dependencies.ts`.
- Under `--dry-run`: print what would install, run nothing.

## 8. Docs UI — "Installation" section in `componentPreview.tsx`

File: `src/react/components/componentPreview.tsx`.

- Add a **required `name` prop** (the registry item name) to `ComponentPreview`.
  Update all call sites that render previews to pass it.
- In the dialog, add a **first section titled "Installation"** above the existing
  Dependencies/Code sections.
- Use a FluentUI **`TabList`/`Tab`** switcher with one tab per package manager.
  Command strings (interpolate the `name` prop):
  - pnpm: `pnpm dlx fluentui-recipes@latest add <name>`
  - npm:  `npx fluentui-recipes@latest add <name>`
  - yarn: `yarn dlx fluentui-recipes@latest add <name>`
  - bun:  `bunx fluentui-recipes@latest add <name>`
- Render the active command in a code block (reuse `SyntaxHighlighter`) with a
  **copy-to-clipboard button**.
- Do **not** show the npm dependency list separately — the `add` command handles
  deps.

## 9. Packaging & build (single package — ADR 0002)

- Rename `package.json` `name` → `fluentui-recipes`.
- Add `"bin": { "fluentui-recipes": "./dist/cli.js" }` and `"type": "module"`
  is already set.
- CLI source lives in **`cli/`** at repo root (outside `src/` so it's neither
  registry nor site).
- Build the CLI with a **Vite config** (lib mode, `target: 'node'`, externalize
  node built-ins; output `dist/cli.js` with a `#!/usr/bin/env node` shebang).
- `"files": ["dist", "src/registry"]` so npm publishes the built CLI **and** the
  registry source (ADR 0001).
- **Dependency reshuffle (critical — ADR 0002):**
  - Move to `devDependencies`: `astro`, `@astrojs/*`, `react`, `react-dom`,
    `@fluentui/react-components`, `@fluentui/react-icons`, `@tabler/icons-react`,
    `react-syntax-highlighter`, `modern-normalize`, `postcss-custom-media` (and
    `@types/*` for these).
  - Add to `dependencies` (CLI runtime only): `commander`, `ts-morph`, `execa`,
    `@antfu/ni`, plus a prompts lib (`prompts` or `@clack/prompts`) and a
    tsconfig-paths reader if needed.
  - Rationale: `pnpm dlx fluentui-recipes` installs the package's
    `dependencies`; keeping the site stack in `dependencies` would bloat every
    invocation. Do not promote site deps back.
- Add scripts: `build:cli` (vite build of the CLI), keep existing astro scripts.
- At runtime the CLI resolves `src/registry` relative to `dist/cli.js`
  (`new URL('../src/registry', import.meta.url)`).

## 10. Suggested build order

1. **Packaging foundation:** rename package, reshuffle deps, add `bin`/`files`,
   create `cli/` + Vite config, get an empty `dist/cli.js` building and runnable.
2. **`registry.json`:** add `dependencies` arrays to component items (verify
   against actual imports).
3. **Config + `init`:** read/write `fluentui-recipes.json`, prompts, tsconfig
   warning.
4. **`add` core:** registry resolution → transitive deps → file targeting →
   ts-morph prefix-swap → write files (overwrite/skip/prompt) → npm install →
   `--dry-run` + auto-init wiring.
5. **Docs UI:** `name` prop + Installation `TabList` + copy button.

## 11. Watch-outs (caught during grilling)

- **`@/` ambiguity:** `@/` = registry root *in registry source*. Don't confuse
  with `~/` (= `src/`). Only swap `@/`.
- **dlx bloat:** if site deps stay in `dependencies`, the CLI install balloons.
  This is the single most important packaging detail.
- **dry-run side effects:** never write the config file or install anything in
  `--dry-run`.
- **idempotency:** re-running `add` must not rewrite existing dep specifiers
  (skip already-declared bare packages) and must not clobber files without
  `--overwrite`.
- **registry path resolution after build:** the `dist/cli.js` → `../src/registry`
  relative path must hold in the published tarball, so the Vite output location
  and `files` must agree.
- **"dependency" is overloaded:** registry dependencies (other items) vs npm
  dependencies (packages). Keep them separate in code and messaging.
