var path = require('path');
var webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
  output: {
    path: __dirname + '/dist'
  }
}
let extractSCSS = new ExtractTextPlugin('bundle.css');

module.exports = {
  entry: './src/main.js',
  output: { 
    path: config.output.path, 
    filename: 'bundle.js' 
  },
  module: {
    rules: [{
      test: /.js?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }]
    }, {
      test: /\.s?css$/,
      loader: extractSCSS.extract({
          fallbackLoader: 'style-loader',
          loader: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
          ]
        }),
    }]
  },
  plugins: [
    extractSCSS
  ],
  devServer: {
    contentBase: './src'
  }
};