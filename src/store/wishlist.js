export const wishlistStore = {
  namespaced: true,

  state() {
    return {
      wishlist: [
        // {
        //   category: "men's clothing",
        //   description:
        //     'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        //   id: 1,
        //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
        //   price: 109.95,
        //   rating: { rate: 3.9, count: 120 },
        //   title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        // },
      ],
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
    deleteProduct(state, productId) {
      state.wishlist = state.wishlist.filter((product) => product.id !== productId)
    },
  },

  actions: {
    updateWishlist({ commit }, payload) {
      commit('setWishlist', payload)
    },
    deleteProduct({ commit }, productId) {
      commit('deleteProduct', productId)
    },
  },
}
