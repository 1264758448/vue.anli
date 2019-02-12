import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import homeman from '@/pages/home'
import memberman from '@/pages/member'
import searchman from '@/pages/search'
import shopcartman from '@/pages/shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',redirect: '/home'},
    { path: '/home',component: homeman},
    { path: '/member',component: memberman},
    { path: '/search',component: searchman},
    { path: '/shopcart',component: shopcartman},
  ],
  linkActiveClass :'mui-active'
})
