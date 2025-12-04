import { createStore } from 'vuex'
import { userStore } from './user'
import { productsStore } from './products'
import { wishlistStore } from './wishlist'
import { cartStore } from './cart'

export const store = createStore({
  modules: {
    user: userStore,
    products: productsStore,
    wishlist: wishlistStore,
    cart: cartStore,
  },
})
