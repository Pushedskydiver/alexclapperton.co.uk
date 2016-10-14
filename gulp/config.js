module.exports = {
    paths: {
        base: {
            src: './src/',
            dest: './dist/'
        },
        sass: {
            src: './src/scss/',
            dest: './dist/css/'
        },
        sprite: {
            src: './src/icons/*',
            dest: './dist/images/icons/'
        },
        js: {
            src: './src/js/*.js',
            dest: './dist/js/'
        },
        php: {
            src: './src/pages/**/*.php',
            dest: './dist/'
        },
        imgs: {
            src: './src/images/**/*',
            dest: './dist/images/'
        },
        fonts: {
            src: './src/fonts/**/*.ttf',
            dest: './dist/fonts/'
        },
        critical: {
            src: './src/critical/*.html',
            dest: './src/critical/',
        },
    },
    plugin: {
        svgSprite: {
            shape: {
                dimension: { // Set maximum dimensions
                    maxWidth: 32
                },
                spacing: {
                    padding: 1
                },
            },
            mode: {
                symbol: { // symbol mode to build the SVG
                    dest: './',
                    render: {
                        css: false, // CSS output option for icon sizing
                        scss: false // SCSS output option for icon sizing
                    },
                    sprite: 'sprite.svg', //generated sprite name
                    example: false // Build a sample page, please!
                }
            }
        },
        uglify: {
            mangle: true,
            compress: {
                sequences: true,
                properties: false,
                dead_code: false,
                drop_debugger: false,
                unsafe: false,
                conditionals: true,
                comparisons: true,
                evaluate: true,
                booleans: false,
                loops: false,
                unused: false,
                hoist_funs: false,
                hoist_vars: false,
                if_return: false,
                join_vars: true,
                cascade: true,
                side_effects: false,
                warnings: false,
                global_defs: {}
            }
        },
        stylelint: {
            failAfterError: true,
            syntax: 'scss',
            reportOutputDir: 'dist/reports/stylelint/',
            reporters: [
                {formatter: 'verbose', console: true},
                {formatter: 'verbose', save: 'stylelint.txt'}
            ]
        },
        php: {
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
        },
        imgmin: {
            options: {
                optimizationLevel: 7,
                progressive: true,
                interlaced: true
            }
        }
    }
};
