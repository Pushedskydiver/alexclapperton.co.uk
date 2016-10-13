var gulp = require('gulp'),
    critical = require('critical').stream,
    config = require('../config');

// Generate & Inline Critical-path CSS
gulp.task('critical', gulp.series(function(done) {
    gulp.src(config.paths.critical.src)
        .pipe(critical({
          base: config.paths.base.dest,
          css: config.paths.sass.dest + 'main.css',
          inline: true,
          minify: true,
          ignore: ['@font-face']
        }))
        .pipe(gulp.dest(config.paths.critical.dest));
        done();
}));
