import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://cryptopedia-com.web.app",
  integrations: [tailwind(), mdx(), sitemap(), icon(), db()],
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
});