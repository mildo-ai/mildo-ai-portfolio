import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mildo.ai',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'ja', 'zh', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
