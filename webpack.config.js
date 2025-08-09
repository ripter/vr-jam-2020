const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
  static: path.join(__dirname, 'public'),
    compress: false,
    port: 9000,
    host: '0.0.0.0' // allow everyone on localhost to see the server
  },
  module: {
    rules: [
      {
        test: /\.glsl/i,
        use: 'raw-loader',
      },
    ],
  }
};
