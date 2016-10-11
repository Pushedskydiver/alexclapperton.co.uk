var gulp = require('gulp'),
    config = require('../config'),
    browserSync = require('browser-sync').create(),
    plugins = require('gulp-load-plugins')();

// Static Server + watching scss/html files
gulp.task('browser-sync', gulp.series(function(done) {

    browserSync.init({
        server: "./dist/"
    });

    gulp.watch('./src/scss/**/*.scss').on('change', browserSync.reload);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
    done();
}));
