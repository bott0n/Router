// 讓你可以動態插入 bundle 好的 .js 檔到 .index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const path = require('path');
// entry 為進入點，output 為進行完 eslint、babel loader 轉譯後的檔案位置
module.exports = {
  entry: path.resolve('src/index.js'),
  output: {
    path:path.resolve('dist'),
    filename: 'bundle.js',
   
  },
  /*alias: {
    applicationStyles: path.resolve('src/subPages/Home/main.css')
  },*/

  module: {
  
   loaders:
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',          
      },
      {
        test: /\.css/, // Only .css files
        loader: 'style-loader!css-loader'// Run both loaders
      }
    ],
  },
  // 啟動開發測試用 server 設定（不能用在 production）
  devServer: {
    inline: true,
    port: 8008,
    // react-router測試用
    historyApiFallback : true
  },
  plugins: [HTMLWebpackPluginConfig],
};