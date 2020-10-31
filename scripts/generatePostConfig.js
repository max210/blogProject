const fs = require('fs')
const path = require('path')
const { format } = require('date-fns')

const srcPath = path.join(__dirname, '..', 'src')
const codePath = path.join(__dirname, '..', 'src/markdown/code')
const thinkingPath = path.join(__dirname, '..', 'src/markdown/thinking')

function sortByTime(a, b) {
  return new Date(b.Timestamp) - new Date(a.Timestamp)
}

function readFileToList(path, type) {
  const result = []
  fs.readdirSync(path).map(name => {
    const { mtime } = fs.statSync(`${path}/${name}`)
    result.push({
      name: name.replace('.md', ''),
      type,
      Timestamp: new Date(mtime).getTime(),
      time: format(mtime, 'yyyy-MM-dd')
    })
  })
  return result
}

// 生成配置的数组
function generateArray() {
  const codeArray = readFileToList(codePath, 'code')
  const thinkingArray = readFileToList(thinkingPath, 'thinking')
  
  return codeArray.concat(thinkingArray).sort(sortByTime)
}

// 生成配置文件数据
const postConfigData = `export default ${JSON.stringify(generateArray())}`

// 写入
fs.writeFileSync(`${srcPath}/postConfig.js`, postConfigData)
