const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./source/index.js",
    about: "./source/about.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    //__dirname : webpack.config.js의 경로
    filename: "[name]_bundle.js",
    // npx webpack --config webpack.config.js or npx webpack
  },
  module: {
    rules: [
      {
        //웹팩을 동작시킬때 확장자가 css인 파일을 만나면 웹팩안으로 로드시켜주는 명령
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        //css-loader 파일을 읽어옴
        //style-loader 스타일을 주입해줌
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./source/index.html", //무엇을 템플릿으로 할 것인지
      filename: "index.html", //어떤결과로 저장할지
      chunks: ["index"], //entry 이름을 가져옴
    }),
    new HtmlWebpackPlugin({
      template: "./source/about.html", //무엇을 템플릿으로 할 것인지
      filename: "about.html", //어떤결과로 저장할지
      chunks: ["about"], //entry 이름을 가져옴
    }),
  ],
};
