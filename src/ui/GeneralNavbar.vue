<script>
import searchIcon from '@/assets/searchIcon.png'
import wishHeartIcon from '@/assets/wishHeartIcon.png'
import cartIcon from '@/assets/cartIcon.png'
import UserIcon from '@/assets/iconComponents/UserIcon.vue'
import LogoutIcon from '@/assets/iconComponents/LogoutIcon.vue'
import StarIcon from '@/assets/iconComponents/StarIcon.vue'
import OrderIcon from '@/assets/iconComponents/OrderIcon.vue'
import CancelIcon from '@/assets/iconComponents/CancelIcon.vue'
// import { mapGetters } from 'vuex'
export default {
  name: 'GeneralNavbar',

  data() {
    return {
      searchIcon,
      wishHeartIcon,
      cartIcon,
      accountDropdownDisplay: false,
      routes: [
        { path: '/', label: 'Home' },
        { path: '/contact', label: 'Contact' },
        { path: '/about', label: 'About' },
        { path: '/auth/signup', label: 'Sign Up' },
      ],
      accountDropdown: [
        { label: 'Manage My Account', icon: 'UserIcon' },
        { label: 'My Order', icon: 'OrderIcon' },
        { label: 'My Cancellations', icon: 'CancelIcon' },
        { label: 'My Reviews', icon: 'StarIcon' },
        { label: 'Logout', icon: 'LogoutIcon', buttonClick: true },
      ],
    }
  },

  methods: {
    isActiveRoute(route) {
      return this.$route.path === route
    },

    handleLogout() {
      localStorage.removeItem('user')
      this.$store.dispatch('user/logoutUser')
      this.$router.push('/auth/login')
    },
  },

  computed: {
    // ...mapGetters('cart', ['getCart']),
    loggedIn() {
      const user =
        this.$store.getters['user/getloggedInUser'] || JSON.parse(localStorage.getItem('user'))

      return user
    },
    wishlistCount() {
      return this.$store.getters['wishlist/getWishlist'].length
    },
    cartCount() {
      return this.$store.getters['cart/getCart'].length
    },
  },

  components: { UserIcon, LogoutIcon, StarIcon, OrderIcon, CancelIcon },
}
</script>
<template>
  <header class="border-b-primary/10 border-b bg-white p-3 pt-10 pb-4 text-center">
    <nav class="max-w-project_container mx-auto flex w-full items-center justify-between">
      <RouterLink to="/" class="font-inter text-2xl font-bold tracking-wide">Shoptitude</RouterLink>

      <!-- Nav links -->
      <ul class="flex items-center gap-12">
        <li v-for="(route, i) in routes" :key="i">
          <RouterLink
            :to="route.path"
            :class="[
              'border-b transition-all duration-300',
              isActiveRoute(route.path) ? 'border-b-primary/50' : 'border-b-transparent',
            ]"
            >{{ route.label }}</RouterLink
          >
        </li>
      </ul>

      <div class="flex items-center gap-6">
        <!-- Search field -->
        <div class="relative w-61">
          <input
            type="text"
            class="bg-gray focus:outline-primary/50 w-full rounded py-2.5 ps-5 pe-12 outline-0 placeholder:text-xs focus:outline"
            placeholder="What are you looking for?"
          />
          <img
            :src="searchIcon"
            alt="search icon"
            class="absolute top-1/2 right-3 size-4 -translate-y-1/2"
          />
        </div>

        <!-- Authenticated users view only -->
        <div v-if="loggedIn" class="relative flex items-center gap-6">
          <RouterLink to="/wishlist" class="relative">
            <img :src="wishHeartIcon" alt="a heart icon" class="cursor-pointer" />
            <span
              v-if="wishlistCount > 0"
              class="bg-red text-offWhite absolute -top-2 -right-1.5 flex size-4.5 items-center justify-center rounded-full text-sm"
              >{{ wishlistCount }}</span
            >
          </RouterLink>
          <RouterLink to="/cart" class="relative">
            <img
              :src="cartIcon"
              alt="a cart icon"
              :class="['cursor-pointer transition-all duration-300', cartCount ? 'size-6' : '']"
            />
            <span
              v-if="cartCount > 0"
              class="bg-red text-offWhite absolute -top-2 -right-1.5 flex size-4.5 items-center justify-center rounded-full text-sm"
              >{{ cartCount }}</span
            >
          </RouterLink>
          <component
            :is="'UserIcon'"
            class="text-primary cursor-pointer"
            @click="accountDropdownDisplay = !accountDropdownDisplay"
          ></component>

          <!-- Account dropdown -->
          <div
            v-if="accountDropdownDisplay"
            class="bg-primary/40 text-offWhite absolute top-8 right-0 z-50 w-56 space-y-3 rounded ps-5 pe-3 pt-4.5 pb-2.5 backdrop-blur-sm"
          >
            <component
              :is="item.buttonClick ? 'button' : 'p'"
              v-on="item.buttonClick ? { click: handleLogout } : {}"
              v-for="(item, i) in accountDropdown"
              :key="i"
              :class="['flex items-center gap-4 text-sm', item.buttonClick ? 'cursor-pointer' : '']"
            >
              <component :is="item.icon"></component>
              <span>{{ item.label }}</span>
            </component>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
