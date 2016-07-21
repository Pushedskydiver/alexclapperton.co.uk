var gulp = require('gulp'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

// SVG Sprite
gulp.task('svgSprite', function() {
    gulp.src(config.paths.sprite.src)
        .pipe(plugins.svgSprite(config.plugin.svgSprite))
        .pipe(gulp.dest(config.paths.sprite.dest))
        .pipe(plugins.notify({message: 'SVG task complete', onLast: true}));
});
