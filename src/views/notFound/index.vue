<template>
  <a-result
    status="404"
    title="404"
    subTitle="抱歉，您访问的页面不存在。"
  >
    <template v-slot:extra>
      <a-button type="primary" @click="$router.replace('/')">返回首页</a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
