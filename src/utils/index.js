// mock响应函数 成功
export const resSuc = params => {
  return { code: '000000', msg: '成功', data: params }
}
// mock响应失败
export const resErr = params => {
  return { code: '000001', msg: '成功', data: params }
}
