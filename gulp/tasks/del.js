var gulp = require('gulp'),
    del = require('del'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

// Delte font css
gulp.task('del', function() {
    return del([
      './dist/fonts/**/*.css',
    ]);
});
