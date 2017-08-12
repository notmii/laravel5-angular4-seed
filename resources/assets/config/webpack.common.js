var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "polyfills": "./resources/assets/ts/polyfills.ts",
    "vendor": "./resources/assets/ts/vendor.ts",
    "app": "./resources/assets/ts/app.ts"
  },

  output: {
    filename: "[name].js",
    path: __dirname + "/../../../public/assets/[hash]",
    publicPath: "/assets/[hash]/"
  },

  resolve: {
    extensions: [
      ".js", ".ts"
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          "ts-loader?configFileName=config/tsconfig.json",
          "angular2-template-loader",
        ]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ["less-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
        use: "file-loader?name=assets/[name].[hash].[ext]"
      },
      {
        test: /\.css$/,
        use: "raw-loader"
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ["app", "vendor", "polyfills"]
    }),

    // new HtmlWebpackPlugin({
    //   template: "src/index.html"
    // }),

    // Workaround for Angular-SystemJS-Webpack(2) WARNINGS
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      'resources/assets'
    )
  ]
};
