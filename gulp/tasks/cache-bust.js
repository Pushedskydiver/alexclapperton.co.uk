var gulp = require('gulp'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

gulp.task('cacheBuster', gulp.series(function(done) {
    gulp.src(config.paths.base.src + 'critical/**/*.html')
        .pipe(plugins.cacheBust({
          type: 'timestamp'
        }))
        .pipe(gulp.dest(config.paths.base.src + 'critical'));
        done();
}));
