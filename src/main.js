import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

// 引入flexible.js -> 设置跟标签字体大小（移动端适配）
import 'amfe-flexible'
import { NavBar } from 'vant'

Vue.use(NavBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
