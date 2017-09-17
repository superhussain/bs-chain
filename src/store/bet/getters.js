export default {
  getBetValue (state, getters) {
    return state.value || parseFloat(localStorage.getItem('betValue'))
  },
  getText (state, getters) {
    return state.text || localStorage.getItem('betText')
  },
  getBetId (state, getters) {
    return state.id || localStorage.getItem('betId')
  },
  getBetAnswer (state, getters) {
    return state.answer || localStorage.getItem('betAnswer')
  },
  getBetResult (state, getters) {
    return state.result
  }
}
