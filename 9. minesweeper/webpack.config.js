const path = require("path");
const ReFreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "TicTocTac",
  mode: "development", // 실서비스:production
  devtool: "eval", // hidden-source-map
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
        // 바벨 설정
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
          // 리엑트 자동 컴파일
          plugins: ["react-refresh/babel", "@babel/plugin-proposal-class-properties"], // "react-refresh/babel", "@babel/plugin-proposal-class-properties"
        },
      },
    ],
  },
  plugins: [new ReFreshWebpackPlugin()],
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
