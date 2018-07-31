/**
 * @file stylelint.js - Check for any styling issues in scss files
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import plugins from 'gulp-load-plugins';

const $ = plugins();

module.exports = (gulp, data, argv) => {
  gulp.task('stylelint', () => {
      return gulp.src(`${data.paths.source.styles}**/*.scss`)
          .pipe($.stylelint({
            configFile: data.stylelint,
            failAfterError: argv.prod,
            syntax: 'scss',
            reportOutputDir: data.paths.reports.stylelint,
            reporters: [
              {formatter: 'string', console: true},
              {formatter: 'verbose', save: 'stylelint.txt'}
            ]
          }));
  });
}
