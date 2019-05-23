const path = require('path')
const webpack = require('webpack')
const cssExtract = require('mini-css-extract-plugin')
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
  },
  // 代码映射 正式包时一定要关闭该选项
  devtool: 'eval-source-map',
  output: {
    // filename可以增加相对路径，这样便于打包后的文件目录划分
    // devserver开启热更新时不能用contenthash和chunkhash
    // filename: 'public/js/[name].[chunkhash:8].js',
    filename: 'public/js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    // 打包后公共路径
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 单独将css抽离
    new cssExtract({
      filename: 'public/css/[name].css',
      // devserver开启热更新时不能用contenthash和chunkhash
      // filename: 'public/css/[name].[contenthash:8].css',
      // chunkFilename: '[id].css',
    }),
  ]
}