import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Trainings from '@/components/Trainings'
import Create from '@/components/Create'
import Account from '@/components/Account'

// import m from './middleware.js'

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
      component: Trainings
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
