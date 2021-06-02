const { Service } = require('egg')

class UserService extends Service {
  async find(id) {
    console.log(this.app.mysql, 'sql')

    const user = await this.app.mysql.query('select * from users where id = ?', id)
    console.log(user, ' user')

    return user
  }
  async create() {
    console.log(this.app.mysql, 'sql')

    const user = await this.app.mysql.insert('users', {
      name: '小明',
      age: '158',
      register_date: new Date()
    })

    return user
  }
}

module.exports = UserService
