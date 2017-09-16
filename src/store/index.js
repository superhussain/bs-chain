import Vue from 'vue'
import Vuex from 'vuex'

import count from './count/index'
import sentence from './sentence/index'
import patients from './patients/index'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    count,
    sentence,
    patients
  },
  strict: DEBUG
})
