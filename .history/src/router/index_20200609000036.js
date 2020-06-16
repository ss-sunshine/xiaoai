import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adminlogin',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin'),
    meta:{
      title:'登录'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//vue路由点击第二次的时候出错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//路由守卫
let whitePath = ['/admin']

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
  let user = JSON.parse(localStorage.getItem('user'))
  if (whitePath.includes(to.path)) {
    next()
  } else {
    user ? next() : next('/admin')
  }
})

export default router
