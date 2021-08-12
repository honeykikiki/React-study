const path = require("path");
const { webpack } = require("webpack");
const ReFreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "sss",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
            // 'stage-0',
          ],
          plugins: ["@babel/plugin-proposal-class-properties", "react-refresh/babel"], //"@babel/plugin-proposal-class-properties"
        },
      },
    ],
  },
  plugins: [new ReFreshWebpackPlugin()],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
  },
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
