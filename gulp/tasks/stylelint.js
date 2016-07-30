var gulp = require('gulp'),
    config = require('../config'),
    plugins = require('gulp-load-plugins')();

// Stylelint check
gulp.task('stylelint', function() {
    gulp.src(config.paths.sass.src + '**/*.scss')
        .pipe(plugins.stylelint(config.plugin.stylelint))
        .pipe(plugins.notify({message: 'Stylelint task complete', onLast: true}));
})
