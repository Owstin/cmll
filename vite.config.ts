import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  esbuild: false,
  plugins: [solidPlugin(), legacy()],
  base: '/cmll/',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
});
