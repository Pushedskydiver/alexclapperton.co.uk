var config = require('../config'),
    del = require('del'),
    plugins = require('gulp-load-plugins')();
    

module.exports = function (gulp, data, argv) {

  gulp.task('clean:all', function () {
      if (!argv.prod) {
        return del([
          data.paths.dist.base
        ])
      }
  });

  gulp.task('clean:fonts', function () {
      return del([
        data.paths.dist.fonts + '**/*.css',
      ]);
  });
}
