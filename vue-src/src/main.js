// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 引入store
import '../src/assets/styles/reset.css' // 引用公共样式

// vux组件全局加载
import {
  ViewBox,
  Cell,
  CellBox,
  Group,
  XInput,
  XButton
} from 'vux'

Vue.component('view-box', ViewBox)
Vue.component('cell', Cell)
Vue.component('cell-box', CellBox)
Vue.component('group', Group)
Vue.component('x-input', XInput)
Vue.component('x-button', XButton)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

// document.addEventListener('deviceready', function () {
//   new Vue({
//     el: '#app',
//     router,
//     components: {
//       App
//     },
//     template: '<App/>'
//   })
// },
// false)
