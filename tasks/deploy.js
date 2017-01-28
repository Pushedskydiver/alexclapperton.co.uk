/**
 * @file deploy.js - Dploy website to wen host via ftp
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import config from '../tasks/config'
import ftp from 'vinyl-ftp'
import gutil from 'gulp-util'

module.exports = function (gulp, data, argv) {
  gulp.task('deploy', function() {
    var remotePath = '/httpdocs/';
    var conn = ftp.create({
      host: '80.82.114.113',
      user: argv.user,
      password: argv.password,
      log: gutil.log
    });
    gulp.src(`${data.paths.base.dest}**/*`)
      .pipe(conn.newer(remotePath))
      .pipe(conn.dest(remotePath));
  });
}
