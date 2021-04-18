let tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        require('postcss-preset-env'),
        tailwindcss('./tailwind.config.js') // your tailwind.js configuration file path
        // require('autoprefixer'),
    ]
}