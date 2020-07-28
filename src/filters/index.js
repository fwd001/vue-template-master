import moment from 'moment'

// 处理文字过长的问题
const ellipsisText = (val, num) => {
  if (!val) return ''
  const len = val.toString().length
  return len > num ? val.substring(0, num) + '...' : val
}

// 格式化留言的日期
const isToday = val => {
  if (!val) return ''
  const today = moment().format('YYYY MM DD')
  const yesterday = moment()
    .subtract(1, 'd')
    .format('YYYY MM DD')
  const temp = moment(val).format('YYYY MM DD')
  if (today === temp) {
    return '今天 ' + moment(val).format('H:mm')
  } else if (yesterday === temp) {
    return '昨天 ' + moment(val).format('H:mm')
  } else {
    return moment(val).format('YYYY-MM-DD H:mm')
  }
}

// 返回当前时间（格式：2018-01-09）
const currDate = () => moment().format('YYYY-MM-DD HH:mm:ss')

// ...
export {
  isToday,
  ellipsisText,
  currDate
  // ...
}
