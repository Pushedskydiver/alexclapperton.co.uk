/**
 * @file imports.js - Generate SASS imports automatically
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import plugins from 'gulp-load-plugins'

const $ = plugins()

const creds = {
  "Author": 	"Alex Clapperton",
  "Website": 	"alexclapperton.co.uk"
}

module.exports = function (gulp, data) {
  gulp.task('imports:sass', function () {
      gulp.src([
        data.paths.sass.settings,
        data.paths.sass.tools,
        data.paths.sass.generic,
        data.paths.sass.elements,
        data.paths.sass.objects,
        data.paths.sass.components
      ])
      .pipe($.sassGenerateContents(`${data.paths.source.styles}main.scss`, creds))
      .pipe(gulp.dest(data.paths.source.styles));
  });
}
