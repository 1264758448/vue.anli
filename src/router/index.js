import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import homeman from '@/pages/home'
import memberman from '@/pages/member'
import searchman from '@/pages/search'
import shopcartman from '@/pages/shopcart'
import xiangqing from '@/pages/xiangqing'
import xxy from '@/pages/xxy'
import xiangqing2 from '@/pages/xiangqing2'
import tupian from '@/pages/tupian'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',redirect: '/home'},
    { path: '/home',component: homeman},
    { path: '/member',component: memberman},
    { path: '/search',component: searchman},
    { path: '/shopcart',component: shopcartman},
    { path: '/home/xiangqing',component: xiangqing},
    { path: '/home/xxy/:id',component: xxy},
    { path: '/home/xiangqing2',component: xiangqing2},
    { path: '/home/tupian/:id',component: tupian}
  ],
  linkActiveClass :'mui-active'
})
