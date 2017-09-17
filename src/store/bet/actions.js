export default {
  setBetValue ({ commit }, value) {
    commit('SET_BET_VALUE', value)
  },
  setText ({ commit }, text) {
    commit('SET_TEXT', text)
  },
  setBetId ({ commit }, id) {
    commit('SET_BET_ID', id)
  },
  setBetAnswer ({ commit }, answer) {
    commit('SET_BET_ANSWER', answer)
  },
  setBetResult ({ commit }, result) {
    commit('SET_BET_RESULT', result)
  }
}
