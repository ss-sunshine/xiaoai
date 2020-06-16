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
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin')
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
