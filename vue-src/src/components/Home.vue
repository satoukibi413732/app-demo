<template>
  <view-box>
    <x-header :left-options="{showBack: isShowBack}">{{headerName}}</x-header>
    <div></div>
    <tabbar>
      <tabbar-item v-for="item in menuIndex"
                   :key="item.index"
                   @click.native="menuSelect(item.index)">
        <img slot="icon"
             :src="item.imgSrc">
        <span slot="label">{{item.name}}</span></tabbar-item>
    </tabbar>
  </view-box>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell, ViewBox, XHeader } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    ViewBox,
    XHeader
  },
  data () {
    return {
      headerName: '主页',
      isShowBack: false,
      menuIndex: [
        { index: 0, name: '主页', imgSrc: '../../static/img/tabbar/more.png' },
        { index: 1, name: '功能', imgSrc: '../../static/img/tabbar/more.png' }
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
