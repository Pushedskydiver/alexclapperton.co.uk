const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

function Bundle() {
  const prod = process.argv.includes('--prod');
  const env = process.env.NODE_ENV;
  const plugin = require('./_config/plugins.json');

  const alias = {
    'cookies': 'mozilla-doc-cookies/docCookies.js',
    'zenscroll': 'zenscroll/zenscroll.js',
    'prism': 'prismjs/prism.js',
    Src: path.resolve(__dirname, 'src')
  };

  const plugins = [
    new ManifestPlugin({
      fileName: path.join(__dirname, 'src', 'cache-manifest.json')
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: path.resolve(__dirname, 'views', '_partials', 'scripts.hbs'),
      template: path.resolve(__dirname, 'views', '_templates', 'scripts.hbs'),
      chunks: ['common']
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    // new BundleAnalyzerPlugin()
  ];

  const BabelLoader = {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', {
          targets: {
            browsers: ['>0.25%', 'ie 11', 'not op_mini all']
          },
          modules: false
        }]
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import'
      ]
    },
  };

  return {
    cache: false,

    devtool: !prod ? 'source-map' : 'eval',

    entry : {
      common: path.resolve(__dirname, 'src/scripts/main.js')
    },

    output: {
      path: path.resolve(__dirname, 'public', 'js'),
      filename: '[name].bundle.js?cb=[chunkhash]',
      chunkFilename: '[id].chunk.js?cb=[chunkhash]',
      publicPath: '/js/'
    },

    mode: env || 'development',

    module: {
      rules: [
        {
          test: /\.js*/,
          exclude: /node_modules/,
          use: [BabelLoader]
        }
      ]
    },

    optimization: {
      minimizer: prod ?
      [new UglifyJsPlugin(plugin.uglify)] :
      [new UglifyJsPlugin({
        uglifyOptions: {
          minimize: false,
          warnings: false,
          mangle: false
        },
      })]
    },

    plugins,

    resolve: {
      alias,
      extensions: ['.js']
    },

    watch: false
  };
};

module.exports = Bundle();
