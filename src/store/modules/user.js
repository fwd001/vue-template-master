import router from '@/router'
import { login } from '@/api/user'
// import { setUserInfo, removeUserInfo } from '@/utils/auth'

export const user = {
  namespaced: true,
  state: {
    // 用户信息
    info: {
      nickname: '',
      userPermission: [], // 权限列表
      status: '',
      userLevel: ''
    }
  },
  mutations: {
    // 添加信息
    setUserInfo (state, payload) {
      state.info = { ...payload }
    },
    // 登出
    logout (state) {
      // 清空全局用户信息
      const emty = {
        account: '',
        userPermission: [],
        status: '',
        userLevel: ''
      }
      state.info = { ...emty }
      // 发送请求 + FIXME：开发未完成
      router.push('/login')
    },
    // 删除权限测试
    deletePermission (state) {
      const list = [...state.info.userPermission]
      list.pop()
      state.info.userPermission = [...list]
      console.log(state.info.userPermission)
    }
  },
  actions: {
    // 登陆
    login ({ commit }, payload) {
      const username = payload.username.trim()
      return new Promise((resolve, reject) => {
        login({ username, password: payload.password })
          .then(res => {
            // 存全局状态
            commit('setUserInfo', res.data)
            setTimeout(() => {
              resolve(res)
            }, 1000)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    // 计算权限id数组
    roles (state) {
      return state.info.userPermission.map(v => v.id)
    }
  }
}
