import webpack from 'webpack'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';
import glob from 'glob'
import path from 'path'

module.exports = function(argv) {
  const env = process.env.NODE_ENV;
  const vendorPath = path.resolve(__dirname, 'src/scripts/vendor');
  const plugin = require('./_config/plugins.json');

  let webpackConfig = {
    entry : {
      common: path.resolve(__dirname, 'src/scripts/main.js'),
      vendor: argv.prod ?
      glob.sync('./src/scripts/vendor/*.js') :
      glob.sync('./src/scripts/vendor/**/*.js')
    },

    output: {
      path: path.resolve(__dirname, 'public/js'),
      filename: '[name].bundle.js',
    },

    mode: env || 'development',

    module: {
      rules: [{
        test: /\.js*/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: 'env'
        }
      }]
    },

    cache: false,

    watch: false,

    devtool: !argv.prod ? 'source-map' : 'eval',

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
    }
  };

  return webpackConfig;
};
