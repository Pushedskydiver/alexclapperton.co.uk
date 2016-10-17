/**
 * @file fonts.js - Minify and produce fonts for browsers
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

var config = require('../config'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data, argv) {

  gulp.task('fonts', function () {
      gulp.src(data.paths.fonts.src)
          .pipe(plugins.fontmin())
          .pipe(gulp.dest(data.paths.fonts.dest));
  });
}
