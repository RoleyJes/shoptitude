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
        {
          label: 'Manage My Account',
          icon: 'UserIcon',
          buttonClick: true,
          handleClick: this.handleAccountRedirect,
          style: 'hover:bg-primary/20',
        },
        { label: 'My Order', icon: 'OrderIcon' },
        { label: 'My Cancellations', icon: 'CancelIcon' },
        { label: 'My Reviews', icon: 'StarIcon' },
        {
          label: 'Logout',
          icon: 'LogoutIcon',
          buttonClick: true,
          handleClick: this.handleLogout,
          style: 'hover:text-red hover:bg-red/20',
        },
      ],
    }
  },

  methods: {
    isActiveRoute(route) {
      return this.$route.path === route
    },

    handleClickOutside(e) {
      const area = this.$refs.accountArea
      const dropdownMenuArea = this.$refs.dropdownMenu

      if (
        this.accountDropdownDisplay &&
        area &&
        !area.contains(e.target) &&
        dropdownMenuArea &&
        !dropdownMenuArea.contains(e.target)
      ) {
        this.accountDropdownDisplay = false
      }
    },

    handleAccountRedirect() {
      this.$router.push('/account')
      this.accountDropdownDisplay = false
    },

    handleLogout() {
      localStorage.removeItem('user')
      this.accountDropdownDisplay = false
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
    usernameFirstLetter() {
      const user =
        this.$store.getters['user/getloggedInUser'] || JSON.parse(localStorage.getItem('user'))
      if (user && user.firstName) {
        return user.firstName.charAt(0).toUpperCase()
      }
      return ''
    },

    wishlistCount() {
      return this.$store.getters['wishlist/getWishlist'].length
    },
    cartCount() {
      return this.$store.getters['cart/getCart'].length
    },
  },

  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },

  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },

  components: { UserIcon, LogoutIcon, StarIcon, OrderIcon, CancelIcon },
}
</script>
<template>
  <header class="border-b-primary/10 border-b bg-white p-3 pt-10 pb-4 text-center">
    <nav class="max-w-project_container mx-auto flex w-full items-center justify-between">
      <RouterLink to="/" class="font-inter text-2xl font-bold tracking-wide">Shoptitude</RouterLink>

      <!-- Nav links -->
      <ul class="flex items-center justify-between gap-12">
        <template v-for="(route, i) in routes" :key="i">
          <li v-if="(loggedIn && route.path !== '/auth/signup') || !loggedIn">
            <RouterLink
              :to="route.path"
              :class="[
                'hover:border-b-primary/50 border-b transition-all duration-300',
                isActiveRoute(route.path) ? 'border-b-primary/50' : 'border-b-transparent',
              ]"
            >
              {{ route.label }}
            </RouterLink>
          </li>
        </template>
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
          <div class="relative">
            <RouterLink to="/wishlist" class="peer relative">
              <img :src="wishHeartIcon" alt="a heart icon" class="cursor-pointer" />
              <span
                v-if="wishlistCount > 0"
                class="bg-red text-offWhite absolute -top-2 -right-1.5 flex size-4.5 items-center justify-center rounded-full text-sm"
                >{{ wishlistCount }}</span
              >
            </RouterLink>
            <span
              class="bg-primary/30 translate-all absolute -bottom-8 left-1/2 z-70 -translate-x-1/2 rounded px-2 py-0.5 text-sm text-white opacity-0 duration-300 peer-hover:opacity-100"
              >Wishlist</span
            >
          </div>
          <div class="relative">
            <RouterLink to="/cart" class="peer relative">
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
            <span
              class="bg-primary/30 translate-all absolute -bottom-8 left-1/2 -translate-x-1/2 rounded px-2 py-0.5 text-sm text-white opacity-0 duration-300 peer-hover:opacity-100"
              >Cart</span
            >
          </div>
          <div
            ref="accountArea"
            @click="accountDropdownDisplay = !accountDropdownDisplay"
            class="bg-red flex size-8 cursor-pointer items-center justify-center rounded-full text-white"
          >
            <p class="font-medium">{{ usernameFirstLetter }}</p>
          </div>

          <!-- Account dropdown -->
          <div
            v-if="accountDropdownDisplay"
            ref="dropdownMenu"
            class="bg-primary/40 text-offWhite absolute top-8 right-0 z-50 w-56 rounded px-2 pt-4.5 pb-2.5 backdrop-blur-sm"
          >
            <component
              :is="item.buttonClick ? 'button' : 'p'"
              v-on="item.buttonClick ? { click: item.handleClick } : {}"
              v-for="(item, i) in accountDropdown"
              :key="i"
              :class="[
                'flex w-full items-center gap-4 rounded py-1.5 ps-3 pe-1 text-sm transition-all duration-300',
                item.buttonClick ? 'cursor-pointer' : '',
                item.style ? item.style : '',
              ]"
            >
              <component :is="item.icon" class="size-6"></component>
              <span>{{ item.label }}</span>
            </component>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
