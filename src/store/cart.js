import toast from 'vue3-hot-toast'

export const cartStore = {
  namespaced: true,
  state() {
    return {
      cart: [],
      itemSubTotal: null,
      cartSubTotal: null,
      cartTotal: null,
    }
  },

  getters: {
    getCart(state) {
      return state.cart
    },

    getCartItemById: (state) => (id) => {
      return state.cart.find((p) => p.id === id) || null
    },

    getItemSubtotal: (state) => (productId) => {
      const item = state.cart.find((item) => item.id === productId)
      return item ? item.price * item.quantity : 0
    },

    getCartSubTotal(state) {
      return state.cart.reduce((acc, curItem) => acc + curItem.price * curItem.quantity, 0)
    },
  },

  mutations: {
    addToCart(state, product) {
      state.cart.push({ ...product, quantity: 1 })
    },

    deleteFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId)
    },

    increaseQuantity(state, productId) {
      const item = state.cart.find((item) => item.id === productId)
      if (item) item.quantity++
    },

    decreaseQuantity(state, productId) {
      const item = state.cart.find((item) => item.id === productId)
      if (item) item.quantity--
    },

    clearCart(state) {
      state.cart = []
    },
  },

  actions: {
    addToCart({ getters, commit }, product) {
      const existingItem = getters.getCartItemById(product.id)
      if (existingItem) {
        commit('increaseQuantity', product.id)
      } else {
        commit('addToCart', product)
      }
      toast.success('Item added to cart')
    },

    addMultipleToCart({ getters, commit }, products) {
      products.forEach((product) => {
        const existingItem = getters.getCartItemById(product.id)
        if (existingItem) {
          commit('increaseQuantity', product.id)
        } else {
          commit('addToCart', product)
        }
      })

      toast.success(
        products.length === 1 ? 'Item added to cart' : `${products.length} items added to cart`,
      )
    },

    clearCart({ commit }) {
      commit('clearCart')
    },

    deleteFromCart({ commit }, productId) {
      commit('deleteFromCart', productId)
      toast.success('Item removed from cart')
    },

    increaseQuantity({ commit }, productId) {
      commit('increaseQuantity', productId)
    },

    decreaseQuantity({ getters, commit }, productId) {
      const item = getters.getCartItemById(productId)

      if (!item) return

      if (item?.quantity > 1) {
        commit('decreaseQuantity', productId)
      } else {
        commit('deleteFromCart', productId)
        toast.success('Item removed from cart')
      }
    },
  },
}
