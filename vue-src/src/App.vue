<template>
  <div>
    <x-header>
      <span>overwrite-left</span>
      <x-icon slot="overwrite-left"
              type="navicon"
              size="35"
              style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>
    <drawer width="200px;"
            :show.sync="drawerVisibility">
      <div slot="drawer">
        <!-- 菜单内容 -->
      </div>
      <!-- rourer-view 作为默认插槽内容 -->
      <div>
        <router-view></router-view>
      </div>
    </drawer>
  </div>
</template>

<script>
import { Drawer, XHeader } from 'vux'

export default {
  components: {
    Drawer,
    XHeader
  },
  data () {
    return {
      drawerVisibility: false
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100vh;
}
</style>
