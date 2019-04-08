import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const requireAuth = (to, from, next) => {
//   // 验证登录
//   if (sessionStorage.getItem('userName') === null) {
//     next({
//       path: '/login',
//       query: {
//         redirect: to.fullPath
//       }
//     })
//   } else {
//     next()
//   }
// }

let router = new Router({
  routes: [{
    path: '/login',
    component: resolve => require(['@/page/login'], resolve)
  }, {
    path: '/',
    component: resolve => require(['@/page/index'], resolve),
    // beforeEnter: requireAuth,
    children: [{
      path: '/Home',
      component: resolve => require(['@/components/Home'], resolve)
      // beforeEnter: requireAuth,
    }]
  }]
})

export default router
