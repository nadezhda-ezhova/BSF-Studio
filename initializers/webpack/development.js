const merge = require('webpack-merge');
const client = require('./client');
const webpack = require('webpack');

const path = require('path');

module.exports = merge(client, {
  mode: 'development',

  devServer: {
    contentBase: path.join(process.cwd(), 'public'),
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/index_dev.html' }
      ]
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __PRODUCTION__: false
    })
  ]
});