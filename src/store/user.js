export const userStore = {
  namespaced: true,

  state() {
    return {
      mockedUser: null,
      loggedInUser: null,
      address: null,
    }
  },

  getters: {
    getMockedUser(state) {
      return state.mockedUser
    },
    getloggedInUser(state) {
      return state.loggedInUser
    },
    getAddress(state) {
      return state.address
    },
  },

  mutations: {
    updateMockedUser(state, payload) {
      state.mockedUser = payload
    },
    updateloggedInUser(state, payload) {
      state.loggedInUser = payload
    },
    logoutUser(state) {
      state.loggedInUser = null
    },
    setAddress(state, payload) {
      state.address = payload
    },
  },

  actions: {
    updateMockedUser({ commit }, user) {
      commit('updateMockedUser', user)
    },
    updateloggedInUser({ commit }, user) {
      commit('updateloggedInUser', user)
    },
    logoutUser({ commit }) {
      commit('updateloggedInUser')
    },
    updateAddress({ commit }, address) {
      commit('setAddress', address)
    },
  },
}
