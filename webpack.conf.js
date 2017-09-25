const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    vendor: ["vue"],
    app: "./src/app/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        // Sass files
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader", // Translates CSS into CommonJS
            "sass-loader" // Compiles Sass to CSS
          ]
        })
      },
      {
        test: /\.vue$/,
        use: [{loader: "vue-loader"}]
      },
      // JavaScript Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    }),
    new ExtractTextPlugin("styles.css")
  ],
  resolve: {alias: {"vue$": "vue/dist/vue.min.js"}}
};
