var gulp = require('gulp'),
    config = require('../config');

//Default task
gulp.task('default', ['server'], function() {
    gulp.start('sass', 'svgSprite', 'js', 'html', 'images')
});
