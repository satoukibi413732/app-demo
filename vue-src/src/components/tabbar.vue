<template>
  <tabbar>
    <tabbar-item v-for="item in menuList"
                 :key="item.index"
                 @click.native="menuSelect(item.index)"
                 :link="item.linkUrl"
                 :selected="">
      <img slot="icon"
           :src="item.imgSrc">
      <span slot="label">{{item.label}}</span></tabbar-item>
  </tabbar>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
