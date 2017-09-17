import Vue from 'vue'
import Vuex from 'vuex'

import user from './user/index'
import bet from './bet/index'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    user,
    bet
  },
  strict: DEBUG
})
