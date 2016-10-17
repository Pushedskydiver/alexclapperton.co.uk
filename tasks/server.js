/**
 * @file server.js - Run Browsersync server
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 * @see {@link https://www.browsersync.io/docs/gulp}
 */


var config = require('../config'),
    browserSync = require('browser-sync');


module.exports = function (gulp, data) {

  gulp.task('browser-sync', function () {
    browserSync.create().init({
      browser: 'google chrome',
      files: [
        `${data.paths.dist.base}**/*`
      ],
      ghostMode: false,
      notify: false,
      online: false,
      server: {
        baseDir: data.paths.dist.base
      }
    })
  })
}
