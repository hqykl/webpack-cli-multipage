const chalk = require('chalk');
const path = require('path')
const fs = require('fs')
class AddPages {
  constructor() {
    this.filepath = {
      cssPath: path.resolve(__dirname, 'src/assets/scss'),
      jsPath: path.resolve(__dirname, 'src/assets/js'),
      htmlPath: path.resolve(__dirname, 'src/pages')
    }
  } 

  getFilePath() {
    const argv = process.argv
    if (argv.length <= 2) {
      global.console.log(chalk.red('请输入页面名称'))
      return false
    } 
    const filePathList = []
    argv.forEach((value, index) => {
      const files = this.isExistFile(value)
      if (index > 1 && files) {
        filePathList.push(files)
      }
    })
    return filePathList
  }

  isExistFile(filename) {
    let isExist = false
    const htmlPath = this.filepath.htmlPath + '/' + filename + '.html'
    if (fs.existsSync(htmlPath)) {
      global.console.log(chalk.red(`${filename}.html  文件已存在，请重新命名`))
      isExist = true
    }
    const jsPath = this.filepath.jsPath + '/' + filename + '.js'
    if (fs.existsSync(jsPath)) {
      global.console.log(chalk.red(`${filename}.js  文件已存在，请重新命名`))
      isExist = true
    }
    const cssPath = this.filepath.cssPath + '/' + filename + '.scss'
    if (fs.existsSync(cssPath)) {
      global.console.log(chalk.red(`${filename}.scss  文件已存在，请重新命名`))
      isExist = true
    }
    if (isExist) {
      return false
    }
    return [
      htmlPath,
      jsPath,
      cssPath
    ]
  }
  createFile() {
    const pathList = this.getFilePath()
    if (!pathList) return false
    fs.readFile('./tpl/html.tpl', 'utf-8', (err, data) => {
      if (err) throw err
      console.log(data);
    })
  }
}
// 获取页面名称

const add = new AddPages()
console.log(add.createFile())
