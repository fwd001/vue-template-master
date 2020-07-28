// eslint-disable-next-line
import { BasicLayout } from '@/layout'
const baseBreadcrumb = [{ title: '首页', path: '#/' }]
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    name: 'layout',
    component: BasicLayout,
    redirect: 'home',
    children: [
      {
        path: 'home', // home
        name: 'home',
        meta: {
          id: 1,
          breadcrumb: [
            {
              title: '首页',
              path: -1
            }
          ]
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/home')
      },
      {
        path: 'page1', // 页面1
        name: 'page1',
        meta: {
          id: 1,
          breadcrumb: [
            ...baseBreadcrumb,
            {
              title: '页面1',
              path: -1
            }
          ]
        },
        component: () =>
          import(/* webpackChunkName: "page1" */ '../views/page1')
      },
      {
        path: 'page1/add', // 页面1添加
        name: 'page1/add',
        meta: {
          id: 2,
          breadcrumb: [
            ...baseBreadcrumb,
            {
              title: '页面1',
              path: '#/page1'
            },
            {
              title: '新增',
              path: -1
            }
          ]
        },
        component: () =>
          import(
            /* webpackChunkName: "page1Add" */ '../views/page1/component/page1Add'
          )
      },
      {
        path: 'page2', // 页面2
        name: 'page2',
        meta: {
          id: 3,
          breadcrumb: [
            ...baseBreadcrumb,
            {
              title: '页面2',
              path: -1
            }
          ]
        },
        component: () =>
          import(/* webpackChunkName: "page2" */ '../views/page2')
      },
      {
        path: 'page2/add', // 页面2添加
        name: 'page2/add',
        meta: {
          id: 4,
          breadcrumb: [
            ...baseBreadcrumb,
            {
              title: '页面2',
              path: '#/page2'
            },
            {
              title: '新增',
              path: -1
            }
          ]
        },
        component: () =>
          import(
            /* webpackChunkName: "page2Add" */ '../views/page2/component/page2Add'
          )
      },
      {
        path: 'page2/detail', // 页面2查看
        name: 'page2/detail',
        meta: {
          id: 5,
          breadcrumb: [
            ...baseBreadcrumb,
            {
              title: '页面2',
              path: '#/page2'
            },
            {
              title: '查看',
              path: -1
            }
          ]
        },
        component: () =>
          import(
            /* webpackChunkName: "page2Detail" */ '../views/page2/component/page2Detail'
          )
      },
      {
        path: 'page3', // 页面3
        name: 'page3',
        meta: {
          id: 6,
          breadcrumb: [
            ...baseBreadcrumb,
            {
              title: '2级页面',
              path: -1
            },
            {
              title: '页面3',
              path: -1
            }
          ]
        },
        component: () =>
          import(/* webpackChunkName: "page1" */ '../views/page3')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import(/* webpackChunkName: "regist" */ '../views/regist')
  },
  {
    path: '/404', // 404
    name: '404',
    component: () =>
      import(/* webpackChunkName: "page404" */ '../views/notFound')
  },
  { path: '*', redirect: '/404' }
]
