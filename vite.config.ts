import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import legacy from '@vitejs/plugin-legacy';
import { minifyHtml } from 'vite-plugin-html';

export default defineConfig({
  assetsInclude: ['html'],
  plugins: [
    solidPlugin(),
    legacy(),
    minifyHtml({
      collapseWhitespace: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: true,
      removeEmptyAttributes: true,
      useShortDoctype: false,
    }),
  ],
  base: '/cmll/',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        index: 'index.html',
        '404': '404.html',
      },
    },
  },
});
