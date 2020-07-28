<template>
  <div>
    页面3
    <button @click="handleDownload">
      下载
    </button>
    <div class="tinymce-editor">
      <tinymce v-model.lazy="content" :height="300" />
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import { download } from '@/api/page2'

export default {
  components: {
    Tinymce
  },
  data() {
    return {
      content: ''
    }
  },
  watch: {
    content(val, old) {
      this.$nextTick(() => {
        window.Prism.highlightAll()
      })
    }
  },
  destroyed() {
    console.log('页面关闭')
  },
  created() {
    console.log(process.env.VUE_APP_TITLE)
    console.log(process.env.VUE_APP_ENV)
  },
  methods: {
    // 点击事件
    handleDownload(id) {
      fetch('/api/v1/itAssetsBudget/exportTemplate', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ contractId: id })
      }).then(res => {
        // 请求成功
        res
          .blob()
          .then(blob => {
            // 从response的headers中获取fileName, 后端response.setHeader("Content-disposition", "attachment; fileName=xxxx.bin") 设置的文件名;
            const url = window.URL.createObjectURL(blob)
            const headerName = res.headers
              .get('Content-Disposition')
              .split('filename=')[1]
            const fileName = decodeURI(headerName)
              .replace(/%3A/g, '：')
              .replace('+', ' ')
            // 创建下载的链接
            const downloadElement = document.createElement('a')
            downloadElement.style.display = 'none'
            downloadElement.href = url
            downloadElement.download = fileName
            document.body.appendChild(downloadElement)
            downloadElement.click()
            // 下载完成移除元素,释放掉blob对象
            document.body.removeChild(downloadElement)
            window.URL.revokeObjectURL(url)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    download() {
      download({}, p => {
        console.log(p)
      })
        .then(res => {
          console.log({ res })
          const blob = new Blob([res.data])
          const fileName = 'test.xlsx'
          if ('download' in document.createElement('a')) {
            // 不是IE浏览器
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.style.display = 'none'
            link.target = '_blank'
            link.href = url
            link.setAttribute('download', fileName)
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link) // 下载完成移除元素
            window.URL.revokeObjectURL(url) // 释放掉blob对象
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.tinymce-editor {
  margin-bottom: 20px;
  padding-top: 20px;
}
</style>
