'use strict'
const users = require('./users')

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const gzip = app.middleware.gzip({ threshold: 1024 })
  const jwt = app.middleware.jwt(app.config.jwt)

  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/news', controller.news.list)
  router.get('/news/:id', controller.news.details)

  router.post('/login', controller.login.login)
  router.get('/upload', controller.upload.get)
  router.post('/upload', jwt, controller.upload.upload)
  // 注册users
  users(app, { jwt, gzip })
}
