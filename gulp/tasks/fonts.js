var gulp = require('gulp'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

// HTML Minifier
gulp.task('fonts', gulp.series(function(done) {
    gulp.src(config.paths.fonts.src)
        .pipe(plugins.fontmin())
        .pipe(gulp.dest(config.paths.fonts.dest))
        .pipe(plugins.notify({message: 'Font task complete', onLast: true}));
        done();
}));
