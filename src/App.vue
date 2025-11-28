<script>
import MobileBlocker from './components/MobileBlocker.vue'
import { isMobileDevice } from './utils/isMobile'

export default {
  name: 'App',

  components: { MobileBlocker },

  data() {
    return {
      mobile: false,
    }
  },

  created() {
    this.mobile = isMobileDevice()

    // Optional: re-check on resize
    window.addEventListener('resize', () => {
      this.mobile = isMobileDevice()
    })
  },
}
</script>

<template>
  <MobileBlocker v-if="mobile" />
  <RouterView v-else />
</template>

<style scoped></style>
