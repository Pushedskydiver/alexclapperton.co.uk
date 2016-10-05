var gulp = require('gulp'),
    del = require('del'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

// HTML Minifier
gulp.task('del', function() {
    return del([
      './dist/fonts/**/*.css',
    ]);
});
