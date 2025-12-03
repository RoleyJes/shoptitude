<script>
import JustForYou from '@/components/Wishlist/JustForYou.vue'
import WishListSection from '@/components/Wishlist/WishListSection.vue'

export default {
  name: 'WishList',

  components: { JustForYou, WishListSection },
}
</script>

<template>
  <WishListSection />
  <JustForYou />
</template>

<style lang="scss" scoped></style>
