/* eslint-disable strict */
const { Controller } = require('egg')

class LoginController extends Controller {
  login() {
    const { ctx } = this
    console.log(this.ctx.request.body)

    if (ctx.request.body.account !== 'admin') {
      ctx.body = {
        data: {
          code: '0',
          success: '账号错误',
          data: '账号错误'
        }
      }
      return
    }
    if (ctx.request.body.password !== '12345678') {
      ctx.body = {
        data: {
          code: '0',
          success: '密码错误',
          data: '密码错误'
        }
      }
      return
    }

    const token = ctx.app.jwt.sign(
      {
        ...ctx.request.body
      },
      this.app.config.jwt.secret,
      {
        expiresIn: '7d' // 时间根据自己定，具体可参考jsonwebtoken插件官方说明
      }
    )

    ctx.body = {
      data: {
        code: '1',
        success: '成功',
        data: token
      }
    }
  }
}

module.exports = LoginController
