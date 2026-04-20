const { defineConfig } = require('pollen-css/utils');

module.exports = defineConfig({
  output: './src/assets/pollen/pollen.css',
  modules: {
    blur: false,
    easing: false,
    letter: false,
    line: false,
    prose: false,
    typeset: false,
    weight: false,
    'text-color': {
      black: 'rgba(0, 0, 0, 0.87)',
      white: 'rgba(255, 255, 255, 0.87)',
    },
    color: {
      white: '#fff',
      'grey-100': 'hsl(0, 0%, 90%)',
      'grey-300': 'hsl(0, 0%, 65%)',
      'grey-500': 'hsl(0, 0%, 40%)',
      'grey-700': 'hsl(0, 0%, 25%)',
      'grey-800': 'hsl(0, 0%, 17%)',
      blue: 'hsl(213, 91%, 60%)',
      green: 'hsl(140deg, 70%, 30%)',
      sun: 'hsl(45, 93%, 47%)',
      moon: 'hsl(46, 96%, 64%)',
    },
    theme: {
      transition: '250ms',
    },
  },
});
