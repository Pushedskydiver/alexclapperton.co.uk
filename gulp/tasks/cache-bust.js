var gulp = require('gulp'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

gulp.task('cacheBuster', gulp.series(function(done) {
    gulp.src(config.paths.php.src)
        .pipe(plugins.cacheBust())
        .pipe(gulp.dest(config.paths.base.src + 'pages'));
        done();
}));
