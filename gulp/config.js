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
        imgs: {
            src: './src/images/*',
            dest: './dist/images/'
        }
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
        imgmin: {
            options: {
                optimizationLevel: 4,
                progressive: true,
            }
        }
    }
};
