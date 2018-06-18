const path = require('path');

module.exports = {
  devtool: "source-map",
  entry: './src',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.sass$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  }
};