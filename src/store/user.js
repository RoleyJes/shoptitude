export const userStore = {
  namespaced: true,

  state() {
    return {
      mockedUser: null,
      loggedInUser: null,
    }
  },

  getters: {
    getMockedUser(state) {
      return state.mockedUser
    },
    getloggedInUser(state) {
      return state.loggedInUser
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
  },
}
