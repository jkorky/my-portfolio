// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://jkorky.github.io',
  base: '/my-portfolio',
  integrations: [icon({
    iconDir: 'src/assets/icons',
    include: {
      lucide: ["instagram", "linkedin", "github", "chevron-right"],
    },
  })],
});