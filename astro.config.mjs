// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { cjsInterop } from "vite-plugin-cjs-interop";
import react from "@astrojs/react";

// Keep these in sync with tsconfig.json `compilerOptions.paths`:
//   @/* -> ./src/registry/*   (registry root)
//   ~/* -> ./src/*            (site root)
const registryRoot = fileURLToPath(new URL("./src/registry", import.meta.url));
const siteRoot = fileURLToPath(new URL("./src", import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://joeyjiron.com',
  base: '/fluentui-recipes',
  
  integrations: [
    mdx(),
    sitemap(),
    react({
      experimentalDisableStreaming: true,
    }),
  ],
  vite: {
    resolve: {
      alias: [
        // Anchored so `@/...` resolves to the registry, while real scoped
        // packages like `@fluentui/...` are left untouched.
        { find: /^@\//, replacement: `${registryRoot}/` },
        { find: /^~\//, replacement: `${siteRoot}/` },
      ],
    },
    plugins: [
      cjsInterop({
        dependencies: ["@fluentui/react-components"],
      }),
    ],
    ssr: {
      noExternal: ["@fluentui/react-icons"],
    },
  },
});
