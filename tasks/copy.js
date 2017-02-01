/**
 * @file copy.js - Copy assets to dist with Gulp task
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import config from '../tasks/config'

module.exports = function (gulp, data) {
  gulp.task('copy:forms', function () {
      gulp.src(`${data.paths.source.forms}*`)
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

  gulp.task('copy:twitter', function () {
    return gulp.src(`${data.paths.source.base}twitter/*`)
      .pipe(gulp.dest(`${data.paths.dist.base}twitter/`))
  });

  gulp.task('copy:particles-config', function () {
    return gulp.src(`${data.paths.source.base}data/particlesjs-config.jso*`)
      .pipe(gulp.dest(`${data.paths.dist.base}`))
  });
}
