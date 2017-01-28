/**
 * @file cache-bust.js - Add cache query to stylesheet and javascript
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import config from '../tasks/config'
import CacheBuster from 'gulp-cachebust'

const cachebust = new CacheBuster()

module.exports = function (gulp, data) {
  gulp.task('cache:css', function () {
      gulp.src(`${data.paths.styles.dest}main.css`)
          .pipe(cachebust.resources())
          .pipe(gulp.dest(data.paths.styles.dest));
  });

  gulp.task('cache:js', function () {
      gulp.src(`${data.paths.js.dest}main.js`)
          .pipe(cachebust.resources())
          .pipe(gulp.dest(data.paths.js.dest));
  });

  gulp.task('cache:html', ['cache:css', 'cache:js'], function () {
      gulp.src(`${data.paths.dist.base}**/*.html`)
          .pipe(cachebust.references())
          .pipe(gulp.dest(data.paths.dist.base));
  });
}
