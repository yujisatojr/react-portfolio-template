import { defineConfig } from 'astro/config';

// User site: served from the root of https://waleedasaf.github.io
export default defineConfig({
  site: 'https://waleedasaf.github.io',
  compressHTML: true,
});
