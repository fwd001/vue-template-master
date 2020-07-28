// 侧边栏可点击菜单
export const menuList = [
  {
    name: '首页',
    code: 0, //  code 为权限id
    routerName: 'home'
  },
  {
    name: '页面1',
    code: 1, //  code 为权限id
    routerName: 'page1'
  },
  {
    name: '页面2',
    code: 3,
    routerName: 'page2'
  },
  {
    name: '2级菜单',
    code: [6],
    routerName: 'sub1',
    children: [
      {
        name: '页面3',
        code: 3,
        routerName: 'page3'
      }
    ]
  }
]

// 首次进入或刷新跳转页面
export const jump = (roles, route) => {
  return roles.includes(route.meta.id)
}
