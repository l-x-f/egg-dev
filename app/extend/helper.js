function sendData(data, pageInfo) {
  const temp = { code: 1, message: 'ok', data }
  pageInfo && (temp.pageInfo = pageInfo)
  return temp
}

sendData.success = sendData
sendData.error = function error(message) {
  return {
    code: 0,
    message
  }
}

module.exports = {
  sendData
}
