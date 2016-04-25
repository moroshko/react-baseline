var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './demo/src/index'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'), // Must be an absolute path
    filename: 'index.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: [
          path.resolve(__dirname, 'src'),        // Must be an absolute path
          path.resolve(__dirname, 'demo', 'src') // Must be an absolute path
        ]
      },
      {
        test: /\.less$/,
        loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less',
        exclude: /node_modules/
      }
    ]
  },

  postcss: function() {
    return [autoprefixer];
  },

  resolve: {
    modulesDirectories: ['node_modules', 'src']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
