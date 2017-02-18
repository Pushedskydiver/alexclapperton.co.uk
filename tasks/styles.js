/**
 * @file styles.js - Styles related Gulp tasks
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import config from '../tasks/config'
import autoprefixer from 'autoprefixer'
import devtools from 'postcss-devtools'
import focus from 'postcss-focus'
import cssnano from 'cssnano'
import mqpacker from 'css-mqpacker'
import cleanselectors from 'postcss-minify-selectors'
import plugins from 'gulp-load-plugins'

const $ = plugins()

module.exports = function (gulp, data, argv) {
  function getPostCssPlugins () {
    const postCssPlugins = [
      autoprefixer({
        browsers: ['> 5%']
      }),
      mqpacker({
        sort: true
      }),
      devtools(),
      focus(),
      cleanselectors(),
      cssnano(config.plugin.cssnano)
    ]

    if (argv.prod) {
      postCssPlugins.push(cssnano({
        core: true
      }))
    }

    return postCssPlugins
  }

  gulp.task('styles:sass', function () {
      gulp.src(`${data.paths.source.styles}*.scss`)
          .pipe($.sourcemaps.init())
          .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
          .pipe($.postcss(getPostCssPlugins()))
          .pipe($.if(argv.prod, $.cleanCss()))
          .pipe($.sourcemaps.write('sourcemaps'))
          .pipe(gulp.dest(data.paths.dist.styles));
  });
}
