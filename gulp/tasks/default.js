var gulp = require('gulp'),
    config = require('../config');

//Default task
gulp.task('default', function() {
    gulp.start('sass', 'svgSprite', 'js', 'php', 'images', 'fonts', 'del', 'critical', 'htaccess')
});
