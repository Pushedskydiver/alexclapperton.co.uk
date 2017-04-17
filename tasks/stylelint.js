/**
 * @file stylelint.js - Check for any styling issues in scss files
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import stylelint from 'stylelint'
import reporter from 'postcss-reporter'
import scss from 'postcss-scss'
import plugins from 'gulp-load-plugins'

const $ = plugins()

module.exports = function (gulp, data) {
  gulp.task('stylelint', function () {
      gulp.src(`${data.paths.source.styles}**/*.scss`)
          .pipe($.postcss([
            stylelint(data.stylelint),
            reporter({
              clearMessages: true
            })
          ], {
            syntax: scss
          }));
  });
}
