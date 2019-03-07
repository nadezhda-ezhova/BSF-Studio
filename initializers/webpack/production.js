const merge = require('webpack-merge');
const client = require('./client');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

module.exports = merge(client, {
  mode: 'production',

  devtool: 'source-map',

  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
      __CLIENT__: true,
      __SERVER__: false
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[hash].css'
    }),
    new ManifestPlugin()
  ]
});