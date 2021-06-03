const { Controller } = require('egg')

function toInt(str) {
  if (typeof str === 'number') return str
  if (!str) return str
  return parseInt(str, 10) || 0
}

class UserController extends Controller {
  async index() {
    const {
      helper: { sendData },
      query,
      model
    } = this.ctx
    const page = toInt(query.page) || 1
    const pageSize = toInt(query.pageSize) || 20
    const queryData = {
      limit: pageSize,
      offset: (page - 1) * pageSize,
      order: [['updated_at', 'DESC']],
      where: {}
    }
    Object.keys(query).forEach(key => {
      if (key !== 'page' && key !== 'pageSize' && query[key]) {
        key === 'age'
          ? (queryData.where[key] = toInt(query[key]))
          : (queryData.where[key] = query[key])
      }
    })
    const { count, rows } = await model.User.findAndCountAll(queryData)
    const pageInfo = {
      page,
      pageSize,
      total: count
    }
    this.ctx.body = sendData(rows, pageInfo)
  }

  async show() {
    const ctx = this.ctx
    const { sendData } = ctx.helper
    const data = await ctx.model.User.findByPk(toInt(ctx.params.id))
    ctx.body = sendData(data)
  }

  async create() {
    const ctx = this.ctx
    const { sendData } = ctx.helper
    try {
      const { name, age, hobby } = ctx.request.body
      const user = await ctx.model.User.create({ name, age, hobby })
      ctx.status = 201
      ctx.body = sendData(user)
    } catch (error) {
      console.log(error)
      const message = error?.errors[0]?.message
      ctx.body = sendData.error(message)
    }
  }

  async update() {
    const ctx = this.ctx
    const { sendData } = ctx.helper
    const id = toInt(ctx.params.id)
    const user = await ctx.model.User.findByPk(id)
    if (!user) {
      ctx.body = sendData.error('未找到此数据')
      return
    }

    const { name, age, hobby } = ctx.request.body
    await user.update({ name, age, hobby })
    ctx.body = sendData(user)
  }

  async destroy() {
    const ctx = this.ctx
    const { sendData } = ctx.helper
    const id = toInt(ctx.params.id)
    const user = await ctx.model.User.findByPk(id)
    if (!user) {
      ctx.body = sendData.error('未找到此数据')
      return
    }

    await user.destroy()
    ctx.status = 200
  }
}

module.exports = UserController
