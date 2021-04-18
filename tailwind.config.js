const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './*.php',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
