import request, { mock } from '@/utils/request'

export function login(data) {
  // mock 数据
  return mock({
    url: '/mock/uesr.json',
    method: 'get',
    data
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
