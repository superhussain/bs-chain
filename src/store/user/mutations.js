export default {
  SET_USER (state, user) {
    localStorage.setItem('betUser', user)
    state.id = user
  }
}
