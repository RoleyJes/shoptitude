<script>
import ProductCard from '../ProductCard.vue'
import WishlistHeader from './WishlistHeader.vue'

export default {
  name: 'JustForYou',

  computed: {
    slicedProducts() {
      return this.$store.getters['products/getProducts'].slice(7, 11)
    },
  },

  props: {
    title: {
      type: String,
      default: 'Just For You',
      required: false,
    },
  },

  components: { WishlistHeader, ProductCard },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mt-32 mb-20">
    <WishlistHeader :redBorder="true" :title="title" buttonText="See All" buttonClass="w-37.5" />
    <section class="grid grid-cols-4 gap-7.5">
      <ProductCard
        v-for="product in slicedProducts"
        :key="product.id"
        :product="product"
        :showWishlistIcon="false"
        :showEyeIcon="true"
        :showRating="true"
        :wishlistView="true"
        @addToCart="this.$store.dispatch('cart/addToCart', product)"
      >
      </ProductCard>
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
