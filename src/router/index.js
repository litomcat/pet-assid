import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

// 注册路由
import Login from  '@/views/Login'
import Register from  '@/views/Register'

Vue.use(VueRouter)

const routes = [
  //设定路由信息
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  
]

const router = new VueRouter({
  routes
})

export default router
