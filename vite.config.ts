import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  esbuild: false,
  plugins: [solidPlugin()],
  base: '/cmll/',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    emptyOutDir: true,
  },
});
