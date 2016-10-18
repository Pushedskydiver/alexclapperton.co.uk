/**
 * @file scripts.js - Combine scripts into single file and uglify
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

var config = require('../config'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data, argv) {
  gulp.task('scripts', function () {
      var source = [];

      source.push(`${data.paths.js.src}*.js`)

      if (!argv.prod) {
        source.push(`${data.paths.js.src}vendor/tota11y.js`)
      }

      gulp.src(source)
          .pipe(plugins.order([
              'jquery.min.js',
              '*',
              'scripts.js'
          ]))
          .pipe(plugins.concat('main.js'))
          .pipe(plugins.if(argv.prod, plugins.uglify()))
          .pipe(gulp.dest(data.paths.js.dest));
  });
}
