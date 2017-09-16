import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Bye from '@/components/Bye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bye',
      name: 'Bye',
      component: Bye
    }
  ]
})
