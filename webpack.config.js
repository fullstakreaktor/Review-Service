const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/client/src',
  entry: './index.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        },
      },
    ],
  },
  output: {
    path: __dirname + '/client/dist',
    filename: 'app.js',
  }
};