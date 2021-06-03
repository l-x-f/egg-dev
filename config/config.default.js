/* eslint valid-jsdoc: "off"     */
/* eslint-disable array-bracket-spacing   */

'use strict'
const path = require('path')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1622528214547_3064'

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    middleware: ['gzip', 'errorHandler'],

    // 配置 gzip 中间件的配置
    gzip: {
      threshold: 1024 // 小于 1k 的响应体不压缩
    }
  }

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    },
    root: [
      path.join(appInfo.baseDir, 'app/view'),
      path.join(appInfo.baseDir, 'path/to/another')
    ].join(',')
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  config.cors = {
    origin: '*', // 匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }

  config.multipart = {
    mode: 'file',
    fileSize: '50mb'
  }

  config.jwt = {
    secret: 'jwt' // 自定义 token 的加密条件字符串
  }

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    database: 'database_development',
    user: 'root',
    // 密码
    password: 'lxf@0627',
    timezone: '+08:00'
  }

  return {
    ...config,
    ...userConfig
  }
}
