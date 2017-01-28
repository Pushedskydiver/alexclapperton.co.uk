/**
 * @file images.js - Optimise images for better performance
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

 import config from '../tasks/config'
 import plugins from 'gulp-load-plugins'

 const $ = plugins()

module.exports = function (gulp, data) {
  gulp.task('images', function () {
      gulp.src(data.paths.images.src)
          .pipe($.imagemin(config.plugin.imgmin))
          .pipe(gulp.dest(data.paths.images.dest));
  });
}
