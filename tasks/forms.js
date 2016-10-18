/**
 * @file forms.js - Copy forms directory to dist directory
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

var config = require('../config');
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data) {

  gulp.task('copy:forms', function () {
      gulp.src(data.paths.source.forms + "*")
          .pipe(gulp.dest(data.paths.dist.forms))
  });
}
