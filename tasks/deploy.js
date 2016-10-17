var config = require('../config'),
    ftp = require('vinyl-ftp'),
    gutil = require('gulp-util'),
    minimist = require('minimist');

module.exports = function (gulp, data, argv) {

  gulp.task('deploy', function() {
    var remotePath = '/httpdocs/';
    var conn = ftp.create({
      host: '80.82.114.113',
      user: argv.user,
      password: argv.password,
      log: gutil.log
    });
    gulp.src(data.paths.base.dest + '**/*')
      .pipe(conn.newer(remotePath))
      .pipe(conn.dest(remotePath));
  });
}
