import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import welcome from '@/views/welcome'
import NotFound from '@/views/404'
import local from '@/utils/local'
Vue.use(VueRouter)
const router = new VueRouter({
  // 配置对象
  // 路由规则选项 routes  若干规则
  routes: [{
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home,
    children: [{
      path: '/',
      component: welcome
    }]
  },
  {
    path: '*',
    component: NotFound
  }
  ]
})
// 导航守卫  router.beforeEach()  在路由跳转前执行
router.beforeEach((to, from, next) => {
  const user = local.getUser()
  if (user && user.token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
