const webpack = require('webpack');
const ManifestPlugin = require('webpack-assets-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const plugin = require('./_config/plugins.json');

function Bundle() {
  const prod = process.argv.includes('--prod');

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
      filename: 'css/main.css?cb=[contenthash]'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, 'src', 'site', '_includes', '_partials', 'scripts.hbs'),
      template: path.resolve(__dirname, '_templates', 'scripts.hbs'),
      chunks: ['common']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, 'src', 'site', '_includes', '_partials', 'preload-styles.hbs'),
      template: path.resolve(__dirname, '_templates', 'preload-styles.hbs'),
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, 'src', 'site', '_includes', '_partials', 'styles.hbs'),
      template: path.resolve(__dirname, '_templates', 'styles.hbs')
    }),
    new CopyWebpackPlugin([{
      from: './src/images/**/*.jpg',
      to: '[path][name].webp',
      transformPath(targetPath, absolutePath) {
        return targetPath.split('src/')[1];
      },
    }]),
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
                name: 'main.css?cb=[contenthash]',
                publicPath: '/'
              }
            },
            {
              loader: 'css-loader?-url',
              options: {
                sourceMap: true,
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('postcss-sort-media-queries'),
                  require('postcss-minify-selectors'),
                  require('postcss-clean')(plugin.cleancss),
                  require('cssnano')(plugin.cssnano)
                ],
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
