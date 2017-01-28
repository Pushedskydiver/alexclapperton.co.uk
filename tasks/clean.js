/**
 * @file clean.js - Wipe dist and css in fonts directory with Gulp task
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import config from '../tasks/config'
import del from 'del'

module.exports = function (gulp, data, argv) {
  gulp.task('clean:all', function () {
      if (!argv.prod) {
        return del([
          data.paths.dist.base
        ])
      }
  });

  gulp.task('clean:fonts', function () {
      return del([
        `${data.paths.dist.fonts}**/*.css`,
      ]);
  });

  gulp.task('clean:css', function () {
      return del([
        `${data.paths.styles.dest}main.css`,
      ]);
  });

  gulp.task('clean:js', function () {
      return del([
        `${data.paths.js.dest}main.js`,
      ]);
  });
}
