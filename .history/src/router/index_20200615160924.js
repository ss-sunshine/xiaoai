import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/home',
      redirect:'/'
    },
  {
    path:'/',
    name:'Layout',
    component:Layout,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
        meta:{
          title:'首页'
        }
      },
      {
        path: '/published',
        name: 'Published',
        component: () => import('../views/published/Published'),
        meta:{
          title:'已发布'
        }
      },
      {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('../views/statistics/Statistics'),
        meta:{
          title:'统计'
        }
      },
      {
        path: '/article',
        name: 'Article',
        component: () => import('../views/article/Article'),
        meta:{
          title:'发表文章'
        }
      },
      {
        path: '/look',
        name: 'Look',
        component: () => import('../views/article/Look.vue'),
        meta:{
          title:'查看'
        }
      },
      {
        path: '/label',
        name: 'Label',
        component: () => import('../views/label/Label'),
        meta:{
          title:'标签页'
        }
      },
      {
        path: '/excel',
        name: 'Excel',
        component: () => import('../views/excel/Excel'),
        meta:{
          title:'导出excel'
        }
      },
      {
        path: '/upload',
        name: 'Upload',
        component: () => import('../views/upload/Upload'),
        meta:{
          title:'图片上传'
        }
      },
      {
        path: '/dropOut',
        name: 'DropOut',
        component: () => import('../views/dropOut/DropOut'),
        meta:{
          title:'退出系统'
        }
      },
    ]
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
  let user = sessionStorage.getItem('user')
  if (whitePath.includes(to.path)) {
    next()
  } else {
    user ? next() : next('/admin')
  }
})

export default router
