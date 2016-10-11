var gulp = require('gulp'),
    config = require('../config');

//Default task
gulp.task('default', gulp.series(function(done) {
    gulp.parallel('sass', 'svgSprite', 'js', 'images', 'php', 'critical', 'injectCss', 'fonts', 'del', 'htaccess');
    done();
}));
