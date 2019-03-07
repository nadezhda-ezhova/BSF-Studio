const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true
    })
  ]
});