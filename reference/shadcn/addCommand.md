# shadcn CLI — `add` Command Reference

> Source analyzed via `opensrc` from `shadcn-ui/ui` (branch `main`).
> Primary file: `packages/shadcn/src/commands/add.ts`
> Supporting files: `preflights/preflight-add.ts`, `utils/add-components.ts`,
> `registry/resolver.ts`, `utils/registries.ts`, `utils/dry-run.ts`.

## Purpose

`shadcn add [components...]` resolves one or more registry "items" (components,
hooks, libs, themes, styles, blocks, etc.), pulls their full dependency tree
from a registry, and writes the resulting files, dependencies, CSS variables,
Tailwind config, fonts, and env vars into the user's project. It can also
bootstrap a project (run `init`) when none exists.

---

## CLI Definition

```
add [components...]      item addresses to add (component names, URLs, @registry/name, GitHub addresses)
```

### Options

| Flag | Alias | Default | Description |
|------|-------|---------|-------------|
| `--yes` | `-y` | `false` | Skip confirmation prompts |
| `--overwrite` | `-o` | `false` | Overwrite existing files |
| `--cwd <cwd>` | `-c` | `process.cwd()` | Working directory (resolved to absolute) |
| `--all` | `-a` | `false` | Add all available components from the index |
| `--path <path>` | `-p` | — | Target path to add the component to |
| `--silent` | `-s` | `false` | Mute output |
| `--dry-run` | | `false` | Preview changes without writing files |
| `--diff [path]` | | — | Show diff for a file (implies dry-run) |
| `--view [path]` | | — | Show file contents (implies dry-run) |

Options are validated with a Zod schema (`addOptionsSchema`). Note that
`--diff` and `--view` both set `isDryRun = true`, so they never write to disk.

---

## Execution Flow (`add.action`)

The action is wrapped in `try/catch/finally`. On error it calls
`handleError(error)`; the `finally` always calls `clearRegistryContext()`
(clears per-run registry auth headers).

### 1. Parse options & load env

- `addOptionsSchema.parse({ components, ...opts, cwd: path.resolve(opts.cwd) })`.
- `await loadEnvFiles(options.cwd)` — loads `.env` files so registry auth tokens
  / env-based config are available.
- Computes `isDryRun = options.dryRun || options.diff || options.view`.

### 2. Resolve (or synthesize) an initial config

- `getConfig(options.cwd)` reads `components.json`.
- If none exists, a temporary in-memory config is created with
  `createConfig({ style: "new-york", resolvedPaths: { cwd } })` so registry
  resolution can still proceed.

### 3. Ensure registries are configured

If components were passed:

- `ensureRegistriesInConfig(components, initialConfig, { silent, writeFile: false })`
  inspects the component addresses, discovers any **namespaced registries**
  (e.g. `@acme/button`), and, when missing, looks them up in the registries
  index and injects them into the config.
- At this stage `writeFile: false` — it only updates the in-memory config and
  reports `newRegistries`. `hasNewRegistries` is tracked to control later
  silent flags.

### 4. Inspect the first item's type

For the first component, `getRegistryItems([components[0]], { config })` fetches
its metadata to determine `itemType`:

- `shouldInstallStyleIndex` is `false` for `registry:theme`, `registry:style`,
  and `registry:base` types.
- **Universal registry items** (`isUniversalRegistryItem`) short-circuit:
  when not a dry-run, it calls `addComponents(...)` directly and returns. These
  are registry items that aren't tied to a framework/project structure.
- For `registry:style` or `registry:theme`, unless `--yes` or dry-run, the user
  is warned that **existing CSS variables and components will be overwritten**
  and prompted to confirm. Declining exits with code 1.

### 5. Resolve which components to add

If no components were provided on the CLI, `promptForRegistryComponents(options)`
is called (see below). This populates `options.components`.

### 6. Deprecated-component guard (Tailwind v4)

- `getProjectInfo(cwd)` detects the framework + Tailwind version.
- On **Tailwind v4**, any requested component in `DEPRECATED_COMPONENTS` causes
  a warning to print and the process to exit with code 1.

### 7. Preflight checks (`preFlightAdd`)

`preFlightAdd(options)` returns `{ errors, config }`:

- **`MISSING_DIR_OR_EMPTY_PROJECT`** — set if `cwd` doesn't exist or has no
  `package.json` (treated as an empty project).
