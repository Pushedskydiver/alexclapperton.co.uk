var gulp = require('gulp'),
    config = require('../config');

//Default task
gulp.task('default', function() {
    gulp.start('sass', 'svgSprite', 'js', 'html', 'images', 'fonts', 'del', 'critical', 'htaccess')
});
