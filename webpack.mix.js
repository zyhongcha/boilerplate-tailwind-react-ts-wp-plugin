let mix = require('laravel-mix');

mix.ts('src/index.tsx', 'dist').setPublicPath('dist').react();
mix.postCss('src/tailwind.css', 'dist');
mix.browserSync({
    // proxy: '',
    // host: '',
    files: ['./**/*.php', './**/*.css', './**/*.js']
    })