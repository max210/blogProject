const qiniu = require('qiniu')
const fs = require('fs')
const path = require('path')
const mime = require('mime');
const { accessKey, secretKey } = require('./qiniuConfig')

const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'max210-blog'
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

const config = new qiniu.conf.Config()
config.zone = qiniu.zone.Zone_z0

const localFile = '/Users/maximilian/blog/src/markdown/原型链.md'
const formUploader = new qiniu.form_up.FormUploader(config)

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

function getBuildFilePath(fileName = '') {
  if (fileName) return path.join(__dirname, '..', `build/${fileName}`)
  return path.join(__dirname, '..', 'build')
}

const files = fs.readdirSync(getBuildFilePath())
async function upload() {
  console.log('uploading files...')
  await Promise.all(files.map(file => {
    const putExtra = new qiniu.form_up.PutExtra(null, null, mime.getType(file))
    uploadFile(uploadToken, file, getBuildFilePath(file), putExtra)
  }))
  console.log('upload done!!!')
}

try {
  upload()
} catch (e) { throw '======= upload error ======'}
