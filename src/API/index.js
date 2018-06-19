import config from '../../package.json'

// 设置服务器地址
let url = null

if (process.env.NODE_ENV === 'development') {
  url = config.api.dev
} else {
  url = config.api.build
}

/**
 * 发起网络请求
 * @param  {[type]} pathname URL 的路径部分。
 * @param  {[type]} data     data 参数，默认为{}。
 * @param  {[type]} method   请求方式，参数必须大写。toUpperCase() 小写转大写方法。默认get。
 */
let API = (pathname, data = {}, method = 'get') => {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url + pathname,
      data: data,
      method: method.toUpperCase(),
      success: function (res) {
        resolve(res.data)
      },
      fail: function (error) {
        wx.hideLoading()
        wx.showModal({
          title: 'error',
          showCancel: false,
          content: '接口请求失败，请联系维护。'
        })
        reject(error)
      }
    })
  })
}

export default API
