import axios from 'axios'
import Vue from 'vue'
import { serverUrl } from '../config'

// 服务端地址
const service = axios.create({
  baseURL: serverUrl, // url = base url + request url
  withCredentials: true, // 跨域时是否带上cookie
  timeout: 20000, // 请求超时时间配置(ms)
  headers: {
    'Content-Type': 'application/json;charset=UTF-8' // json数据格式传输
  }
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 服务端响应成功时，搞些事情
    if (res.code !== '000000') {
      const msg = res.msg || '系统错误'
      Vue.prototype.$message.error(msg)
      throw res
    } else {
      return res
    }
  },
  error => {
    // 服务端响应失败时，搞些事情
    // Vue.prototype.$message.error(error)
    return Promise.reject(error)
  }
)

export default service

// 封装post请求用于mockjs
const mockdata = data => {
  return new Promise((resolve, reject) => {
    axios(data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
// mock数据 post请求
export const mock = (data) => mockdata(data)
