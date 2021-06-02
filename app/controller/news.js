/* eslint-disable strict */
const { Controller } = require('egg')

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    }

    await this.ctx.service.user.create()
    await this.ctx.render('news/list.tpl', dataList)
  }
  async details() {
    const list = [
      { id: 1, title: 'this is news 1', url: '/news/1' },
      { id: 2, title: 'this is news 2', url: '/news/2' }
    ]
    const { id } = this.ctx.params
    const item = list.find(item => item.id === +id)
    const userInfo = await this.ctx.service.user.find(id)

    console.log(userInfo, ' userInfo')

    await this.ctx.render('news/details.tpl', { item, userInfo: userInfo[0] })
  }
}

module.exports = NewsController
