import axios from 'axios'
const instance = method => {
  return axios.create({
    baseURL: 'http://localhost:8086' /* 本地json假数据测试地址 */,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

const catchNetwork = e => {
  if (e && e.code) {
    switch (e.code) {
      case 401:
        console.log('权限验证失败')
        break
      case 404:
        console.log('请求数据错误')
        break
      default:
        console.log('服务器错误')
        break
    }
  } else {
    console.log(e)
    console.log('请求数据成功')
  }
}

// GET请求
const fetchGet = (url, params, method) => {
  return new Promise((resolve, reject) => {
    instance(method)
      .request({
        url: url,
        params: params,
        // data:params,
        method: method || 'get'
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(e => {
        reject(e)
        catchNetwork(e)
      })
  })
}
// POST请求
const fetchPost = (url, data, method) => {
  return new Promise((resolve, reject) => {
    instance(method)
      .request({
        url: url,
        data: data,
        method: method || 'post'
      })
      .then(res => {})
      .catch(e => {
        reject(e)
        catchNetwork(e)
      })
  })
}

export default {
  catchNetwork,
  getTest: () => {
    return fetchGet('/account', null, 'get')
  },

  postTest: data => {
    return fetchPost('/account')
  }
}
