'use strict'

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    console.log(Sequelize)

    const { INTEGER, DATE, STRING } = Sequelize
    await queryInterface.createTable('users', {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: STRING(30),
      age: INTEGER,
      hobby: STRING,
      created_at: DATE,
      updated_at: DATE
    })
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users')
  }
}
