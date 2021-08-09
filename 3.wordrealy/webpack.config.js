const path = require("path");
const ReFreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "word-relay-setting",
  mode: "development", // 실서비스:production
  devtool: "eval", // giden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  }, //입력
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
                  browsers: ["> 5% in KR"], //browerslist
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["@babel/plugin-proposal-class-properties", "react-refresh/babel"], //"@babel/plugin-proposal-class-properties"
        },
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
  }, //출력
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
