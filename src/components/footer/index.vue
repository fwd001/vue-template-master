<template>
  <div id="footer">
    <a-row class="footerLine">
      <a-col :span="12">
        <a-row class="title">支持与服务</a-row>
        <a-row class="li">帮助文档</a-row>
        <a-row class="li">提交建议</a-row>
        <a-row class="li">联系邮箱：xxx@xxx.com.cn</a-row>
        <a-row class="li"
          >联系地址：xxxx
          (200230)</a-row
        >
        <a-row class="li"
          >版权所有 © xxx
          未经许可不得复制、转载或摘编，违者必究</a-row
        >
      </a-col>
      <a-col :span="12" style="text-align: left;">
        <a-row class="title">xxx</a-row>
        <a-row class="li">xxxx</a-row>
        <a-row class="li"
          ><img
            width="90"
            src="../../assets/images/qrcode.jpg"
            alt="qrcode"
        /></a-row>
      </a-col>
    </a-row>
    <a
      class="beianbeian"
      target="_blank"
      href="http://www.beianbeian.com/beianxinxi/d07a8dbf-90fb-4e3c-905d-443333c92b15.html"
      >粤ICP备06118290号</a
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../assets/css/baseVar.less';
#footer {
  position: relative;
  background-color: #000;
  margin: 0 auto;
  padding: 20px 20px;
  color: #fff;
  font-size: 14px;
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .li {
    line-height: 1.8;
  }
  .beianbeian {
    position: absolute;
    right: 0px;
    bottom: 0px;
  }
}
</style>
