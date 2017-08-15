const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
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
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  resolve: {alias: {"vue$": "vue/dist/vue.js"}}
};
