import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import legacy from '@vitejs/plugin-legacy';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  assetsInclude: ['html'],
  plugins: [
    solidPlugin(),
    legacy(),
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeAttributeQuotes: false,
        removeComments: true,
        removeEmptyAttributes: true,
        useShortDoctype: false,
      },
      pages: [
        {
          entry: 'src/index.tsx',
          filename: 'index.html',
          template: 'public/index.html',
        },
        {
          filename: '404.html',
          template: 'public/404.html',
        },
      ],
    }),
  ],
  base: '/cmll/',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
});
