var config = require('../config'),
    plugins = require('gulp-load-plugins')();


module.exports = function (gulp, data, argv) {
  gulp.task('scripts', function () {
      gulp.src(data.paths.js.src)
          .pipe(plugins.order([
              'jquery.min.js',
              '*',
              'scripts.js'
          ]))
          .pipe(plugins.concat('main.js'))
          .pipe(gulp.dest(data.paths.js.dest))
          .pipe(plugins.notify({message: 'JS task complete', onLast: true}));
  });

  gulp.task('scripts:uglify', function () {
    if (argv.prod) {
      gulp.src(data.paths.js.dest + '*.js')
          .pipe(plugins.uglify(config.plugin.js))
          .pipe(gulp.dest(data.paths.js.dest))
          .pipe(plugins.notify({message: 'Uglify task complete', onLast: true}));
    }
  });
}
