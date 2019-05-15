const path = require('path')
const fs = require('fs')

// 递归遍历
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
// 获取pages下所有页面的name ['index', 'page1' ...]
const pagesNameList = getPagesName('src/pages')
