// 兼容性处理
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plLazy from '@/components/plLazy' // 引入延时加载控件
import * as filters from './filters'
import './router/routerIntercept' // 初始化router
import './utils/antdConfig' // 引入antd
import './assets/css/index.less' // 引入全局自定义样式
import './utils/directive' // 全局注册指令
import './mock/index' // 引入mockjs

Vue.config.productionTip = false
// 过滤器统一加载
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 引入延时加载控件
Vue.component('pl-lazy', plLazy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
