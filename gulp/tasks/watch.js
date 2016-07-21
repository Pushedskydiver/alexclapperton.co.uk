var gulp = require('gulp'),
    config = require('../config'),
    watch = require('gulp-watch');

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch(config.paths.sass.src + '/**/*', ['sass']);

    // Watch svg files
    gulp.watch(config.paths.sprite.src, ['svgSprite']);

    // Watch .js files
    gulp.watch(config.paths.js.src, ['js']);

    // Watch image files
    gulp.watch(config.paths.imgs.src, ['images']);

});
