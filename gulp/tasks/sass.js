var gulp = require('gulp'),
    config = require('../config'),
    cssnano = require('cssnano'),
    cssshort = require('postcss-short'),
    //browserSync = require('browser-sync').create(),
    plugins = require('gulp-load-plugins')();

// PostCss Config
var postcss = [
    cssshort(),
    cssnano({autoprefixer: true, calc: true, colormin: true, convertValues: true, core: true, discardComments: {removeAll: true}, discardDuplicates: true, discardEmpty: true, filterOptimiser: false, filterPlugins: false, functionOptimiser: false, mergeIdents: false, mergeLonghand: true, mergeRules: false, minifyFontValues: true, minifyGradients: true, minifySelectors: false, normalizeCharset: false, normalizeUrl: true, orderedValues: true, reduceIdents: false, reduceTransforms: true, styleCache: false, svgo: false, uniqueSelectors: true, zindex: false}),
];

// SCSS Compile
gulp.task('sass', gulp.series(function(done) {
    gulp.src(config.paths.sass.src + '*.scss')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError))
        .pipe(plugins.postcss(postcss))
        .pipe(plugins.sourcemaps.write('sourcemaps'))
        .pipe(gulp.dest(config.paths.sass.dest))
        //.pipe(browserSync.stream())
        .pipe(plugins.notify({message: 'Scss task complete', onLast: true}));
        done();
}));
