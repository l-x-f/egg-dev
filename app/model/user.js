'use strict'
const dayjs = require('dayjs')

const format = date => dayjs(date).format('YYYY/MM/DD HH:mm:ss')

module.exports = app => {
  const { STRING, INTEGER, DATE, VIRTUAL } = app.Sequelize

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    hobby: STRING,
    age: {
      type: INTEGER,
      validate: {
        isInt: { msg: '年龄字段请输⼊数字' },
        min: { args: [0], msg: '年龄字段必须⼤于0' }
      }
    },
    introduction: {
      type: VIRTUAL,
      get() {
        const age = this.getDataValue('age')
        const name = this.getDataValue('name')
        const hobby = this.getDataValue('hobby')
        return `姓名：${name} ，${age}岁，爱好：${hobby}，更新时间：${format(
          this.getDataValue('updated_at')
        )}`
      }
    },
    created_at: {
      type: DATE,
      get() {
        return `${format(this.getDataValue('created_at'))}`
      }
    },
    createdAt: {
      type: VIRTUAL,
      get() {
        return `${format(this.getDataValue('created_at'))}`
      }
    },
    updated_at: {
      type: DATE,
      get() {
        return `${format(this.getDataValue('updated_at'))}`
      }
    },
    updatedAt: {
      type: DATE,
      get() {
        return `${format(this.getDataValue('updated_at'))}`
      }
    }
  })

  return User
}