- **`MISSING_CONFIG`** — set if there's no `components.json`. If the cwd is a
  monorepo root, it instead prints monorepo targets and exits (telling the user
  to run the command inside a workspace package).
- If `components.json` exists but is invalid, it logs an error pointing to the
  `init` command and exits.

### 8. Handle missing config → run `init`

If `MISSING_CONFIG`:

- Prompt: "You need to create a components.json file… Proceed?" Declining exits.
- Infers a template from the detected framework (`getTemplateForFramework`).
- Prompts for a **base** and a **preset** (`promptForBase`, `promptForPreset`).
- `resolveRegistryBaseConfig(initUrl, cwd)` derives `registryBaseConfig`,
  `installStyleIndex`, and a cleaned init URL.
- Runs `runInit(...)` with `yes: true, force: true, isNewProject: false`,
  passing the requested components so they're installed during init.
- Sets `initHasRun = true` (so step 11 won't re-add them).

### 9. Handle empty/missing project → scaffold

If `MISSING_DIR_OR_EMPTY_PROJECT`:

- `createProject({ cwd, force: overwrite, components })` scaffolds a new app;
  if it fails, exit. Updates `options.cwd` to the new project path.
- Prompts for base + preset, resolves registry base config, and runs
  `runInit(...)` with `isNewProject: true, skipPreflight: true`.
- Sets `initHasRun = true`.
- Sets `shouldUpdateAppIndex` when a single component is a v0 chat block
  (address matches `/\/chat\/b\//`).

### 10. Persist registries to config

- If `config` is still null, throw "Failed to read config…".
- `ensureRegistriesInConfig(options.components, config, { writeFile: !isDryRun })`
  runs again — this time it **writes** discovered registries into
  `components.json` (unless dry-run).

### 11. Dry-run branch

If `isDryRun`:

- `dryRunComponents(options.components, config, { overwrite })` resolves the
  full tree and computes per-file actions (`create` / `overwrite` / `skip`),
  applying the same transformers used for real writes (import rewriting, CSS
  vars, icons, RSC, RTL, Tailwind prefix, etc.) — but in memory only.
- `formatDryRunResult(...)` prints the result, honoring `--diff` / `--view`,
  then returns without writing.

### 12. Add components

If `init` did **not** already run (`!initHasRun`):

- `addComponents(options.components, config, options)` performs the real install.

### 13. v0 app index update

If `shouldUpdateAppIndex`, `updateAppIndex(component, config)` rewrites
`app/page.tsx` to import the newly added v0 component.

---

## `promptForRegistryComponents`

- Fetches the shadcn registry index (`getShadcnRegistryIndex`); on failure logs
  an error and returns `[]`.
- `--all`: returns every index entry name minus deprecated components.
- If components already provided: returns them as-is.
- Otherwise shows a **multiselect** prompt, restricted to `registry:ui` entries
  (excluding deprecated ones). Hint: "Space to select. A to toggle all. Enter to
  submit." Selecting nothing warns and exits with code 1.
- Validates the result with `z.array(z.string())`.

---

## `addComponents` (`utils/add-components.ts`)

Entry point that branches between single-project and monorepo/workspace installs.

- `getWorkspaceConfig(config)` — if a workspace UI config exists whose cwd
  differs from the project cwd, delegates to **`addWorkspaceComponents`**
  (also flagging `isRemote` for v0 chat blocks). Otherwise calls
  **`addProjectComponents`**.

### `addProjectComponents`

1. `resolveRegistryTree(components, configWithDefaults(config))` — builds the
   full install tree (see resolver below). Failure → error.
2. `validateFilesTarget(tree.files, cwd)` — rejects unsafe file targets
   (`isSafeTarget`) to prevent path traversal / writing outside the project.
3. Detects Tailwind version.
4. Unless `skipFonts`, `massageTreeForFonts(tree, config)` adjusts the tree for
   font handling (fontsource deps + CSS, or `next/font` CSS vars).
5. Applies updates **in this order**:
   - `updateDependencies(tree.dependencies, tree.devDependencies, ...)` —
     installs npm deps.
   - `updateTailwindConfig(tree.tailwind?.config, ...)`.
   - `updateEnvVars(tree.envVars, ...)`.
   - `updateFonts(tree.fonts, ...)` (unless `skipFonts`).
   - `updateFiles(tree.files, ...)` — writes component/source files, honoring
     `overwrite` and `path`.
   - `updateCss(tree.css, ...)` — **written last** so a single file-watcher
     rebuild fires after everything else is in place. CSS-var overwrite is
     auto-decided via `shouldOverwriteCssVars` (true if any item is a theme,
     style, font, or base type) unless explicitly set.
6. Logs `tree.docs` if present.

### `addWorkspaceComponents` (monorepo)

Handles installs where files must be split across workspace packages:

- Resolves and validates the tree the same way.
- Global concerns (deps, Tailwind config, env vars) target the **UI package**
  (`workspaceConfig.ui`); fonts target the **app** config (so `app/layout.tsx`
  is modified in the right place).
- Files are grouped by target config key (`components` / `ui` / `lib` / `hooks`)
  using either an explicit `@alias/` target prefix or the file's
  `registry:*` type, then written into the matching workspace package.
- Tracks created/updated/skipped files, dedupes & sorts them, and prints a
  summary (`Created N files`, `Updated N files`, `Skipped N files (use
  --overwrite to overwrite)`).

---

## `resolveRegistryTree` (`registry/resolver.ts`)

The heart of dependency resolution. Given item names/addresses + config it:

1. **Resolves addresses** — supports plain names (`styles/<style>/<name>.json`),
   full URLs, local files, namespaced `@registry/item`, and GitHub item
   addresses. Namespaced items resolve to URLs + auth headers via the
   configured registries; using a namespace with no configured registry throws
   `RegistryNotConfiguredError`.
2. **Fetches items** (`fetchRegistryItems`) with an in-flight source cache.
3. **Recursively resolves `registryDependencies`** (`resolveDependenciesRecursively`)
   with a `visited` set to avoid cycles, tracking a `_source` per item so two
   items with the same name from different registries don't collide.
4. **Index resolution** for non-namespaced dependency names; optionally fetches
   a `registry:theme` for the configured `baseColor` when resolving `index`.
5. **Topological sort** (`topologicalSortRegistryItems`, Kahn's algorithm) so
   dependencies are written before dependents; circular deps are tolerated
   (items still included). Items are hashed by name+source to disambiguate.
6. **Theme-first ordering** — `registry:theme` items are moved to the front.
7. **Deep-merges** `tailwind`, `cssVars`, `css`, `envVars`, concatenates `docs`,
   merges `dependencies`/`devDependencies`, and **dedupes files by resolved
   target path** (`deduplicateFilesByTarget`).
8. Collects `registry:font` items into `fonts`.
9. Returns a validated `registryResolvedItemsTreeSchema` bundle.

---

## `ensureRegistriesInConfig` (`utils/registries.ts`)

- Uses `resolveRegistryNamespaces(components, config)` to discover every
  namespace referenced (including via dependencies).
- Filters out namespaces already in config or in `BUILTIN_REGISTRIES`.
- Looks up missing ones in the registries index (`getRegistriesIndex`,
  cached outside development) and injects found entries into the config,
  optionally writing `components.json` (`writeFile`).
- Fails silently if the index can't be fetched, returning `newRegistries: []`.

---

## Item Types Recognized

- `registry:ui` — UI components (the multiselect prompt default).
- `registry:hook`, `registry:lib` — hooks / library files.
- `registry:theme`, `registry:style`, `registry:base` — affect CSS vars /
  Tailwind theme; trigger overwrite warnings and skip the style index install.
- `registry:font` — font items, processed by the fonts updater.
- Universal registry items — installed directly, bypassing project structure.

---

## Notable Behaviors & Safety Nets

- **Path-traversal protection**: `validateFilesTarget` + `isSafeTarget` abort
  installation if a registry item targets a path outside the project.
- **Destructive-change confirmation** for styles/themes unless `--yes`.
- **Deprecated component blocking** on Tailwind v4.
- **Monorepo awareness**: detects monorepo roots and routes files to the right
  workspace package; refuses to run at the root.
- **Auto-init**: can scaffold a project or create `components.json` mid-command.
- **CSS written last** to minimize redundant file-watcher rebuilds.
- **Registry context cleanup** in `finally` to avoid leaking auth headers
  between runs.
- `--diff` and `--view` are implicit dry-runs (never write).
