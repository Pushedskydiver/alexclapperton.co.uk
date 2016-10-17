/**
 * @file images.js - Optimise images for better performance
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

var config = require('../config'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data, argv) {

  gulp.task('images', function () {
      gulp.src(data.paths.images.src)
          .pipe(plugins.imagemin(config.plugin.imgmin))
          .pipe(gulp.dest(data.paths.images.dest))
          .pipe(plugins.notify({message: 'Image task complete', onLast: true}));
  });
}
