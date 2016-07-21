var gulp = require('gulp'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

// Image optimizer
gulp.task('images', () =>
    gulp.src(config.paths.imgs.src)
        .pipe(plugins.imagemin(config.plugin.imgmin))
        .pipe(gulp.dest(config.paths.imgs.dest))
        .pipe(plugins.notify({message: 'Image task complete', onLast: true}))
);
