import router from '@/router'
import store from '@/store'
import { whiteList } from '@/config/index'

// 路由前置拦截器:权限
router.beforeEach((to, from, next) => {
  if (to.name === from.name) return
  // 记录全局routername
  const name = to.name.includes('/') ? to.name.split('/')[0] : to.name
  store.commit('handleRouterName', { name })
  // 获取权限数组
  const roles = store.getters['user/roles']
  if (roles.length > 0) {
    // 用户权限以拉取
    if (whiteList.includes(to.name)) {
      // 白名单判断
      next()
    } else {
      if (roles.includes(to.meta.id)) {
        // 权限判断
        next()
      } else {
        next('/404')
      }
    }
  } else {
    // 用户权限未拉取 只能进入‘login’or ‘regist’
    if (to.name === 'login' || to.name === 'regist') {
      next()
    } else {
      next('/login')
    }
  }
})
