// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://miprofe.com',
  output: 'static',

  // ── Astro native i18n routing ──────────────────────────────────
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false, // Spanish at /, English at /en/, French at /fr/
    },
  },

  integrations: [
    sitemap({
      // Generate hreflang entries for every locale automatically
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CO',
          en: 'en-US',
          fr: 'fr-FR',
        },
      },
    }),
    icon({
      include: {
        tabler: ['*'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
