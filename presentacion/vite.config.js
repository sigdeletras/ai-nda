import { defineConfig } from 'vite';
export default defineConfig({
  base: '/ai-nda/',
  build: { outDir: 'dist', emptyOutDir: true, assetsDir: 'assets' },
  server: { host: '0.0.0.0' }
});
