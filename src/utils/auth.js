import store from '@/store'

// 判读啊用户权限是否存在
export function authority (val) {
  const roles = store.getters['user/roles']
  if (typeof val === 'object') {
    return val.some(v => roles.includes(v))
  }
  return roles.includes(val)
}
