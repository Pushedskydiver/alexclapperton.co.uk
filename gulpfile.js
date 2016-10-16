var gulp = require('gulp'),
    yargs = require('yargs'),
    runSeq = require('run-sequence');

const argv = yargs.argv

const data = {
  paths: require('./global/paths.json'),
  site: require('./global/site.json'),
  performance: require('./global/performance.json'),
  stylelint: require('./global/stylelint.json'),
}


/* ============================================================ *\
    Require tasks
\* ============================================================ */

require('./tasks/html.js')(gulp, data, argv);
require('./tasks/styles.js')(gulp, data, argv);
require('./tasks/scripts.js')(gulp, data, argv);
require('./tasks/images.js')(gulp, data, argv);
require('./tasks/icons.js')(gulp, data, argv);
require('./tasks/fonts.js')(gulp, data, argv);
require('./tasks/forms.js')(gulp, data, argv);
require('./tasks/critical.js')(gulp, data, argv);
require('./tasks/cache-bust.js')(gulp, data, argv);
require('./tasks/stylelint.js')(gulp, data, argv);
require('./tasks/perf.js')(gulp, data, argv);
require('./tasks/server.js')(gulp, data, argv);
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
    ['html:build', 'styles:sass', 'scripts', 'icons', 'images', 'fonts', 'copy:forms'],
    'clean:fonts',
    ['critical', 'styles:minify', 'scripts:uglify'],
    'html:min',
    callback
  )
});

gulp.task('psi', function (callback) {
  runSeq(
    'psi:mobile',
    'psi:desktop',
    callback
  )
});

gulp.task('perf', function (callback) {
  runSeq(
    'psi',
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
