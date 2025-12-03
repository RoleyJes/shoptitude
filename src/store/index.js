import { createStore } from 'vuex'
import { userStore } from './user'
import { productsStore } from './products'
import { wishlistStore } from './wishlist'

export const store = createStore({
  modules: {
    user: userStore,
    products: productsStore,
    wishlist: wishlistStore,
  },
})
