import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Training from '@/components/Training'
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
      name: 'training',
      component: Training
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    }
  ]
})
