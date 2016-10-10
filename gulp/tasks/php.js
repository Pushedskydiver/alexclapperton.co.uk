var gulp = require('gulp'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

// HTML Minifier
gulp.task('php', function() {
    gulp.src(config.paths.php.src)
        .pipe(plugins.htmlmin(config.plugin.php))
        .pipe(gulp.dest(config.paths.php.dest))
        .pipe(plugins.notify({message: 'PHP task complete', onLast: true}));
});
