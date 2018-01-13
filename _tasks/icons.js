/**
 * @file icons.js - Combine svg icons into a single sprite
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

 import plugins from 'gulp-load-plugins'

 const $ = plugins()

module.exports = (gulp, data) => {
  gulp.task('icons', () => {
      return gulp.src(data.paths.source.icons)
          .pipe($.svgSprite(data.plugin.svgSprite))
          .pipe(gulp.dest(data.paths.dist.icons));
  });
};
