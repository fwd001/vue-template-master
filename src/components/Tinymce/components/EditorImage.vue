<template>
  <div class="upload-container">
    <!-- <a-button :style="{background:color,borderColor:color}" icon="el-icon-upload" size="mini" type="primary" @click=" dialogVisible=true">
      upload
    </a-button> -->
    <a-button size="small" @click="dialogVisible = true" type="primary">
      <a-icon type="cloud-upload" />upload</a-button
    >
    <a-modal title="Basic Modal" v-model="dialogVisible" @ok="handleOk">
      <a-upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        :defaultFileList="fileList"
        class="upload-list-inline"
      >
        <a-button> <a-icon type="upload" /> upload </a-button>
      </a-upload>
    </a-modal>
    <!-- <el-dialog :visible.sync="dialogVisible">
      <el-upload
        :multiple="true"
        :file-list="fileList"
        :show-file-list="true"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        class="editor-slide-upload"
        action="https://httpbin.org/post"
        list-type="picture-card"
      >
        <el-button size="small" type="primary">
          Click upload
        </el-button>
      </el-upload>
      <el-button @click="dialogVisible = false">
        Cancel
      </el-button>
      <el-button type="primary" @click="handleSubmit">
        Confirm
      </el-button>
    </el-dialog> -->
  </div>
</template>

<script>
// import { getToken } from 'api/qiniu'

export default {
  name: 'EditorSlideUpload',
  props: {
    color: {
      type: String,
      default: '#1890ff'
    }
  },
  data() {
    return {
      dialogVisible: false,
      listObj: {},
      fileList: []
    }
  },
  methods: {
    checkAllSuccess() {
      return Object.keys(this.listObj).every(
        item => this.listObj[item].hasSuccess
      )
    },
    handleOk() {},
    handleSubmit() {
      const arr = Object.keys(this.listObj).map(v => this.listObj[v])
      if (!this.checkAllSuccess()) {
        this.$message(
          'Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!'
        )
        return
      }
      this.$emit('successCBK', arr)
      this.listObj = {}
      this.fileList = []
      this.dialogVisible = false
    },
    handleSuccess(response, file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          this.listObj[objKeyArr[i]].url = response.files.file
          this.listObj[objKeyArr[i]].hasSuccess = true
          return
        }
      }
    },
    handleRemove(file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]]
          return
        }
      }
    },
    beforeUpload(file) {
      const _self = this
      const _URL = window.URL || window.webkitURL
      const fileName = file.uid
      this.listObj[fileName] = {}
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = _URL.createObjectURL(file)
        img.onload = function() {
          _self.listObj[fileName] = {
            hasSuccess: false,
            uid: file.uid,
            width: this.width,
            height: this.height
          }
        }
        resolve(true)
      })
    }
  }
}
</script>

<style lang="less" scoped>
// .editor-slide-upload {
//   margin-bottom: 20px;
//   /deep/ .el-upload--picture-card {
//     width: 100%;
//   }
// }
.upload-list-inline > .ant-upload-list-item {
  float: left;
  width: 200px;
  margin-right: 8px;
}
</style>
