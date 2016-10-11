var gulp = require('gulp'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

gulp.task('injectCss', gulp.series(function(done) {
    gulp.src(config.paths.base.src + 'pages/**/*.php')
        .pipe(plugins.styleInject())
        .pipe(gulp.dest(config.paths.base.src + 'pages/'));
        done();
}));
