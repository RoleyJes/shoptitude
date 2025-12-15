import toast from 'vue3-hot-toast'

export const wishlistStore = {
  namespaced: true,

  state() {
    return {
      wishlist: [],
    }
  },

  getters: {
    getWishlist(state) {
      return state.wishlist
    },
    getWishlistItem: (state) => (id) => {
      return state.wishlist.find((item) => item.id === id)
    },
  },

  mutations: {
    setWishlist(state, product) {
      state.wishlist.push(product)
    },

    deleteProduct(state, productId) {
      state.wishlist = state.wishlist.filter((product) => product.id !== productId)
    },

    clearWishlist(state) {
      state.wishlist = []
    },
  },

  actions: {
    updateWishlist({ commit, getters }, product) {
      const exists = getters.getWishlistItem(product.id)

      if (!exists) {
        commit('setWishlist', product)
      } else {
        commit('deleteProduct', product.id)
      }
      toast.success(exists ? 'Item removed from wishlist' : 'Item added to wishlist')
    },
    deleteProduct({ commit }, productId) {
      commit('deleteProduct', productId)
    },

    clearWishlist({ commit }) {
      commit('clearWishlist')
    },
  },
}
