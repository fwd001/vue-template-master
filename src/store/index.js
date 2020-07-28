import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import { user } from '@/store/modules/user'

Vue.use(Vuex)
// 初始化 VuexPersist
const vueLoca = new VuexPersist({
  storage: window.localStorage, // 保存到本地，也可以保存到sessionStorage
  modules: ['user'] // 支持模块
})

export default new Vuex.Store({
  state: {
    times: 0,
    routerName: ''
  },
  mutations: {
    // 实例方法
    addTimes(state, params) {
      state.times += params.num
    },
    // 获取路由信息
    handleRouterName(state, params) {
      state.routerName = params.name
    }
  },
  actions: {
    // 实例方法
    asyncAdd(context, params = { num: 1 }) {
      setTimeout(() => {
        context.commit('addTimes', { num: params.num })
      }, 1000)
    }
  },
  modules: { user },
  plugins: [vueLoca.plugin]
})
