import { Project, ScriptKind } from 'ts-morph';

/**
 * Rewrite the registry's `@/` import alias to the user's configured alias.
 *
 * Inside registry source, `@/` resolves to the registry root (see tsconfig
 * paths). We prefix-swap only the leading `@` of specifiers that start with
 * `@/`, leaving real npm scoped packages (`@fluentui/...`) untouched. ts-morph
 * is used (not regex) so only genuine module specifiers are rewritten, never
 * string literals or comments.
 */
export function rewriteImports(
  source: string,
  fileName: string,
  alias: string,
): string {
  // No-op when the alias is already `@`.
  if (alias === '@') {
    return source;
  }

  const project = new Project({
    useInMemoryFileSystem: true,
    skipAddingFilesFromTsConfig: true,
    compilerOptions: { allowJs: true },
  });

  const scriptKind = fileName.endsWith('.tsx')
    ? ScriptKind.TSX
    : ScriptKind.TS;
  const sourceFile = project.createSourceFile(fileName, source, {
    scriptKind,
  });

  const updateSpecifier = (value: string): string | null => {
    if (value === '@' || value.startsWith('@/')) {
      // Swap only the leading `@` prefix.
      return alias + value.slice(1);
    }
    return null;
  };

  for (const decl of sourceFile.getImportDeclarations()) {
    const next = updateSpecifier(decl.getModuleSpecifierValue());
    if (next !== null) decl.setModuleSpecifier(next);
  }
  for (const decl of sourceFile.getExportDeclarations()) {
    const current = decl.getModuleSpecifierValue();
    if (current === undefined) continue;
    const next = updateSpecifier(current);
    if (next !== null) decl.setModuleSpecifier(next);
  }

  return sourceFile.getFullText();
}
