/* eslint-disable eggache/no-override-exports */
'use strict'

/** @type Egg.EggPlugin */
module.exports = {
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
}
