/**
 * @file icons.js - Combine svg icons into a single sprite
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

 import config from '../tasks/config'
 import plugins from 'gulp-load-plugins'

 const $ = plugins()

module.exports = function (gulp, data) {
  gulp.task('icons', function () {
      gulp.src(data.paths.source.icons)
          .pipe($.svgSprite(config.plugin.svgSprite))
          .pipe(gulp.dest(data.paths.dist.icons));
  });
}
