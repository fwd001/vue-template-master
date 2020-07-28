<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
      <a v-if="item.path !== -1" :href="item.path">{{ item.title }}</a>
      <span v-else>{{ item.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  data() {
    return {
      breadcrumb: this.$route.meta.breadcrumb // 路由数组
    }
  },
  computed: {
  },
  watch: {
    $route(val, old) {
      this.breadcrumb = val.meta.breadcrumb
    }
  }
}
</script>

<style lang="less"></style>
