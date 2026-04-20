const { defineConfig } = require('pollen-css/utils');
const { colord } = require('colord');

module.exports = defineConfig({
  output: './src/assets/pollen/pollen.css',
  modules: {
    blur: false,
    easing: false,
    letter: false,
    line: false,
    prose: false,
    weight: false,
    grid: false,
    'text-color': {
      black: colord('rgba(0, 0, 0, 0.87)').toHex(),
      white: colord('rgba(255, 255, 255, 0.87)').toHex(),
    },
    color: {
      white: colord('hsl(0, 100%, 100%)').toHex(),
      'grey-100': colord('hsl(0, 0%, 90%)').toHex(),
      'grey-300': colord('hsl(0, 0%, 65%)').toHex(),
      'grey-500': colord('hsl(0, 0%, 40%)').toHex(),
      'grey-700': colord('hsl(0, 0%, 25%)').toHex(),
      'grey-800': colord('hsl(0, 0%, 17%)').toHex(),
      blue: colord('hsl(213, 91%, 60%)').toHex(),
      green: colord('hsl(140, 70%, 30%)').toHex(),
      sun: colord('hsl(45, 93%, 47%)').toHex(),
      moon: colord('hsl(46, 96%, 64%)').toHex(),
    },
    theme: {
      transition: '250ms',
    },
    header: {
      height: '48px',
    },
  },
});
