<template>
  <div id="app">
    <view-box>
      <x-header :left-options="{showBack: isShowBack,preventGoBack: true}"
                @on-click-back="goHome()">
        {{headerName}}
      </x-header>
      <router-view />
      <tabbar v-model="menuIndex">
        <tabbar-item v-for="item in menuList"
                     :key="item.index"
                     @click.native="menuSelect(item.index)"
                     :link="item.linkUrl">
          <img slot="icon"
               src="../static/img/tabbar/more.png">
          <span slot="label">{{item.name}}</span></tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, ViewBox, XHeader } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    ViewBox,
    XHeader
  },
  data () {
    return {
      headerName: '主页',
      isShowBack: false,
      menuIndex: 0,
      menuList: [
        { index: 0, name: '主页', imgSrc: '../static/img/tabbar/more.png', linkUrl: '/' },
        { index: 1, name: '功能', imgSrc: '../static/img/tabbar/more.png', linkUrl: '/Func' }
      ]
    }
  },
  methods: {
    menuSelect (key) {
      console.log(key)
      switch (key) {
        case 0:
          this.headerName = '主页'
          this.isShowBack = false
          break
        case 1:
          this.headerName = '功能'
          this.isShowBack = true
          break
      }
    },
    goHome () {
      this.headerName = '主页'
      this.$router.push('/')
      this.menuIndex = 0
      this.isShowBack = false
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
