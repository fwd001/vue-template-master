// 跨域代理地址
const target = 'http://10.119.157.83:8070' // 地址

module.exports = {
  '/api': {
    target, // 域名
    // ws: true, // 是否启用swebsockets
    changeOrigin: true,
    pathRequiresRewrite: {
      '^/api': '/api'
    }
  }
}
