import { defineConfig } from 'vite';

// Las notas del ponente (<aside class="notes">) solo se incluyen en desarrollo.
// En `vite build` se eliminan del bundle, salvo con KEEP_NOTES=1 (ensayo local).
export default defineConfig(({ command }) => {
  const keepNotes = command !== 'build' || process.env.KEEP_NOTES === '1';
  return {
    base: '/ai-nda/',
    build: { outDir: 'dist', emptyOutDir: true, assetsDir: 'assets' },
    server: { host: '0.0.0.0' },
    define: { __KEEP_NOTES__: JSON.stringify(keepNotes) },
    plugins: [{
      name: 'strip-speaker-notes',
      enforce: 'pre',
      transform(code, id) {
        if (keepNotes || !/[\\/]src[\\/]slides\.js$/.test(id)) return null;
        return { code: code.replace(/<aside class="notes">[\s\S]*?<\/aside>/g, ''), map: null };
      }
    }]
  };
});
