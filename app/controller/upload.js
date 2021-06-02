/* eslint-disable strict */
const { Controller } = require('egg')
const fs = require('fs')
const path = require('path')

class UploadController extends Controller {
  async get() {
    await this.ctx.render('example/upload.html')
  }
  async upload() {
    const file = this.ctx.request.files[0]
    console.log(file)
    const buf = fs.readFileSync(file.filepath)
    fs.writeFile(path.join(__dirname, `../files/${file.filename}`), buf, err => {
      console.log(err)
    })
    this.ctx.body = file.filename
  }
}

module.exports = UploadController
