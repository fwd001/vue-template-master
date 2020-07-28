<template>
  <a-layout id="components-layout-basic">
    <!-- 头部 -->
    <a-layout-header class="header">
      <div class="fl title">
        life is a wonderful thing
      </div>
      <div class="avatar">
        <a-dropdown :trigger="['click']">
          <a href="javascript:;">
            <a-avatar icon="user" />
            <span :style="{ marginLeft: '10px' }">小王22223</span>
          </a>
          <a-menu slot="overlay" @click="onHandleClick">
            <a-menu-item key="0">
              <a href="javascript:;">安全退出</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
    <a-layout class="components-layout-basic-content">
      <!-- 侧边栏 -->
      <MenuSider :defaultOpenKeys="defaultOpenKeys" :menuList="menuList" />
      <!-- 内容区域 -->
      <a-layout-content style="padding: 10px 20px 20px;">
        <Breadcrumb style="margin-bottom: 10px;"></Breadcrumb>
        <div
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px'
          }"
        >
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
    <pl-lazy time="1500">
      <Footer></Footer>
    </pl-lazy>
  </a-layout>
</template>

<script>
// @ is an alias to /src
import { mapMutations, mapState, mapGetters } from 'vuex'
import MenuSider from './components/MenuSider'
import Breadcrumb from '@/components/Breadcrumb'
import { menuList, jump } from '@/config/menu'
import Footer from '@/components/footer'

const defaultOpenKeys = ['sub1']
export default {
  name: 'Home',
  data() {
    return {
      defaultOpenKeys,
      menuList,
      flag: false
    }
  },
  components: {
    MenuSider,
    Breadcrumb,
    Footer
  },
  beforeCreated() {},
  created() {
    // 首页跳转
    this.flag = jump(this.roles, this.$route)
    if (!this.flag) {
      this.$router.push({ name: 'home' })
    }
  },
  beforeMount() {},
  Mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  // 计算属性
  computed: {
    ...mapState({ name: 'routerName' }),
    ...mapGetters('user', ['roles'])
  },
  methods: {
    ...mapMutations('user', ['logout']),
    // 用户下拉点击事件
    onHandleClick({ key }) {
      if (key === '0') {
        this.logout()
      }
    }
  }
}
</script>

<style lang="less">
@import '../assets/css/baseVar.less';

#components-layout-basic {
  .ant-layout-header {
    background: #001529;
  }
  .ant-layout-sider {
    background: #fff;
  }
  .components-layout-basic-content {
    min-height: calc(100vh - @headerHeight);
  }
  .title {
    color: #fff;
    margin-right: 20px;
  }
  .avatar {
    position: absolute;
    top: 0px;
    right: 50px;
    color: #fff;
    .ant-dropdown-trigger {
      display: block;
      height: @headerHeight;
      padding: 0px 10px;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
  .siderInfo {
    line-height: 2;
    font-size: 18px;
  }
}
</style>
