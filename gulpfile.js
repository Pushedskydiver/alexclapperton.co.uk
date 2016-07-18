// Define Paths
var basePaths = {
      src: 'src/',
      dest: 'dist/'
};
var paths = {
      sass: {
          src: basePaths.src + 'scss/*.scss',
          dest: basePaths.dest + 'css/'
      },
      sprite: {
          src: basePaths.src + 'icons/*.svg',
          dest: basePaths.dest + 'images/icons/'
      },
      images: {
          src: basePaths.src + 'images/*',
          dest: basePaths.dest + 'images/'
      },
      html: {
          src: basePaths.src + 'pages/*.html',
          dest: basePaths.dest
      },
      js: {
          src: basePaths.src + 'js/*.js',
          dest: basePaths.dest + 'js/'
      }
};


// Plugins Required
var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    svgSprite = require("gulp-svg-sprite"),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    cssshort = require('postcss-short'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    order = require('gulp-order'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');


// PostCss Config
var postcssConfig = [
    cssshort(),
    cssnano({discardComments: {removeAll: true}, autoprefixer: true, core: true, discardComments: true, discardDuplicates: true, mergeLonghand: true, mergeRules: true, zindex: false}),
];


// SVG Config
var svgConfig = {
   shape: {
       dimension: {// Set maximum dimensions
           maxWidth: 32
       },
       spacing: {
          padding: 1
       }
   },
   mode: {
       symbol: { // symbol mode to build the SVG
           render: {
               css: false, // CSS output option for icon sizing
               scss: false // SCSS output option for icon sizing
           },
           dest: './', // destination folder
           prefix: '.svg--%s', // BEM-style prefix if styles rendered
           sprite: 'sprite.svg', //generated sprite name
           example: false // Build a sample page, please!
       }
   }
};


// HTML Config
var htmlConfig = {
    collapseWhitespace: true,
    conservativeCollapse: true,
    collapseBooleanAttributes: true,
    decodeEntities: true,
    keepClosingSlash: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    useShortDoctype: true
};


// SCSS Compile
gulp.task('sass', function() {
   gulp.src(paths.sass.src)
       .pipe(sourcemaps.init())
       .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
       .pipe(postcss(postcssConfig))
       .pipe(sourcemaps.write('sourcemaps'))
       .pipe(gulp.dest(paths.sass.dest))
       .pipe(notify({message: 'Scss task complete'}));
});


 // SVG Sprite
 gulp.task('svgSprite', function() {
     gulp.src(paths.sprite.src)
         .pipe(svgSprite(svgConfig))
         .pipe(gulp.dest(paths.sprite.dest))
         .pipe(notify({message: 'SVG task complete'}));
 });


// Image optimization
gulp.task('imageMin', () =>
    gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest))
        .pipe(notify({message: 'Image task complete'}))
);


// HTML Minifier
gulp.task('html', function() {
    gulp.src(paths.html.src)
        .pipe(htmlmin(htmlConfig))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(notify({message: 'HTML task complete'}));
});


// JS Concat
gulp.task('js', function() {
    gulp.src(paths.js.src)
        .pipe(order([
         'jquery.min.js',
         'jquery-migrate.min.js',
         '*',
         'scripts.js'
        ]))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.dest))
        .pipe(notify({message: 'JS task complete'}));
});


// Move Twitter folder to dist folder
gulp.task('moveTwitter', function() {
    gulp.src(basePaths.src + 'twitter/**/', {base: basePaths.src})
        .pipe(gulp.dest(basePaths.dest))
        .pipe(notify({message: 'Twitter task complete'}));
});


// Move Forms folder to dist folder
gulp.task('moveForm', function() {
    gulp.src(basePaths.src + 'forms/**/', {base: basePaths.src})
        .pipe(gulp.dest(basePaths.dest))
        .pipe(notify({message: 'Forms task complete'}));
});


// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch(paths.sass.src + '/**/*', ['sass']);

    // Watch svg files
    gulp.watch(paths.sprite.src, ['svgSprite']);

    // Watch image files
    gulp.watch(paths.images.src, ['imageMin']);

    // Watch .html files
    gulp.watch(paths.html.src, ['html']);

    // Watch .js files
    gulp.watch(paths.js.src, ['js']);

    // Watch Twitter folder
    gulp.watch(basePaths.src + 'twitter/**/', ['moveTwitter']);

    // Watch forms folder
    gulp.watch(basePaths.src +  'form/**/', ['moveForm']);

});


//Default task
gulp.task('default', function() {
    gulp.start('sass', 'svgSprite', 'imageMin', 'html', 'js', 'moveTwitter', 'moveForm')
});
