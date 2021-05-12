const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
.js('resources/showcase/js/app.js', 'public/showcase/js')
.sass('resources/showcase/sass/app.sass', 'public/showcase/css')

.js('resources/admin/js/app.js', 'public/admin/js')
.sass('resources/admin/sass/app.sass', 'public/admin/css')