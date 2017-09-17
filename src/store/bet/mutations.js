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
  },
  SET_BET_ANSWER (state, answer) {
    localStorage.setItem('betAnswer', answer)
    state.answer = answer
  },
  SET_BET_RESULT (state, result) {
    localStorage.setItem('betResult', result)
    state.result = result
  }
}
