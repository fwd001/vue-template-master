import axios from 'axios'

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
    // 服务端响应成功时，搞些事情
    return response
  },
  error => {
    // 服务端响应失败时，搞些事情
    // Vue.prototype.$message.error(error)
    return Promise.reject(error)
  }
)

export default service

// export const fileExportFun = (url, type, params, isFormData) => {
//   var xmlhttp = ''
//   var method = type || 'post'
//   var queryParams = params || {}
//   if (window.XMLHttpRequest) {
//     xmlhttp = new XMLHttpRequest()
//   } else {
//     // xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
//   }
//   xmlhttp.withCredentials = true
//   xmlhttp.open(method, url, true)
//   if (isFormData) {
//     xmlhttp.setRequestHeader(
//       'Content-Type',
//       'application/x-www-form-urlencoded'
//     )
//   } else {
//     xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
//   }
//   xmlhttp.responseType = 'arraybuffer'
//   if (isFormData) {
//     // var sendData = _queryStringify(queryParams)
//     // xmlhttp.send(sendData)
//   } else {
//     xmlhttp.send(JSON.stringify(queryParams))
//   }
//   xmlhttp.onreadystatechange = function(request) {
//     if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//       var datas = new Blob([this.response], {
//         type: 'application/octet-stream'
//       })
//       var textFile = window.URL.createObjectURL(datas)
//       //  后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
//       var contentDisposition = this.getResponseHeader('content-disposition')
//       var patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*')
//       var result = contentDisposition ? patt.exec(contentDisposition) : []
//       var filename = result[1] || '文件下载.xlsx'

//       if (textFile) {
//         var a = document.createElement('a')
//         a.href = textFile
//         a.download = decodeURIComponent(filename)
//         a.click()
//         window.URL.revokeObjectURL(textFile)
//       }
//     } else if (xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
//       alert('导出失败')
//     }
//   }
// }
