const path = require("path");
const PrettierPlugin = require("./_utils/prettier.js");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const WebpackErrorReporting = require("bc-webpack-error-reporting-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const port = 3000;
let publicUrl = `http://localhost:${port}`;
if (process.env.GITPOD_WORKSPACE_URL) {
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split("://");
  publicUrl = `${port}-${host}`;
}

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
    sourceMapFilename: "main.js.map",
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    host: "localhost",
    port: port,
    open: true,
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: {
          loader: "file-loader",
          options: { name: "[name].[ext]" },
        },
      },
      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
          options: {
            attributes: false,
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackErrorReporting({
      hookURL: process.env.BC_ERROR_HOOK,
      username: process.env.BC_STUDENT_EMAIL,
      token: process.env.BC_ASSETS_TOKEN,
      compiler: "webpack",
      language: "html,css,javascript",
      framework: "vanillajs",
    }),
    new WebpackBuildNotifierPlugin({
      title: "Webpack Build",
      suppressSuccess: true,
    }),
    new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new PrettierPlugin({
      failSilently: true,
    }),
    new ESLintPlugin({
      extensions: ["js"],
    }),
  ],
};
