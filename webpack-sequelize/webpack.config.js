const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('client/build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\css$/,
        use: [ "style-loader", "css-loader" ]  
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/public/index.html",
      filename: "./index.html"
    })
  ]
};