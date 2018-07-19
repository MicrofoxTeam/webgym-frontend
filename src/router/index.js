import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Programs from '@/components/Programs'
import Create from '@/components/programs/Create'
import Program from '@/components/programs/Program'
import Day from '@/components/programs/create/day'
import Account from '@/components/Account'
import FeedBack from '@/components/account/FeedBack'
import Messages from '@/components/account/Messages'

import m from './middleware.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/programs/create',
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
      path: '/programs/',
      name: 'Programs',
      beforeEnter: m.auth,
      component: Programs
    },
    {
      path: '/programs/:name',
      name: 'Program',
      beforeEnter: m.auth,
      component: Program
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
