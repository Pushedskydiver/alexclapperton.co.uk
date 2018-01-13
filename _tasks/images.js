/**
 * @file images.js - Optimise images for better performance
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import plugins from 'gulp-load-plugins'

const $ = plugins()

module.exports = (gulp, data) => {
  gulp.task('images', () => {
      return gulp.src(data.paths.source.images)
          .pipe($.imagemin(data.plugin.imgmin))
          .pipe(gulp.dest(data.paths.dist.images));
  });
}
