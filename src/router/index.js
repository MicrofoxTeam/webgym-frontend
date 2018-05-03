import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Trainings from '@/components/Trainings'
import Create from '@/components/Create'
import Account from '@/components/Account'

import m from './middleware.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/trainings',
      name: 'Trainings',
      beforeEnter: m.auth,
      component: Trainings
    },
    {
      path: '/create',
      name: 'Create',
      beforeEnter: m.auth,
      component: Create
    },
    {
      path: '/account',
      name: 'Account',
      beforeEnter: m.auth,
      component: Account
    }
  ]
})
