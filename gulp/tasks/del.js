var gulp = require('gulp'),
    del = require('del'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

// Delte font css
gulp.task('del', gulp.series(function(done) {
    return del([
      './dist/fonts/**/*.css',
    ]);
    done();
}));
