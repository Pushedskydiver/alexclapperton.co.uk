var config = require('../config'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data, argv) {
  
  gulp.task('icons', function () {
      gulp.src(data.paths.icons.src)
          .pipe(plugins.svgSprite(config.plugin.svgSprite))
          .pipe(gulp.dest(data.paths.icons.dest))
          .pipe(plugins.notify({message: 'SVG task complete', onLast: true}));
  });
}
