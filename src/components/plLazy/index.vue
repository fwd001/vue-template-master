<template>
  <span>
    <slot v-if="initSuccess"></slot>
  </span>
</template>

<script>
export default {
  name: 'pl-lazy',
  props: {
    time: {
      required: false,
      default: 0
    }
  },
  data() {
    return {
      initSuccess: false
    }
  },
  created() {
    this.initSlot()
  },

  methods: {
    initSlot() {
      setTimeout(() => {
        this.initSuccess = true
      }, Number(this.time || 0))
    }
  }
}
</script>

<style scoped></style>
