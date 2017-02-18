/**
 * @file cache-bust.js - Add cache query to stylesheet and javascript
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import config from '../tasks/config'
import CacheBuster from 'gulp-cachebust'

const cachebust = new CacheBuster()

module.exports = function (gulp, data) {
  gulp.task('cache:css', function () {
      gulp.src(`${data.paths.dist.styles}main.css`)
          .pipe(cachebust.resources())
          .pipe(gulp.dest(data.paths.dist.styles));
  });

  gulp.task('cache:js', function () {
      gulp.src(`${data.paths.dist.scripts}main.js`)
          .pipe(cachebust.resources())
          .pipe(gulp.dest(data.paths.dist.scripts));
  });

  gulp.task('cache:html', ['cache:css', 'cache:js'], function () {
      gulp.src(`${data.paths.dist.base}**/*.html`)
          .pipe(cachebust.references())
          .pipe(gulp.dest(data.paths.dist.base));
  });
}
