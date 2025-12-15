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
    // addToCart(state, product) {
    //   const existingItem = state.cart.find((item) => item.id === product.id)
    //   if (existingItem) {
    //     existingItem.quantity++
    //     toast.success('Item added to cart')
    //   } else {
    //     state.cart.push({ ...product, quantity: 1 })
    //     toast.success('Item added to cart')
    //   }
    // },
    addToCart(state, product) {
      state.cart.push({ ...product, quantity: 1 })
      toast.success('Item added to cart')
    },

    deleteFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId)
      toast.success('Item removed from cart')
    },

    increaseQuantity(state, productId) {
      const item = state.cart.find((item) => item.id === productId)
      if (item) item.quantity++
    },

    decreaseQuantity(state, productId) {
      const item = state.cart.find((item) => item.id === productId)
      if (item) {
        item.quantity--
        if (item.quantity <= 0) {
          state.cart = state.cart.filter((i) => i.id !== productId)
          toast.success('Item removed from cart')
        }
      }
    },
  },

  actions: {
    addToCart({ state, commit }, product) {
      const existingItem = state.cart.find((item) => item.id === product.id)
      if (existingItem) {
        commit('increaseQuantity', product.id)
        toast.success('Item added to cart')
      } else {
        commit('addToCart', product)
      }
    },

    addMultipleToCart({ dispatch }, products) {
      products.forEach((product) => {
        dispatch('addToCart', product)
      })
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
