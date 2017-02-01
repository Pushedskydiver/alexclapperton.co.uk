/**
 * @file gulpfile
 * @author Alex Clapperton <hi@alexclapperton.co.uk>
 */

'use strict'

import gulp from 'gulp'
import yargs from 'yargs'
import runSeq from 'run-sequence'

const argv = yargs.argv

const data = {
  paths: require('./global/paths.json'),
  performance: require('./global/performance.json'),
  site: require('./global/site.json'),
  stylelint: require('./global/stylelint.json'),
}


/* ============================================================ *\
    Require tasks
\* ============================================================ */

require('./tasks/html.js')(gulp, data, argv);
require('./tasks/styles.js')(gulp, data, argv);
require('./tasks/scripts.js')(gulp, data, argv);
require('./tasks/images.js')(gulp, data);
require('./tasks/icons.js')(gulp, data);
require('./tasks/copy.js')(gulp, data);
require('./tasks/fonts.js')(gulp, data);
require('./tasks/critical.js')(gulp, data, argv);
require('./tasks/cache-bust.js')(gulp, data);
require('./tasks/stylelint.js')(gulp, data);
require('./tasks/perf.js')(gulp, data, argv);
require('./tasks/server.js')(gulp, data, argv);
require('./tasks/deploy.js')(gulp, data, argv);
require('./tasks/clean.js')(gulp, data, argv);


/* ============================================================ *\
    Task aliases
\* ============================================================ */

gulp.task('dev', function (callback) {
  runSeq(
    'default',
    'watch',
    'browser-sync',
    callback
  )
});

gulp.task('default', function (callback) {
  runSeq(
    'clean:all',
    ['html:build', 'styles:sass', 'scripts', 'icons', 'images', 'fonts', 'copy:forms', 'copy:favicons', 'copy:pdf', 'copy:twitter', 'copy:particles-config'],
    'clean:fonts',
    callback
  )
});

gulp.task('perf', function (callback) {
  runSeq(
    'webpagetest',
    callback
  )
});


/* ============================================================ *\
    Watch tasks
\* ============================================================ */

gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch(data.paths.styles.src + '**/*.scss', ['styles:sass']);

    // Watch svg files
    gulp.watch(data.paths.icons.src, ['icons']);

    // Watch .js files
    gulp.watch(data.paths.js.src, ['scripts']);

    // Watch .hbs files
    gulp.watch([
      data.paths.source.content + '**/*.hbs',
      data.paths.source.partials + '*.hbs',
      data.paths.source.layouts + '*.json',
      data.paths.source.data + '*.json'
    ], ['html:build']);

    // Watch image files
    gulp.watch(data.paths.images.src, ['images']);

});
