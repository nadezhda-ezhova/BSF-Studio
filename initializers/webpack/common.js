const path = require('path');

module.exports = {  
  entry: './src/init.js',

  output: {
    path: path.resolve(process.cwd(), 'public', 'assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { 
        test: /\.js$/, 
        include: [
          path.resolve(process.cwd(), 'src'),
          path.resolve(process.cwd(), 'initializers', 'server')
        ],
        use: 'babel-loader' 
      },
      {
        test: /\.(svg|eot|ttf|woff)$/,
        use: ['file-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]'],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    symlinks: false,
    modules: [
      path.resolve(process.cwd(), 'src'),
      'node_modules'
    ]
  }
};