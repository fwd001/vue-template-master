import Vue from 'vue'
// 全局引入antd
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.less'
// 组件按需引入
import {
  Button,
  ConfigProvider,
  Layout,
  Dropdown,
  Avatar,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Input,
  Card,
  DatePicker,
  Form,
  Table,
  Divider,
  Pagination,
  Select,
  Result
} from 'ant-design-vue'

Vue.component(Button.name, Button)
Vue.component(ConfigProvider.name, ConfigProvider)
Vue.component(Layout.name, Layout)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Layout.Sider.name, Layout.Sider)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Dropdown.name, Dropdown)
Vue.component(Avatar.name, Avatar)
Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Menu.SubMenu.name, Menu.SubMenu)
Vue.component(Card.name, Card)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Form.name, Form)
Vue.component(Form.Item.name, Form.Item)
Vue.component(Input.name, Input)
Vue.component(DatePicker.name, DatePicker)
Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker)
Vue.component(Table.name, Table)
Vue.component(Divider.name, Divider)
Vue.component(Pagination.name, Pagination)
Vue.component(Select.name, Select)
Vue.component(Select.Option.name, Select.Option)
Vue.component(Result.name, Result)
