<script>
import { mapGetters } from 'vuex'
import CustomButton from '../CustomButton.vue'
import ProductCard from '../ProductCard.vue'
import SectionHeaders from '../SectionHeaders.vue'
import SkeletonLoader from '../SkeletonLoader.vue'
import FetchError from '../FetchError.vue'

export default {
  name: 'ExploreProducts',

  created() {
    this.$store.dispatch('products/fetchProducts')
  },

  methods: {
    addToWishlist(product) {
      this.$store.dispatch('wishlist/updateWishlist', product)
    },
  },

  computed: {
    ...mapGetters('products', ['getProducts', 'getLoading', 'getError']),
    slicedProducts() {
      return this.getProducts.slice(5, 13)
    },
  },

  components: { SectionHeaders, CustomButton, ProductCard, SkeletonLoader, FetchError },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mb-35">
    <!-- Heading -->
    <section class="mb-15">
      <SectionHeaders subHeader="Our Products" header="Explore Our Products" />
    </section>

    <!-- Products -->
    <div v-if="getLoading" class="max-w-project_container mx-auto flex w-full justify-between">
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </div>

    <FetchError v-else-if="getError" :errMsg="getError" />

    <!-- Product card -->
    <section v-else class="grid grid-cols-4 gap-7.5">
      <ProductCard
        v-for="product in slicedProducts"
        :product="product"
        :key="product.id"
        @addToWishlist="addToWishlist(product)"
        @addToCart="this.$store.dispatch('cart/addToCart', product)"
      />
    </section>

    <!-- Button -->
    <div class="max-w-project_container mx-auto mt-15 flex justify-center">
      <CustomButton buttonText="View All Products" :bgRed="true" class="mx-auto w-58.5" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
