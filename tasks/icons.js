/**
 * @file icons.js - Combine svg icons into a single sprite
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

var config = require('../config'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data, argv) {

  gulp.task('icons', function () {
      gulp.src(data.paths.icons.src)
          .pipe(plugins.svgSprite(config.plugin.svgSprite))
          .pipe(gulp.dest(data.paths.icons.dest));
  });
}
