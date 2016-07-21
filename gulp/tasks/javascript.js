var gulp = require('gulp'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

// JS Concat
gulp.task('js', function() {
    gulp.src(config.paths.js.src)
        .pipe(plugins.order([
            'jquery.min.js',
            '*',
            'scripts.js'
        ]))
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.uglify(config.plugin.js))
        .pipe(gulp.dest(config.paths.js.dest))
        .pipe(plugins.notify({message: 'JS task complete', onLast: true}));
});
