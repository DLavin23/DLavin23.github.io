var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    site: [
      './source/stylesheets/site.scss',
      './source/javascripts/app.js',
    ]
  },

  resolve: {
    root: __dirname + '/source/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },

  module: {
    loaders: [
      {
        test: /source\/assets\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
      },
      // Load SCSS
      {
        test: /.*\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css!sass?sourceMap&includePaths[]=" + __dirname + "/node_modules"
        )
      },

      // Load plain-ol' vanilla CSS
      { test: /\.css$/, loader: "style!css" },
    ],
  },
  plugins: [
    new ExtractTextPlugin("site.css")
  ]
};
