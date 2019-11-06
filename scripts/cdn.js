const qiniu = require('qiniu')
const fs = require('fs')
const path = require('path')
const mime = require('mime');
const { accessKey, secretKey, scope } = require('./qiniuConfig')

const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const putPolicy = new qiniu.rs.PutPolicy({ scope })
const uploadToken = putPolicy.uploadToken(mac)
const config = new qiniu.conf.Config()
config.zone = qiniu.zone.Zone_z0
const formUploader = new qiniu.form_up.FormUploader(config)

// 七牛上传函数
function uploadFile(uploadToken, key, localFile, putExtra) {
  return new Promise((resolve, reject) => {
    formUploader.putFile(uploadToken, key, localFile, putExtra, (respErr, respBody, respInfo) => {
      if (respErr) {
        reject()
      }
      if (respInfo.statusCode == 200) {
        resolve()
      } else {
        reject()
      }
    })
  })
}

// 获取文件路径
function getBuildFilePath(fileName = '') {
  if (fileName) return path.join(__dirname, '..', `build/${fileName}`)
  return path.join(__dirname, '..', 'build')
}

// 上传打包后的文件到七牛
async function upload(files) {
  console.log('uploading files...')
  await Promise.all(files.map(fileName => {
    const putExtra = new qiniu.form_up.PutExtra(null, null, mime.getType(fileName))
    uploadFile(uploadToken, fileName, getBuildFilePath(fileName), putExtra)
  }))
  console.log('upload done!!!')
}

try {
  upload(fs.readdirSync(getBuildFilePath()))
} catch (e) { throw '======= upload error ======'}
