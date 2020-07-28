import moment from 'moment'
import { authority } from '@/utils/auth'
import { fetchList } from '@/api/page2.js'
const columns = [
  {
    dataIndex: 'index',
    key: 'index',
    title: '序号',
    scopedSlots: { customRender: 'index' }
  },
  {
    title: '密钥ID',
    dataIndex: 'keyid',
    key: 'keyid'
  },
  {
    title: '密钥状态',
    dataIndex: 'status',
    key: 'status',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '密钥标签',
    key: 'tag',
    dataIndex: 'tag'
  },
  {
    title: '有效日期',
    key: 'date',
    dataIndex: 'date'
  },
  {
    title: '创建人',
    key: 'create',
    dataIndex: 'create'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  data() {
    return {
      columns,
      loading: false,
      currentPage: 1, // 从1 开始
      pageSize: 10,
      total: 1,
      list: [],
      query: {
        keyId: '',
        dateRange: []
      }
    }
  },
  components: {},
  created() {
    this.getList()
  },
  methods: {
    moment,
    authority,
    range(start, end) {
      const result = []
      for (let i = start; i < end; i++) {
        result.push(i)
      }
      return result
    },

    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day')
    },

    disabledRangeTime(_, type) {
      if (type === 'start') {
        return {
          disabledHours: () => this.range(0, 60).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56]
        }
      }
      return {
        disabledHours: () => this.range(0, 60).splice(20, 4),
        disabledMinutes: () => this.range(0, 31),
        disabledSeconds: () => [55, 56]
      }
    },
    onDateChange(dates, dateStrings) {
      console.log('From: ', dates[0], ', to: ', dates[1])
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
      this.query.dateRange = dates
    },
    // 点击查询方法
    handleQuery() {
      this.currentPage = 1
      this.getList()
      console.log(this.query)
    },
    // 分页方法
    itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return <a>上一页</a>
      } else if (type === 'next') {
        return <a>下一页</a>
      }
      return originalElement
    },
    setPageInfo(total, range, size) {
      var totalPage = parseInt(this.total) / parseInt(this.pageSize)
      return `共 ${total} 条, ${Math.ceil(totalPage)} 页`
    },
    onPageChange(current, pageSize) {
      this.currentPage = current
      this.getList(current, pageSize)
    },
    onPageSizeChange(current, pageSize) {
      this.currentPage = 1
      this.pageSize = pageSize
      this.getList(1, pageSize)
    },

    // 查看
    toDetail(record) {
      console.log(record)
      this.$router.push({
        name: 'page2/detail',
        query: { _id: record.keyid }
      })
    },
    // 切换启用禁用
    handleChangeStatus(record) {
      console.log(record)
    },

    // 获取列表数据
    getList(currentPage = this.currentPage, pageSize = this.pageSize) {
      const params = {
        page: currentPage,
        pageSize,
        ...this.query
      }
      fetchList(params).then(res => {
        console.log(res)
        this.list = res.data.list.map((v, i) => ({
          ...v,
          index: (currentPage - 1) * 10 + i + 1
        }))
        this.total = res.data.total
      })
      // this.list = list.map((v, i) => ({ ...v, index: i + 1 }))
    },

    // 加载状态
    startLoading() {
      this.loading = true
    },
    endLoading() {
      this.loading = false
    }
  }
}
