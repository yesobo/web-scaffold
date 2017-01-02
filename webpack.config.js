var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: { 
    path: __dirname, 
    filename: './bundle.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }]
    }]
  },
};