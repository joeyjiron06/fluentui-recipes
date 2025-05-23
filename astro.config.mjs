// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { cjsInterop } from "vite-plugin-cjs-interop";
import react from "@astrojs/react";

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
