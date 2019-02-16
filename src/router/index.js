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
import shangpin1 from '@/pages/shangpin1'
import shangpin2 from '@/pages/shangpin2'
import shangpin2and1 from '@/pages/shangpin2and1'
import shangpin2adn2 from '@/pages/shangpin2adn2'
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
    { path: '/home/tupian/:id',component: tupian},
    { path: '/home/shangpin1',component: shangpin1},
    { path: '/home/shangpin2/:id',component: shangpin2},
    { path: '/home/shangpin2and1/:id',component: shangpin2and1},
    { path: '/home/shangpin2adn2/:id',component: shangpin2adn2},
  ],
  linkActiveClass :'mui-active'
})
