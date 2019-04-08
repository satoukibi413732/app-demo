<template>
  <div id="app">
    <div v-transfer-dom>
      <loading v-model="$store.state.loading"></loading>
    </div>
    <drawer :show.sync="drawerShow"
            show-mode="push"
            width="200px;"
            :drawer-style="{'background-color':'#35495e', width: '200px'}">
      <div slot="drawer">
        <DrawerList @drawerClose="switchDrawer()"></DrawerList>
      </div>
      <!-- main content -->
      <view-box ref="viewBox">
        <x-header>
          <span>主页头部标题</span>
          <x-icon slot="overwrite-left"
                  type="navicon"
                  size="35"
                  style="fill:#fff;position:relative;top:-8px;left:-3px;"
                  @click.native="switchDrawer()"></x-icon>
        </x-header>
        <transition>
          <router-view class="router-view"></router-view>
        </transition>
        <tabbar>
          <tabbar-item link="/"
                       selected>
            <span slot="label">主页</span>
          </tabbar-item>
          <tabbar-item link="/">
            <span slot="label">主页</span>
          </tabbar-item>
        </tabbar>
      </view-box>
    </drawer>
  </div>
</template>

<script>
import { Drawer, XHeader, ViewBox, TransferDom, Loading, Tabbar, TabbarItem } from 'vux'
import DrawerList from '@/components/DrawerList'
export default {
  directives: {
    TransferDom
  },
  components: {
    Drawer,
    XHeader,
    ViewBox,
    DrawerList,
    TransferDom,
    Loading,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      drawerShow: false
    }
  },
  methods: {
    switchDrawer () {
      this.drawerShow = !this.drawerShow
      console.log('左侧菜单打开状态' + this.drawerShow)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height: 100%;
}
.router-view {
  width: 100%;
  top: 46px;
}
</style>
