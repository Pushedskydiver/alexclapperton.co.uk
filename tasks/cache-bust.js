/**
 * @file cache-bust.js - Add cache query to stylesheet and javascript
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

var config = require('../config'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data, argv) {

  gulp.task('cacheBuster', function () {
      gulp.src(data.paths.dist.html + '**/*.html')
          .pipe(plugins.cacheBust({
            type: 'timestamp'
          }))
          .pipe(gulp.dest(data.paths.dist.html));
  });
}
