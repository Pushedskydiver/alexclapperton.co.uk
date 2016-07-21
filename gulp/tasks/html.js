var gulp = require('gulp'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

// HTML Minifier
gulp.task('html', function() {
    gulp.src(config.paths.html.src)
        .pipe(plugins.htmlmin(config.plugin.html))
        .pipe(gulp.dest(config.paths.html.dest))
        .pipe(plugins.notify({message: 'HTML task complete'}));
});
