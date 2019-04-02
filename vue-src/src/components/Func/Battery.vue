<template>
  <div>
    {{BatteryInfo}}
  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('batterystatus', this.onBatteryStatus, false)
  },
  data () {
    return {
      BatteryInfo: ''
    }
  },
  methods: {
    onBatteryStatus (info) {
      this.BatteryInfo = 'BATTERY STATUS:  Level: ' + info.level + ' isPlugged: ' + info.isPlugged
    }
  }
}
</script>

<style scoped>
</style>
