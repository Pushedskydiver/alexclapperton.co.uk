const webpack = require('webpack');
const ManifestPlugin = require('webpack-assets-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const plugins = require('./_config/plugins.json');

function Bundle() {
  const prod = process.argv.includes('--prod');
  const env = process.env.ELEVENTY_ENV;
  const plugin = require('./_config/plugins.json');

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

  // const BabelLoader = {
  //   loader: 'babel-loader',
  //   options: {
  //     presets: [
  //       ['@babel/preset-env', {
  //         targets: {
  //           browsers: ['>0.25%', 'ie 11', 'not op_mini all']
  //         },
  //         modules: false
  //       }]
  //     ],
  //     plugins: [
  //       '@babel/plugin-syntax-dynamic-import'
  //     ]
  //   }
  // };

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

    mode: env === 'prod' ? 'production' : 'development',

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
                  require('postcss-clean')(plugins.cleancss),
                  require('cssnano')(plugins.cssnano)
                ],
              },
            },
            {
              loader: 'sass-loader'
            }
          ],
        }
        // {
        //   test: /\.js*/,
        //   exclude: /node_modules/,
        //   use: [BabelLoader]
        // }
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

    watch: false
  };
}

module.exports = Bundle();
