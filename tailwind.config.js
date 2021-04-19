
module.exports = {
  purge: [
    './**/*.php',
    './**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  prefix: 'tw-', //to prevent overlapping styles from WP
  variants: {
    extend: {},
  },
  plugins: [],
}
