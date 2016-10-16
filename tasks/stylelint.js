var config = require('../config'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    scss = require('postcss-scss'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data, argv) {
  gulp.task('stylelint', function () {
      gulp.src(`${data.paths.source.styles}**/*.scss`)
          .pipe(plugins.postcss([
            stylelint(data.stylelint),
            reporter({
              clearMessages: true
            })
          ], {
            syntax: scss
          }))
          .pipe(plugins.notify({message: 'Stylelint task complete', onLast: true}));
  });
}
