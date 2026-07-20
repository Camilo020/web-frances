import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://ouipaula.com',
  output: 'static',
  trailingSlash: 'always',

  // ── Astro native i18n routing ──────────────────────────────────
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // ── Prefetch all links visible in viewport ──────────────────────
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  integrations: [
    sitemap({
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