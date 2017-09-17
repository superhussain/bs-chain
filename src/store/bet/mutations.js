export default {
  SET_BET_VALUE (state, value) {
    localStorage.setItem('betValue', parseFloat(value))
    state.value = parseFloat(value)
  },
  SET_TEXT (state, text) {
    localStorage.setItem('betText', text)
    state.text = text
  },
  SET_BET_ID (state, id) {
    localStorage.setItem('betId', id)
    state.id = id
  }
}
