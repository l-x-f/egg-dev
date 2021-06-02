/* eslint-disable strict */
const { Controller } = require('egg')

class LoginController extends Controller {
  async login() {
    console.log(this.ctx)

    this.ctx.body = {
      data: {
        code: '0',
        success: '成功'
      }
    }
  }
}

module.exports = LoginController
