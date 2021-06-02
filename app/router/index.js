'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const gzip = app.middleware.gzip({ threshold: 1024 })

  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/news', controller.news.list)
  router.get('/news/:id', controller.news.details)

  router.post('/login', gzip, controller.login.login)
  router.get('/upload', controller.upload.get)
  router.post('/upload', controller.upload.upload)
}
