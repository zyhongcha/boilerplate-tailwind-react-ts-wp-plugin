let mix = require('laravel-mix');

mix.js('src/app.js', 'dist').setPublicPath('dist');
// mix.postCss('src/style.css', 'dist', [
//     require('postcss-custom-properties')
// ]);
mix.postCss('src/style.css', 'dist');
mix.browserSync({
    proxy: 'localhost/zyhongcha',
    host: 'localhost/zyhongcha',
    fiels: ['./**/*.php', './*.php', './**/*.css', './**/*.js']
    })