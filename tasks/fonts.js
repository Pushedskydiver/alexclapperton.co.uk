var config = require('../config'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data, argv) {

  gulp.task('fonts', function () {
      gulp.src(data.paths.fonts.src)
          .pipe(plugins.fontmin())
          .pipe(gulp.dest(data.paths.fonts.dest))
          .pipe(plugins.notify({message: 'Font task complete', onLast: true}));
  });
}
