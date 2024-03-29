const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "js/bundle.js",
    assetModuleFilename: "src/assets/img/[name].[ext]",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".css", ".scss"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|json)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/assets/index.html",
      favicon: "./src/assets/favicon.ico",
    }),
    new ForkTSCheckerWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
