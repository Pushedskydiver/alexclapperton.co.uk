/**
 * @file copy.js - Copy assets to dist with Gulp task
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

var config = require('../config');

module.exports = function (gulp, data) {
  gulp.task('copy:forms', function () {
      gulp.src(data.paths.source.forms + "*")
          .pipe(gulp.dest(data.paths.dist.forms))
  });

  gulp.task('copy:favicons', function () {
    gulp.src(`${data.paths.source.favicons}**/*`)
      .pipe(gulp.dest(data.paths.dist.favicons))
  });

  gulp.task('copy:pdf', function () {
    return gulp.src(`${data.paths.source.base}pdf/*.pdf`)
      .pipe(gulp.dest(`${data.paths.dist.base}pdf/`))
  });
}
