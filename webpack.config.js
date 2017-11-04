const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './bin'),
    filename: 'js/[name].[chunkhash].js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.styl']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
    }]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].[contenthash].css'),
    new HtmlPlugin({
      template: 'src/index.html'
    })
  ]
};
