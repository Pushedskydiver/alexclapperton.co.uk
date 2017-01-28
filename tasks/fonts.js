/**
 * @file fonts.js - Minify and produce fonts for browsers
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import config from '../tasks/config'
import plugins from 'gulp-load-plugins'

const $ = plugins()

module.exports = function (gulp, data) {
  gulp.task('fonts', function () {
      gulp.src(data.paths.fonts.src)
          .pipe($.fontmin())
          .pipe(gulp.dest(data.paths.fonts.dest));
  });
}
