let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
mix

    /* Showcase assets*/

.js('resources/showcase/js/app.js', 'public/showcase/js')
.sass('resources/showcase/sass/app.sass', 'public/showcase/css')

    /*Admin assets*/
.js('resources/admin/js/app.js', 'public/admin/js')
.sass('resources/admin/sass/app.sass', 'public/admin/css')
.options({
    postCss: [ tailwindcss('./tailwind.config.js') ],
})
