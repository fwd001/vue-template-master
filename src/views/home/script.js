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
  },
  methods: {
  }
}
