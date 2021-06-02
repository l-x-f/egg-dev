/* eslint-disable strict */
const { Controller } = require('egg')
const path = require('path')
const { promises: fs } = require('fs')

class UploadController extends Controller {
  async get() {
    await this.ctx.render('example/upload.html')
  }
  async upload() {
    const file = this.ctx.request.files[0]
    console.log(file)
    const buf = await fs.readFile(file.filepath)
    await fs.writeFile(path.join(__dirname, `../files/${file.filename}`), buf)
    this.ctx.body = file.filename
  }
}

module.exports = UploadController
