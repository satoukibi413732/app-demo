<template>
  <div>
    <group-title>4 columns</group-title>
    <grid :show-lr-borders="false">
      <grid-item :label="123"
                 v-for="i in 4"
                 :key="i">
        <img slot="icon"
             src="">
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
  }
}
</script>

<style scoped>
</style>
