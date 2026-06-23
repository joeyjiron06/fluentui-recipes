# FluentUI Recipes

A library of copy-in FluentUI React components, browsable on a docs site and installable into a user's project via a CLI (`pnpm dlx fluentui-recipes add ...`). Inspired by shadcn's distribution model, but FluentUI-styled and deliberately stripped down.

## Language

**Registry**:
The catalog of installable source, described by `src/registry/registry.json` plus the files under `src/registry/`. The single source of truth for what can be installed.
_Avoid_: catalog, library, package index

**Registry Item**:
One installable entry in the Registry, identified by its `name`. Has a type, a list of `files`, and optional `registryDependencies`.
_Avoid_: entry, module, package

**Component**:
A Registry Item of type `registry:component` — a `.tsx` UI recipe (e.g. `fileUpload001`).

**Hook**:
A Registry Item of type `registry:hook` — a reusable `.ts` hook (e.g. `useFileUpload`).

**Registry Dependency**:
A reference from one Registry Item to another by `name` (e.g. `fileUpload001` depends on `useFileUpload`). Resolved and installed transitively by the `add` command.
_Avoid_: npm dependency (those are external packages installed via the package manager, a separate concept)

**Alias Root**:
The directory the user's import alias (default `@`) points to. The `init` command records it in the config; the `add` command writes Items into it, mirroring the Registry's own `components/` and `hooks/` subfolders.
_Avoid_: install dir, target dir

## Relationships

- A **Component** has one or more **Registry Dependencies** on **Hooks**
- The `add` command resolves a **Registry Item** plus its transitive **Registry Dependencies** and writes them under the **Alias Root**
- `init` establishes the **Alias Root**; `add` auto-runs `init` if no config exists

## Flagged ambiguities

- "dependency" is overloaded: a **Registry Dependency** (another Registry Item) is distinct from an npm package dependency. Always qualify.
