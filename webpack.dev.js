const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/js/index.js"
  },
  devServer: {
    port: 1234,
    historyApiFallback: {
      index: "/404.html",
      disableDotRule: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      favicon: "./favicon_io/favicon.ico",
      inject: true,
      chunks: ["main"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/depressionSurvey/index.html",
      favicon: "./favicon_io/favicon.ico",
      inject: true,
      chunks: ["main"],
      filename: "depressionSurvey/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/anxietySurvey/index.html",
      favicon: "./favicon_io/favicon.ico",
      inject: true,
      chunks: ["main"],
      filename: "anxietySurvey/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/graphs/index.html",
      favicon: "./favicon_io/favicon.ico",
      inject: true,
      chunks: ["main"],
      filename: "graphs/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/404.html",
      favicon: "./favicon_io/favicon.ico",
      inject: true,
      chunks: ["main"],
      filename: "404.html"
    }),
    new MiniCssExtractPlugin({
      linkType: "text/css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "@popperjs/core", "default"]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  }
};
