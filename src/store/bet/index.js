import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  id: null,
  text: '',
  value: null,
  answer: null,
  result: null
}

export default {
  state,
  getters,
  actions,
  mutations
}
