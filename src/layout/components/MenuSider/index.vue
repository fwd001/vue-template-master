<template>
  <!-- 侧边栏 -->
  <a-layout-sider>
    <a-menu
      :default-selected-keys="[name]"
      :default-open-keys="defaultOpenKeys"
      :selected-keys="[name]"
      style="width: 100%"
      mode="inline"
    >
      <template v-for="item in menuList">
        <a-menu-item
          v-if="!item.children && authority(item.code)"
          :key="item.routerName"
          :data-id="item.code"
          @click="$router.push({ name: item.routerName })"
        >
          {{ item.name }}
        </a-menu-item>

        <a-sub-menu
          v-if="item.children && authority([6])"
          :key="item.routerName"
          :data-ids="item.code"
        >
          <span slot="title">
            <!-- <a-icon type="mail" /> -->
            {{ item.name }}
          </span>
          <template v-for="a in item.children">
            <a-menu-item
              v-if="!a.children && authority(a.code)"
              :key="a.routerName"
              :data-id="a.code"
              @click="$router.push({ name: a.routerName })"
            >
              {{ a.name }}
            </a-menu-item>
            <a-sub-menu
              v-if="a.children && authority(a.code)"
              :key="a.routerName"
              :data-ids="a.code"
            >
              <span slot="title">
                <!-- <a-icon type="mail" /> -->
                {{ item.name }}
              </span>
              <template v-for="b in a.children">
                <a-menu-item
                  v-if="authority(b.code)"
                  :key="b.routerName"
                  :data-id="b.code"
                  @click="$router.push({ name: b.routerName })"
                >
                  {{ b.name }}
                </a-menu-item>
              </template>
            </a-sub-menu>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
import { authority } from '@/utils/auth'

export default {
  name: 'Sider',
  data() {
    return {
    }
  },
  props: {
    defaultOpenKeys: {
      default: []
    },
    menuList: {
      default: [],
      require: true
    }
  },
  // 计算属性
  computed: {
    ...mapState({ name: 'routerName' })
  },
  created() {},
  methods: {
    authority
  }
}
</script>

<style></style>
