/**
 * @file scripts.js - Combine scripts into single file and uglify
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import config from '../tasks/config'
import plugins from 'gulp-load-plugins'

const $ = plugins()

module.exports = function (gulp, data, argv) {
  gulp.task('scripts', function () {
      let source = [];

      source.push(`${data.paths.js.src}*.js`)
      source.push(`${data.paths.js.src}vendor/cookies.js`)

      if (!argv.prod) {
        source.push(`${data.paths.js.src}vendor/tota11y.js`)
      }

      gulp.src(source)
          .pipe($.order([
              'jquery.min.js',
              '*',
              'scripts.js'
          ]))
          .pipe($.concat('main.js'))
          .pipe($.if(argv.prod, $.uglify(config.plugin.uglify)))
          .pipe(gulp.dest(data.paths.js.dest));
  });
}
