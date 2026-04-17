import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hoyeob.kim',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
