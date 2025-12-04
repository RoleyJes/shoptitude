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
    getItemSubtotal: (state) => (productId) => {
      const item = state.cart.find((item) => item.id === productId)
      return item ? item.price * item.quantity : 0
    },
    getCartSubTotal(state) {
      const total = state.cart.reduce((acc, curItem) => acc + curItem.price * curItem.quantity, 0)
      return total
    },
  },

  mutations: {
    addToCart(state, product) {
      const existingItem = state.cart.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
        toast.success('Item added to cart')
      } else {
        state.cart.push({ ...product, quantity: 1 })
        toast.success('Item added to cart')
      }
    },
    deleteFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId)
      toast.success('Item removed from cart')
    },
    increaseQuantity(state, productId) {
      state.cart.find((item) => item.id === productId).quantity++
    },
    decreaseQuantity(state, productId) {
      // const existingItem = state.cart.find((item) => item.id === productId)
      // if (existingItem?.quantity <= 1) this.$store.dispatch('cart/deleteFromCart')
      state.cart.find((item) => item.id === productId).quantity--
    },
  },

  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product)
    },
    deleteFromCart({ commit }, productId) {
      commit('deleteFromCart', productId)
    },
    increaseQuantity({ commit }, productId) {
      commit('increaseQuantity', productId)
    },
    decreaseQuantity({ commit }, productId) {
      commit('decreaseQuantity', productId)
    },
  },
}
