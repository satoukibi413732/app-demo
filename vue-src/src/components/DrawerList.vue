<template>
  <div class="drawer-list-warp">
    <group title="左侧伸缩菜单"
           style="margin-top:23px;">
      <cell title="UI组件"
            is-link
            @click.native="closeDrawer()"></cell>
    </group>
  </div>
</template>

<script>
import { Cell, Group, CellBox } from 'vux'

export default {
  components: {
    Cell,
    Group,
    CellBox
  },
  data () {
    return {
    }
  },
  methods: {
    closeDrawer () {
      this.$emit('drawerClose')
    }

  }
}
</script>

<style scoped>
.drawer-list-warp {
  height: 100%;
}
</style>
