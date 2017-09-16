export default {
  LOAD_MOCK_PATIENTS (state, patients) {
    state.splice(0, state.length)
    state.push(...patients)
  },
  EDIT_PATIENT (state, patient) {
    const old = state.find((t) => (t.id === patient.id))
    const index = state.indexOf(old)

    if (index > -1) {
      state.splice(index, 1)
      state.push(patient)
    }
  }
}
