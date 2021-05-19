const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
              },
        },
        screens: {
            'sm': {'max': '639px'},
      
            'md': {'max': '767px'},
      
            'lg': {'max': '1023px'},
      
            'xl': {'max': '1279px'},
          },
          fontFamily: {
            'sans': ['Ubuntu', 'Sans-serif']
          },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
      require('tailwindcss-animatecss')({
        settings: {
          animatedSpeed: 1000,
          heartBeatSpeed: 1000,
          hingeSpeed: 2000,
          bounceInSpeed: 750,
          bounceOutSpeed: 750,
          animationDelaySpeed: 1000
        },
        variants: ['responsive'],
      }),
      require('@tailwindcss/forms'),
    ],
};
