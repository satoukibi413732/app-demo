<template>
  <div>
    <group-title>手机API展示</group-title>
    <grid :show-lr-borders="false">
      <grid-item :label="item.label"
                 v-for="item in funcList"
                 :key="item.label"
                 :link="item.linkUrl">
        <img slot="icon"
             src="../../static/img/func.png">
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'
export default {
  components: {
    Grid,
    GridItem,
    GroupTitle
  },
  data () {
    return {
      funcList: [{
        label: '电池状态',
        linkUrl: '/Func/Battery'
      }]
    }
  }
}
</script>

<style scoped>
</style>
