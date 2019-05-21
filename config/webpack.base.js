const path = require('path')
const fs = require('fs')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const env = process.env.NODE_ENV

// 递归获取所有入口名称
function getPagesName(filePath, originPath = filePath, nameList = []) {
  const files = fs.readdirSync(filePath)
  files.forEach(filename => {
    const filedir = path.join(filePath, filename)
    const fliestat = fs.statSync(filedir)
    if (fliestat.isFile()) {
      const startIndex = filedir.lastIndexOf(originPath)
      const endIndex = filedir.lastIndexOf('.')
      const name = filedir.substring(startIndex + originPath.length +1, endIndex);
      if (name.length > 0) {
        nameList.push(name)
      }
    } else if (fliestat.isDirectory()) {
      getPagesName(filedir, filePath, nameList);
    }
  })
  return (nameList)
}
const pagesNameList = getPagesName('src/pages')
// 根据页面名称生成入口
function getEntry() {
  const entryObj = {}
  let filePath = ''
  pagesNameList.forEach(value => {
    filePath = path.resolve(__dirname, `../src/assets/js/${value}.js`)
    if (fs.existsSync(filePath)) {
      entryObj[value] = filePath
    }
  })
  return  entryObj
}

// 生成htmlWebpackPlugin插件的参数
function getHtmlConfig(name) {
  return {
    template    : './src/pages/' + name + '.html',
    filename    : name + '.html',
    inject      : true,
    hash        : env === 'local',
    chunks      : ['common', name] // 引入的模块
  }
}

// plugins配置项
let plugins = [
  // 自动全局加载模块，不用到处引入
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  }),
  new webpack.EnvironmentPlugin()
];

pagesNameList.forEach(item => {
  plugins.push(new htmlWebpackPlugin(getHtmlConfig(item)))
})

module.exports = {
  entry: getEntry(),
  output: {
    // filename可以增加相对路径，这样便于打包后的文件目录划分
    // devserver开启热更新时不能用contenthash和chunkhash
    // filename: 'public/js/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, '../dist'),
    // 打包后公共路径
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'url-loader?mimetype=image/[ext]',
          options: {
            limit: 1024,
            name: '[name].[ext]',
            outputPath: 'public/img',
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src')
            // 打包后图片公共路径
            // publicPath: 'https://s01.xiaopeng.com'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'public/font',
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  plugins
}