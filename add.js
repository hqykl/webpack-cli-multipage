const chalk = require('chalk');
const path = require('path')
const fs = require('fs')
class AddPages {
  constructor() {
    this.filename = ''
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
    let filePathList = []
    argv.forEach((value, index) => {
      const files = this.isExistFile(value)
      if (index > 1 && files) {
        filePathList = files
      }
    })
    return filePathList
  }

  isExistFile(filename) {
    this.filename = filename
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
      fs.writeFile(pathList[0], data, 'utf-8', () => {
      })
    })
    fs.readFile('./tpl/js.tpl', 'utf-8', (err, data) => {
      if (err) throw err
      const str = `require('../scss/${this.filename}.scss')${data}`
      fs.writeFile(pathList[1], str, 'utf-8', () => {
      })
    })
    fs.readFile('./tpl/scss.tpl', 'utf-8', (err, data) => {
      if (err) throw err
      fs.writeFile(pathList[2], data, 'utf-8', () => {
      })
    })
  }
}
// 获取页面名称

const add = new AddPages()
console.log(add.createFile())
