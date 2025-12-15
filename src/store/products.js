export const productsStore = {
  namespaced: true,

  state() {
    return {
      loading: false,
      error: false,
      products: [],
    }
  },

  getters: {
    getProducts(state) {
      return state.products
    },

    getSingleProduct(state) {
      return function (productId) {
        const product = state.products.find((item) => item.id === productId)
        return product ? product : null
      }
    },

    getLoading(state) {
      return state.loading
    },

    getError(state) {
      return state.error
    },
  },

  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },

    setError(state, payload) {
      state.error = payload
    },

    setProducts(state, payload) {
      state.products = payload
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      try {
        commit('setLoading', true)

        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new Error('Failed to fetch products')

        const data = await res.json()
        commit('setProducts', data)
      } catch (err) {
        commit('setError', err.message || 'Something went wrong fetching products')
      } finally {
        commit('setLoading', false)
      }
    },
  },
}
