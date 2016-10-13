var gulp = require('gulp'),
    config = require('../config');

//Default task
gulp.task('default', gulp.series(function(done) {
    gulp.parallel('sass', 'cacheBuster', 'svgSprite', 'js', 'images', 'php', 'critical', 'fonts', 'del');
    done();
}));
