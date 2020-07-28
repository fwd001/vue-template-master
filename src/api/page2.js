import request, { mock } from '@/utils/request'
import down from '@/utils/download-req'

export function fetchList(data) {
  return mock({
    url: '/mock/pageList',
    method: 'post',
    data
  })
}

export function fetchArticle(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}

export function download(data, callback) {
  return down({
    url: '/itAssetsBudget/exportTemplate',
    method: 'post',
    params: data,
    responseType: 'blob',
    onDownloadProgress: function(progressEvent) {
      // 对原生进度事件的处理
      callback && callback(progressEvent)
    }
  })
}
