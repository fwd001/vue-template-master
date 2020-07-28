import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '@/router/router.config.js'

Vue.use(Router)
// 处理vue路由跳转报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

const router = new Router({
  routes: constantRouterMap
})

export default router
