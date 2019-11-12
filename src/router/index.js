import Vue from 'vue'
import Router from 'vue-router'

const Dashboard = () => import('@/views/Dashboard')
const Login = () => import('@/views/Login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard'
      }
    },
    {
      path: '/login',
      name: 'Lee',
      component: Login
    }
  ]
})
