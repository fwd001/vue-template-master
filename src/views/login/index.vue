<template>
  <div id="logon-box">
    登陆
    <router-link to="/regist">
      注册
    </router-link>
    <router-link to="/">
      主页
    </router-link>

    <a-row class="loginBox" type="flex" justify="center">
      <a-col :xs="24" :md="20" :xl="15" class="loginmBox">
        <a-col class="left" :xs="24" :md="12">
          <img src="../../assets/images/login_bg.png" alt="" />
        </a-col>
        <a-col class="right" :xs="24" :md="12">
          <h2 style="text-align: center">
            Welcome
          </h2>
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="用户"
            >
              <a-input
                v-decorator="[
                  'username',
                  {
                    rules: [
                      {
                        required: true,
                        message: '请填写用户名'
                      }
                    ]
                  }
                ]"
                placeholder="请填写用户名"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="密码"
            >
              <a-input
                v-decorator="[
                  'password',
                  {
                    rules: [
                      {
                        required: true,
                        message: '请填写密码'
                      },
                      { max: 20, message: '长度不能超过20' }
                    ]
                  }
                ]"
                type="password"
                placeholder="请填写密码"
              />
            </a-form-item>

            <a-form-item
              :label-col="formTailLayout.labelCol"
              :wrapper-col="formTailLayout.wrapperCol"
            >
              <a-button type="primary" html-type="submit" :loading="loading">
                登陆
              </a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
}
const formTailLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
}
export default {
  data() {
    return {
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this),
      loading: false
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.loading = true
          this.login(values)
            .then(res => {
              this.loading = false
              this.$router.push('/')
            })
            .catch(err => {
              this.loading = false
              console.log(err)
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#logon-box {
  height: 100vh;
}
.loginBox {
  .loginmBox {
    background-color: #fff;
    box-shadow: -2px 6px 25px -7px rgba(169, 169, 169, 0.3);
  }
  .left {
    min-height: 100%;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .right {
    // background-color: #fff;
    padding: 10px 50px;
  }
}
</style>
