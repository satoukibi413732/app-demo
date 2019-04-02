import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Func from '@/components/Func'
import Battery from '@/components/Func/Battery'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/Func',
    name: 'Func',
    component: Func
  }, {
    path: '/Func/Battery',
    name: 'Battery',
    component: Battery
  }]
})
