const fs = require('fs')
const path = require('path')
const { format } = require('date-fns')

const configArray = []
const srcPath = path.join(__dirname, '..', 'src')
const markdownPath = path.join(__dirname, '..', 'src/markdown')
const isThought = fileName => (/\[想法\]/).test(fileName)
const isTech = fileName => (/\[技术\]/).test(fileName)

function getPostType(postName) {
  return isThought(postName) ? 'thought' : isTech(postName) ? 'tech' : ''
}

function sortByTime(a, b) {
  return new Date(b.time) - new Date(a.time)
}

// 生成配置的数组
function generateArray(markdowns) {
  markdowns.map(name => {
    const { mtime } = fs.statSync(`${markdownPath}/${name}`)
    configArray.push({
      name: name.replace('.md', ''),
      type: getPostType(name),
      time: format(mtime, 'yyyy-MM-dd')
    })
  })
  return configArray.sort(sortByTime)
}

// 生成配置文件数据
const postConfigData = `export default ${JSON.stringify(generateArray(fs.readdirSync(markdownPath)))}`

// 写入
fs.writeFileSync(`${srcPath}/postConfig.js`, postConfigData)
