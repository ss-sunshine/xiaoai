import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Admin'),
    meta:{
      title:'登录注册'
    }
  },
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
  let ruleForm = JSON.parse(sessionStorage.getItem('ruleForm'))
  if (whitePath.includes(to.path)) {
    next()
  } else {
    ruleForm ? next() : next('/admin')
  }
})

export default router
