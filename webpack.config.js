import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import glob from 'glob';
import path from 'path';

module.exports = function(argv) {
  const env = process.env.NODE_ENV;
  const vendorPath = path.resolve(__dirname, 'src/scripts/vendor');
  const plugin = require('./_config/plugins.json');

  let webpackConfig = {
    cache: false,

    devtool: !argv.prod ? 'source-map' : 'eval',

    entry : {
      common: path.resolve(__dirname, 'src/scripts/main.js'),
      vendor: argv.prod ?
      glob.sync('./src/scripts/vendor/*.js') :
      glob.sync('./src/scripts/vendor/**/*.js')
    },

    output: {
      path: path.resolve(__dirname, 'public', 'js'),
      filename: '[name].bundle.[contenthash].js',
    },

    mode: env || 'development',

    module: {
      rules: [
        {
          test: /\.js*/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      ]
    },

    optimization: {
      minimizer: argv.prod ?
      [new UglifyJsPlugin(plugin.uglify)] :
      [new UglifyJsPlugin({
        uglifyOptions: {
          minimize: false,
          warnings: false,
          mangle: false
        },
      })]
    },

    plugins: [
      new ManifestPlugin(),
      new webpack.LoaderOptionsPlugin({
        debug: true
      }),
      // new BundleAnalyzerPlugin()
    ],

    resolve: {
      alias: {
        'cookies': path.join(vendorPath, 'cookies'),
        'zenscroll': path.join(vendorPath, 'zenscroll-min'),
        'lazyload': path.join(vendorPath, 'lazyload.min'),
        'prism' : path.join(vendorPath, 'prism')
      },
      extensions: ['.js']
    },

    watch: false
  };

  return webpackConfig;
};
