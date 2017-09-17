export default {
  getUser (state, getters) {
    return state.id || localStorage.getItem('betUser')
  }
}
