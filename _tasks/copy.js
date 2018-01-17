/**
 * @file copy.js - Copy assets to dist with Gulp task
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

module.exports = (gulp, data) => {
  gulp.task('copy:favicons', () => {
      return gulp.src(`${data.paths.source.favicons}**/*`)
          .pipe(gulp.dest(data.paths.dist.favicons))
  });

  gulp.task('copy:manifest', () => {
      return gulp.src('./_config/site.manifest')
          .pipe(gulp.dest(data.paths.dist.base))
  });

  gulp.task('copy:serviceWorker', () => {
      return gulp.src(`${data.paths.source.base}sw.js`)
          .pipe(gulp.dest(data.paths.dist.base))
  });
}
