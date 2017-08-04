const path = require("path");
const webpack = require("webpack");

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
        use: [
          {
            loader: "style-loader" // Creates style nodes from JS strings
          }, {
            loader: "css-loader" // Translates CSS into CommonJS
          }, {
            loader: "sass-loader" // Compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
      // JavaScript Files
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [
          // Convert to ES2015
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    })
  ],
  resolve: {alias: {"vue$": "vue/dist/vue.js"}}
};
