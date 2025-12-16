import AuthLayout from '@/layouts/AuthLayout.vue'
import GeneralLayout from '@/layouts/GeneralLayout.vue'
import About from '@/pages/About.vue'
import LogIn from '@/pages/Auth/LogIn.vue'
import SignUp from '@/pages/Auth/SignUp.vue'
import Cart from '@/pages/Cart.vue'
import CheckOut from '@/pages/CheckOut.vue'
import Contact from '@/pages/Contact.vue'
import Home from '@/pages/Home.vue'
import ProductDetail from '@/pages/ProductDetail.vue'
import WishList from '@/pages/WishList.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Profile from '@/pages/Profile.vue'
import AccountLayout from '@/layouts/AccountLayout.vue'
import UserAddress from '@/pages/UserAddress.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: GeneralLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'about',
          component: About,
        },
        {
          path: 'contact',
          component: Contact,
        },
        {
          path: 'products/:id',
          name: 'product-details',
          component: ProductDetail,
        },
        {
          path: 'wishlist',
          component: WishList,
          meta: { requiresAuth: true },
        },
        {
          path: 'cart',
          component: Cart,
          meta: { requiresAuth: true },
        },
        {
          path: 'checkOut',
          component: CheckOut,
          meta: { requiresAuth: true },
        },
        {
          path: 'account',
          redirect: 'account/profile',
          component: AccountLayout,
          meta: { requiresAuth: true },
          children: [
            {
              path: 'profile',
              name: 'profile',
              component: Profile,
            },
            {
              path: 'address',
              name: 'address',
              component: UserAddress,
            },
          ],
        },

        {
          path: 'auth',
          component: AuthLayout,
          name: 'auth',
          redirect: '/auth/login',
          meta: { requiresGuests: true },
          children: [
            {
              path: 'login',
              name: 'login',
              component: LogIn,
            },
            {
              path: 'signup',
              component: SignUp,
            },
          ],
        },
      ],
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // back/forward button
    if (savedPosition) {
      return savedPosition
    }

    // default: scroll to top
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

router.beforeEach((to) => {
  const user = JSON.parse(localStorage.getItem('user'))

  const requiresGuests = to.matched.some((record) => record.meta.requiresGuests)

  if (to.meta.requiresAuth && !user) {
    return {
      name: 'login',
    }
  }

  if (requiresGuests && user) {
    return { name: 'home' }
  }
})

export default router
