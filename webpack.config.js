var path = require('path');
var webpack = require('webpack');

if (process.argv.indexOf('-p') !== -1) {
  process.env.NODE_ENV = 'production';
}

let config = {
  output: {
    path: __dirname + '/dist'
  }
}

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractSCSS = new ExtractTextPlugin('bundle.css');

module.exports = {
  entry:   {
    bundle: './src/main.js',
    chunk1: './src/app/chunks/chunk1/chunk1.module.js',
    chunk2: './src/app/chunks/chunk2/chunk2.module.js',
    chunk3: './src/app/chunks/chunk3/chunk3.module.js'
  },
  output: { 
    path: config.output.path, 
    filename: '[name].js' 
  },
  plugins: [  
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
          // this assumes your vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    extractSCSS
  ],
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
          loader: 'sass-loader',
          query: {
            data: "$NODE_ENV: " + process.env.NODE_ENV + ";" 
          } 
        }]
      }),
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader?name=./assets/fonts/[name].[ext]'
    }]
  },
  devServer: {
    contentBase: './src'
  }
};