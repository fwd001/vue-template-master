import { mapMutations } from 'vuex'
import { mockTest } from '@/api/page1'
export default {
  data() {
    return {}
  },
  components: {},
  destroyed() {
    console.log('页面关闭')
  },
  created() {
    console.log(process.env.VUE_APP_TITLE)
    console.log(process.env.VUE_APP_ENV)
    mockTest({ name: '12321' }).then(res => {
      console.log(res)
    })
  },
  methods: {
    ...mapMutations('user', ['deletePermission'])
  }
}
