import moment from 'moment'
// import { homeService } from '@/api'
import { lBlank, fBlank } from '@/utils/validate'

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      date: '',
      moment
    }
  },
  components: {
  },
  props: {},
  created() {},
  methods: {
    // 表单提交
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.showConfirm(values)
        }
      })
    },
    // 提交确认框
    showConfirm(val) {
      this.$confirm({
        title: '提示',
        content: '您将创建新的非对称秘钥，此操作无法撤回！',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          // FIXME : 表单请求
          // homeService
          //     .add(val)
          //     .then(res => {
          this.$router.go(-1)
          //     })
          //     .catch(err => {
          //         let msg = err.responseMessage || '生成失败'
          //         this.$message.error(msg)
          //     })
        },
        class: 'test'
      })
    },
    // 下拉框改变事件
    handleDateChange(val) {
      console.log(val)
    },
    // label字段校验函数
    lableValidFunction(rule, value, callback) {
      if (value) {
        // eslint-disable-next-line
        if (fBlank(value)) return callback('开头不能有空格')
        // eslint-disable-next-line
        if (lBlank(value)) return callback('结尾不能有空格')
      }
      return callback()
    }
  }
}
