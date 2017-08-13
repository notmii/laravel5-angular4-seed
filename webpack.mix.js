let mix = require('laravel-mix');

mix
  .version()
  .disableNotifications()
  .webpackConfig({
    module: {
      // loaders: [
      //   {
      //     test: /\.tsx?$/,
      //     loader: 'ts-loader',
      //     exclude: /node_modules/
      //   },
      //   {
      //     test: /\.(html)$/,
      //     use: [{
      //       loader: "html-loader",
      //       options: {
      //         minimize: true,
      //         removeComments: true,
      //         collapseWhitespace: true
      //       }
      //     }],
      //     exclude: /node_modules/
      //   },
      // ]
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, 'resources/assets/ts')
      ]
    }
  })
  .extract(
    [
      "@angular/platform-browser",
      "@angular/platform-browser-dynamic",
      "@angular/core",
      "@angular/common",
      "@angular/http",
      "@angular/router",
      "rxjs",
      "@ng-bootstrap/ng-bootstrap"
    ],
    'public/assets/js/vendor.js'
  )
  .extract(
    [
      "core-js/es6",
      "core-js/es7/reflect",
      "zone.js",
    ],
    'public/assets/js/polyfills.js'
  )
  .ts('resources/assets/ts/app.ts', 'public/assets/js')
