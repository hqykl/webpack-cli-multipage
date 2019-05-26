const chalk = require('chalk');
const argv = process.argv

// 未传页面名称时报错
function checkFilename() {
  if (argv.length <= 2) {
    console.log(chalk.red('请输入页面名称'))
    return false
  }
  return true;
}

// 
function getFilename() {
  
}

// 获取页面名称
const filename = argv.filter((value, index) => {
  return index >= 2
})

filename.map(() => {

})
console.log(filename)