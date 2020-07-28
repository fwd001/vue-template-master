/* eslint-disable */
const regexs = {
  numericRegex: /^[0-9]+$/,
  email: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
  fax: /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/,
  phone: /^((\+?[0-9]{1,4})|(\(\+86\)))?(13[0-9]|14[57]|15[012356789]|17[0678]|18[0-9])\d{8}$/,
  url: /[a-zA-z]+:\/\/[^\s]/,
  ip: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}|(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){5})$/,
  fBlank: /^\s+/,
  lBlank: /\s+$/
}

const backVal = field => (typeof field === 'string' ? field : field.value)

// 验证合法邮箱
export const isEmail = field => regexs.email.test(backVal(field))

// 验证合法 ip 地址
export const isIp = field => regexs.ip.test(backVal(field))

// 验证传真
export const isFax = field => regexs.fax.test(backVal(field))

// 验证座机
export const isTel = field => regexs.fax.test(backVal(field))

// 验证手机
export const isPhone = field => regexs.phone.test(backVal(field))

// 验证URL
export const isUrl = field => regexs.url.test(backVal(field))

// 前空格
export const fBlank = field => regexs.fBlank.test(backVal(field))

// 后空格
export const lBlank = field => regexs.lBlank.test(backVal(field))

// 空格校验
export const spaceValidFunction = (rule, value, callback) => {
  if (fBlank(value)) {
    callback('开头不能有空格') // 校验未通过
    return
  }
  if (lBlank(value)) {
    callback('结尾不能有空格') // 校验未通过
    return
  }

  callback() // 校验通过
}

export default {
  isEmail,
  isIp,
  isFax,
  isTel,
  isPhone,
  isUrl,
  lBlank,
  fBlank,
  spaceValidFunction
}
