import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.ibnuhamzah.my.id',  // ganti dengan domain asli kamu
  base: '',                    // atau '/blog/' kalau deploy di subfolder
  output: 'static',
  integrations: [sitemap()],
  build: {
    cssCodeSplit: false // Gabungkan semua CSS ke 1 file
  }
});

