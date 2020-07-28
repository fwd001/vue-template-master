# vue-temp 1.1.2

## 更新日志
- 修订版本号：会不定期增加内容 日常 bugfix 更新

2020-04-03
- 更新内容：
 + 🔥🔥🔥 新增富文本组件, 代码高亮显示

2020-04-02
- 更新内容：
 + 🔥🔥🔥 增加代码格式强校验 使用规范[StandardJS](https://cloud.tencent.com/developer/section/1489665)，可配合vscode Prettier插件格式化使用，vscode 设置可参考[setting.md](./setting.md)
 + 🔥🔥🔥 新增动态侧边栏菜单配置,目前最多支持3级菜单
 + 🔥🔥🔥 使用最新vuecli4.x 脚手架生成 自定义配置可参考[VueCLI](https://cli.vuejs.org/zh/config/)
 + 🔥🔥🔥 新增vuex-persist插件支持vuex持续化数据，(可配置支持模块，默认user模块)
 + 🔥 所有依赖包升到最新版本[Ant Design of Vue 1.5.0](https://www.antdv.com/docs/vue/introduce-cn/)
 + 🔥 antd组件改为按需加载(需要使用新组件需要手动引入)
 + 🔥 组件大部分使用语义标签
 + 🔥 修改面包屑组件渲染逻辑
 + 🔥 新增文件下载模版和相关代码
 + 🔥 新增延迟渲染组件
 + 🔥 简化修改部分样式代码
 + 🔥 新增对ie 10、11兼容


### 使用说明

1. 项目格式使用[StandardJS](https://standardjs.com/rules-zhcn.html)[腾讯云Standard JS文档](https://cloud.tencent.com/developer/section/1489665)代码规范，配合 vscode Prettier 插件 将 [setting.md](./setting.md) 复制到编辑器 setting 文件使用
2. 项目分为 3 个环境 dev test prd 默认开发启动 dev 默认打包 prd 环境
3. 项目有基础登录逻辑增删改查模版代码，和基础配置，其余可根据个人项目业务自定义模版和配置
4. `yarn run lint -- --fix` 按照StandardJS格式 格式化整个src代码（部分代码无法格式比如 ‘==’ 、等）

- master 维护人: fwd001
- [github地址](https://github.com/fwd001/vue-template](https://github.com/fwd001/vue-template)
)