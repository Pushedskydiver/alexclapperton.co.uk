var gulp = require('gulp'),
    config = require('../config'),
    watch = require('gulp-watch');

// Watch
gulp.task('watch', gulp.series(function(done) {

    // Watch .scss files
    gulp.watch(config.paths.sass.src + '/**/*.scss', gulp.parallel('sass', 'critical', 'injectCss'));

    // Watch svg files
    gulp.watch(config.paths.sprite.src, gulp.parallel('svgSprite'));

    // Watch .js files
    gulp.watch(config.paths.js.src, gulp.parallel('js'));

    // Watch .php files
    gulp.watch(config.paths.php.src, gulp.parallel('php'));

    // Watch image files
    gulp.watch(config.paths.imgs.src, gulp.parallel('images'));

    done();

}));
