const webpack = require('webpack');
const ManifestPlugin = require('webpack-assets-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

function Bundle() {
  const plugin = require('./_config/plugins.json');
  const prod = process.env.NODE_ENV === 'prod';

  const alias = {
    'cookies': 'mozilla-doc-cookies/docCookies.js',
    'zenscroll': 'zenscroll/zenscroll.js',
    'prism': 'prismjs/prism.js',
    Src: path.resolve(__dirname, 'src')
  };

  const plugins = [
    new ManifestPlugin({
      output: path.join(__dirname, 'src', 'cache-manifest.json')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css?cb=[chunkhash]',
      chunkFilename: 'main.css?cb=[contenthash]'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, 'src', 'site', '_includes', '_partials', 'scripts.njk'),
      template: path.resolve(__dirname, '_templates', 'scripts.njk'),
      chunks: ['common']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, 'src', 'site', '_includes', '_partials', 'preload-styles.njk'),
      template: path.resolve(__dirname, '_templates', 'preload-styles.njk'),
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, 'src', 'site', '_includes', '_partials', 'styles.njk'),
      template: path.resolve(__dirname, '_templates', 'styles.njk')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: './src/',
          from: 'images/**/*.jpg',
          to: '[path][name].webp'
        }
      ],
    }),
    new ImageminWebpWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
    // new BundleAnalyzerPlugin()
  ];

  return {
    cache: false,

    devtool: !prod ? 'source-map' : 'eval',

    entry: {
      common: path.resolve(__dirname, 'src/scripts/main.js'),
      main: path.resolve(__dirname, 'src/styles/main.scss')
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].bundle.js?cb=[chunkhash]',
      chunkFilename: 'js/[id].chunk.js?cb=[chunkhash]',
      publicPath: '/'
    },

    mode: prod ? 'production' : 'development',

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '/'
              }
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('postcss-sort-media-queries'),
                    require('postcss-minify-selectors'),
                    require('cssnano')(plugin.cssnano)
                  ],
                }
              },
            },
            {
              loader: 'sass-loader'
            }
          ],
        }
      ]
    },

    optimization: {
      minimizer: prod ? [new TerserPlugin(plugin.uglify)] : [new TerserPlugin({
        terserOptions: {
          minimize: false,
          warnings: false,
          mangle: false
        }
      })]
    },

    plugins,

    resolve: {
      alias,
      extensions: ['.js']
    },

    watch: prod ? false : true
  };
}

module.exports = Bundle();
