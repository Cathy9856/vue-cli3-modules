import axios from 'axios'

const base = 'api'
const service = axios.create({
  baseURL: base,
  timeout: 10000
})

// 拦截请求数据
service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// 拦截返回数据
service.interceptors.response.use(response => {
  return new Promise((resolve, reject) => {
    if (response.data.errCode === 0) {
      resolve(response.data)
    } else {
      reject(response)
    }
  })
}, error => {
  return Promise.reject(error)
})

export default function ({ url = '', params = {}, method = 'GET' } = {}) {
  let _config = {
    url,
    method
  }
  // 动态设置传参名称
  method.toUpperCase() === 'GET' ? _config.params = params : _config.data = params

  // 发送请求
  return new Promise((resolve, reject) => {
    return service(_config).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
