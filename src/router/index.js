import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Record from '@/components/Record'
import BetValue from '@/components/BetValue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/record',
      name: 'Record',
      component: Record
    },
    {
      path: '/bet-value/:bet_id',
      name: 'BetValue',
      component: BetValue
    }
  ]
})
