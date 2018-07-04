import Vue from 'vue'
import Router from 'vue-router'
import App from '../views/index'

Vue.use(Router)

const appRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about')
  }
]

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login')
    },
    {
      path: '',
      component: App,
      beforeEnter: (to, from, next) => {
        next('/login')
      },
      children: appRoutes
    }
  ]
})
