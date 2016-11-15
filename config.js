module.exports = {
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
        cssnano: {
            autoprefixer: true,
            calc: true,
            colormin: true,
            convertValues: true,
            core: false,
            discardComments: {
              removeAll: true
            },
            discardDuplicates: true,
            discardEmpty: true,
            filterOptimiser: false,
            filterPlugins: false,
            functionOptimiser: false,
            mergeIdents: false,
            mergeLonghand: true,
            mergeRules: false,
            minifyFontValues: true,
            minifyGradients: true,
            minifySelectors: false,
            normalizeCharset: false,
            normalizeUrl: true,
            orderedValues: true,
            reduceIdents: false,
            reduceTransforms: true,
            styleCache: false,
            svgo: false,
            uniqueSelectors: true,
            zindex: false
        },
        stylelint: {
            failAfterError: true,
            syntax: 'scss',
            reportOutputDir: 'src/reports/stylelint/',
            reporters: [
                {formatter: 'verbose', console: true},
                {formatter: 'verbose', save: 'stylelint.txt'}
            ]
        },
        html: {
            collapseWhitespace: true,
            conservativeCollapse: true,
            collapseBooleanAttributes: true,
            decodeEntities: true,
            keepClosingSlash: true,
            minifyCSS: true,
            minifyJS: true,
            processConditionalComments: true,
            removeAttributeQuotes: false,
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
