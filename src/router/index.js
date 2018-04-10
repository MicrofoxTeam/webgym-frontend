import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Main from '@/components/Main'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    }
  ]
})
