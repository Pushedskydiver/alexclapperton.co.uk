/**
 * @file stylelint.js - Check for any styling issues in scss files
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

var config = require('../config'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    scss = require('postcss-scss'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data) {
  gulp.task('stylelint', function () {
      gulp.src(`${data.paths.source.styles}**/*.scss`)
          .pipe(plugins.postcss([
            stylelint(data.stylelint),
            reporter({
              clearMessages: true
            })
          ], {
            syntax: scss
          }));
  });
}
