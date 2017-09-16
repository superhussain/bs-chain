export default {
  incrementCount ({ commit }) {
    commit('INCREMENT_COUNT')
  },
  decrementCount ({ commit }) {
    commit('DECREMENT_COUNT')
  },
  resetCount ({ commit }) {
    commit('RESET_COUNT')
  }
}
