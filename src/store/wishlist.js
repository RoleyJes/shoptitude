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
  },

  mutations: {
    setWishlist(state, product) {
      state.wishlist.push(product)
    },
    // setWishlist(state, product) {
    //   const exists = state.wishlist.some((item) => item.id === product.id)
    //   if (!exists) {
    //     state.wishlist.push(product)
    //     toast.success('Item added to wishlist')
    //   } else {

    //     toast.error('Item removed in wishlist')
    //   }
    // },
    deleteProduct(state, productId) {
      state.wishlist = state.wishlist.filter((product) => product.id !== productId)
    },
  },

  actions: {
    updateWishlist({ commit, state }, product) {
      const exists = state.wishlist.some((item) => item.id === product.id)

      if (!exists) {
        commit('setWishlist', product)
        toast.success('Item added to wishlist')
      } else {
        commit('deleteProduct', product.id)
        toast.success('Item removed in wishlist')
      }
    },
    deleteProduct({ commit }, productId) {
      commit('deleteProduct', productId)
    },
  },
}
