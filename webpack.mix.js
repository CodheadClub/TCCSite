const mix = require('laravel-mix')

mix.disableNotifications()

mix.webpackConfig({
  stats: {
    children: true
  }
})

mix.js('src/js/app.js', 'dist/')
  .sass('src/scss/app.scss', 'dist/')

// Autoprefixer is enabled by default, see:
// https://laravel-mix.com/docs/6.0/autoprefixer
