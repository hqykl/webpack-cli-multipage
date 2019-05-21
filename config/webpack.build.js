const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const cssExtract = require('mini-css-extract-plugin')
module.exports = {
  mode: 'production',
  output: {
    // filename可以增加相对路径，这样便于打包后的文件目录划分
    // devserver开启热更新时不能用contenthash和chunkhash
    filename: 'public/js/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, '../dist'),
    // 打包后公共路径
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: cssExtract.loader,
            options: {
              // publicPath: '../../'
            }
          },
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: cssExtract.loader,
            options: {
              // publicPath: '../../'
            }
          },
          'css-loader', 'postcss-loader', 'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // 每次打包前清理dist目录
    new cleanWebpackPlugin(),
    // 单独将css抽离
    new cssExtract({
      filename: 'public/css/[name].[hash:8].css',
      // devserver开启热更新时不能用contenthash和chunkhash
      // filename: 'public/css/[name].[contenthash:8].css',
      // chunkFilename: '[id].css',
    }),
  ]
}