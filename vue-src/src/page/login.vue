<template>
  <view-box>
    <div class="login-header">
      <h3>登录</h3>
    </div>
    <group class="form-group">
      <x-input title="登录名"
               v-model="userAccount.userName"></x-input>
      <x-input title="密码"
               v-model="userAccount.password"></x-input>
    </group>
    <group title="验证码"
           class="form-group">
      <x-input title="验证码">
        <img slot="right-full-height"
             src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
      </x-input>
      <!-- <x-input title="发送验证码"
               class="weui-vcode">
        <x-button slot="right"
                  type="primary"
                  mini>发送验证码</x-button>
      </x-input> -->
    </group>
    <div class="form-btn">
      <x-button type="primary"
                @click.native="login()">登录</x-button>
    </div>
  </view-box>
</template>

<script >
export default {
  data () {
    return {
      userAccount: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$router.push({ path: '/' })
      let test = this.$apiserver.getTest()
      console.log(test)
    }
  }
}
</script>

<style scoped>
.login-header {
  text-align: center;
}
.form-group {
  margin: 10% 0;
}
.form-btn {
  padding: 0 10%;
}
</style>
