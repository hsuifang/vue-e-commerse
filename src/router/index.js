import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import TheLogin from '@/components/pages/TheLogin'
import Products from '@/components/pages/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'products',
          component: Products,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/login',
      name: 'TheLogin',
      component: TheLogin
    }
  ]
})
