import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://jhewhome.xyz',
  compressHTML: true,
  adapter: cloudflare()
});