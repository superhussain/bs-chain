import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Record from '@/components/Record'
import BetValue from '@/components/BetValue'
import BetInvite from '@/components/BetInvite'
import Bet from '@/components/Bet'
import Timer from '@/components/Timer'
import Complete from '@/components/Complete'

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
    },
    {
      path: '/bet-invite/:bet_id',
      name: 'BetInvite',
      component: BetInvite
    },
    {
      path: '/bet/:bet_id',
      name: 'Bet',
      component: Bet
    },
    {
      path: '/timer/:bet_id',
      name: 'Timer',
      component: Timer
    },
    {
      path: '/complete/:bet_id',
      name: 'Complete',
      component: Complete
    }
  ]
})
