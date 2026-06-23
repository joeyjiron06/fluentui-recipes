# Bundled local registry instead of a remote registry

The `fluentui-recipes` CLI reads `registry.json` and component/hook source from `src/registry` **bundled inside its own published npm package**, resolved relative to the built `dist/cli.js` — it does not fetch them over HTTP from a hosted registry (as shadcn does).

We chose this because it needs no hosting or network code, makes `pnpm dlx fluentui-recipes@latest add ...` fully deterministic, and works offline. The trade-off: every change to a component requires an npm publish, and the published package is larger because all recipe source ships inside it. For a curated, slow-moving FluentUI recipe set that is an acceptable cost.

## Consequences

- The build must include `src/registry` in the published `files`.
- The CLI resolves the registry path relative to its own location (`dist/cli.js` → `../src/registry`), so that relative layout must stay stable in the published tarball.
