/**
 * @file deploy.js - Dploy website to wen host via ftp
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

import ftp from 'vinyl-ftp'
import gutil from 'gulp-util'

module.exports = (gulp, data, argv) => {
  gulp.task('deploy', () => {
    const remotePath = '/httpdocs/';

    const conn = ftp.create({
      host: '80.82.114.113',
      user: argv.user,
      password: argv.password,
      log: gutil.log
    });
    return gulp.src(`${data.paths.dist.base}**/*`)
      .pipe(conn.newer(remotePath))
      .pipe(conn.dest(remotePath));
  });
}
