import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Programs from '@/components/Programs'
import Create from '@/components/Create'
import Day from '@/components/create/day'
import Account from '@/components/Account'
import FeedBack from '@/components/account/FeedBack'
import Messages from '@/components/account/Messages'

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
      path: '/programs',
      name: 'Programs',
      beforeEnter: m.auth,
      component: Programs
    },
    {
      path: '/trainings',
      name: 'Programs',
      beforeEnter: m.auth,
      component: Programs
    },
    {
      path: '/create',
      name: 'Create',
      beforeEnter: m.auth,
      component: Create,
      children: [
        {
          path: ':day',
          name: 'day',
          beforeEnter: m.auth,
          component: Day
        }
      ]
    },
    {
      path: '/account',
      name: 'Account',
      beforeEnter: m.auth,
      component: Account,
      children: [
        {
          path: 'messages',
          name: 'Messages',
          beforeEnter: m.auth,
          component: Messages
        },
        {
          path: 'feedback',
          name: 'FeedBack',
          beforeEnter: m.auth,
          component: FeedBack
        }
      ]
    }
  ]
})
