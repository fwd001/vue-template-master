// import Vue from 'vue'
// import store from '@/store'

// 注册全局组件 权限界面的显示隐藏
// Vue.directive('auth', {
//   bind(el, binding, vnode) {
//     const val = binding.value
//     let isShow = false
//     const roles = store.getters['user/roles']
//     if (typeof val === 'object') {
//       isShow = val.some(v => roles.includes(v))
//     } else {
//       isShow = roles.includes(val)
//     }
//     if (!isShow) {
//       el.style.display = 'none'
//     }
//   }
// })
