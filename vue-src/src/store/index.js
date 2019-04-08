import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 全局访问的state对象
const state = {
  loading: false // 加载状态
}
// 实时监听state值的变化(最新状态)
const getters = {

}
// 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象)
const mutations = {
  isLoading (state, val) {
    state.isLoading = val
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
