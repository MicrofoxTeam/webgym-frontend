import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Trainings from '@/components/Trainings'
import Create from '@/components/Create'

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
      name: 'trainings',
      component: Trainings
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    }
  ]
})
