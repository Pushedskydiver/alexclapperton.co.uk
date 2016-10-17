/**
 * @file styles.js - Styles related Gulp tasks
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

var config = require('../config'),
    autoprefixer = require('autoprefixer'),
    devtools = require('postcss-devtools'),
    focus = require('postcss-focus'),
    cssshort = require('postcss-short'),
    cssnano = require('cssnano'),
    cleancss = require('gulp-clean-css'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data, argv) {

  function getPostCssPlugins () {
    const plugins = [
      autoprefixer({
        browsers: ['> 5%']
      }),
      devtools(),
      focus(),
      cssshort(),
      cssnano(config.plugin.cssnano)
    ]

    if (argv.prod) {
      plugins.push(cssnano({
        core: true
      }))
    }

    return plugins
  }

  gulp.task('styles:sass', function () {
      gulp.src(data.paths.styles.src + '*.scss')
          .pipe(plugins.sourcemaps.init())
          .pipe(plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError))
          .pipe(plugins.postcss(getPostCssPlugins()))
          .pipe(plugins.sourcemaps.write('sourcemaps'))
          .pipe(gulp.dest(data.paths.styles.dest));
  });

  gulp.task('styles:minify', function () {
    if (argv.prod) {
      gulp.src(data.paths.styles.dest + '*.css')
          .pipe(cleancss())
          .pipe(gulp.dest(data.paths.styles.dest));
    }
  });
}
