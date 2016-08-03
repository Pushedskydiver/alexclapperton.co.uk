var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

// Move .htaccess
gulp.task('htaccess', function() {
    gulp.src('./src/.htaccess')
        .pipe(gulp.dest('./dist/'))
        .pipe(plugins.notify({message: 'htaccess task complete', onLast: true}));
});
