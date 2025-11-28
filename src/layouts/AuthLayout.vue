<script>
import authImage from '@/assets/auth/authcart.png'
export default {
  name: 'AuthLayout',

  data() {
    return {
      authImage,
    }
  },
}
</script>
<template>
  <section class="mt-15 mb-35 flex w-full items-center gap-32">
    <div class="bg-skyBlue w-201">
      <img :src="authImage" alt="a phone resting on a cart" class="w-full" />
    </div>

    <div class="w-full max-w-92.5">
      <RouterView />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
