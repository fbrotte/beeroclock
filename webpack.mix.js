let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
mix

    /* Showcase assets*/

.js('resources/showcase/js/app.js', 'public/showcase/js')
.sass('resources/showcase/sass/app.sass', 'public/showcase/css')

    /*Admin assets*/
.js('resources/admin/js/app.js', 'public/dashboard/js')
.sass('resources/admin/sass/app.sass', 'public/dashboard/css')
.options({
    postCss: [ tailwindcss('./tailwind.config.js') ],
})
