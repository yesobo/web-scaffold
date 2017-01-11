var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: { 
    path: __dirname + '/dist', 
    filename: 'bundle.js' },
  module: {
    rules: [{
      test: /.js?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }]
    }]
  },
  devServer: {
    contentBase: './src'
  }
};