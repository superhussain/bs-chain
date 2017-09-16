import mockPatients from './mockPatients'

export default {
  loadMockPatients ({ commit }) {
    console.log('Loading Patients.....')

    setTimeout(() => {
      commit('LOAD_MOCK_PATIENTS', mockPatients)
      console.log('Finished Fetching Patients.....')
    }, 100)
  },
  editPatient ({ commit }, patient) {
    commit('EDIT_PATIENT', patient)
  }
}
