import Vue from 'vue'
import App from './App'
import router from './router'

// ----------------------------------------------
// 导入组件---评论区
import pl from './components/pl/index.vue'
// 注册全局组件
Vue.component('pl', pl)
// ----------------------------------------------

// 导入完整mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入mui的文件和拓展文件
import './lib/mui/css/mui.css'
// 这个要放在拓展文件后面
import './lib/mui/css/icons-extra.css'

// 清除css默认样式
import './lib/zore.css'

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 引入操作时间的组件
import moment from 'moment'
Vue.filter('pc', function(dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
   return moment(dateStr).format(pattern)
})

// 设置vue-resource的请求根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/api/';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
