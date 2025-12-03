<script>
import CustomButton from '../CustomButton.vue'
import SectionHeaders from '../SectionHeaders.vue'
import SkeletonLoader from '../SkeletonLoader.vue'
import ProductCard from '../ProductCard.vue'
import FetchError from '../FetchError.vue'
import { mapGetters } from 'vuex'
import { calcDiscount } from '@/utils/calcDiscount'

export default {
  name: 'BestSelling',

  created() {
    this.$store.dispatch('products/fetchProducts')
  },

  methods: {
    calcDiscount,
    addToWishlist(product) {
      this.$store.dispatch('wishlist/updateWishlist', product)
    },
  },

  computed: {
    ...mapGetters('products', ['getProducts', 'getLoading', 'getError']),
    slicedProducts() {
      return this.getProducts.slice(14, 18)
    },
  },

  components: { SectionHeaders, SkeletonLoader, CustomButton, ProductCard, FetchError },
}
</script>
<template>
  <section class="mb-35">
    <!-- Heading -->
    <section class="max-w-project_container mx-auto mb-15">
      <SectionHeaders subHeader="This Month" header="Best Selling Products">
        <template #headerButton>
          <CustomButton buttonText="View All" :bgRed="true" class="w-40" />
        </template>
      </SectionHeaders>
    </section>

    <!-- Products -->
    <div v-if="getLoading" class="max-w-project_container mx-auto flex w-full justify-between">
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </div>

    <FetchError v-else-if="getError" :errMsg="getError" />

    <!-- Product Card -->
    <section v-else class="max-w-project_container mx-auto flex gap-7.5">
      <ProductCard
        v-for="product in slicedProducts"
        :product="product"
        :key="product.id"
        :calculatedDiscount="calcDiscount(product.price, 30)"
        @addToWishlist="addToWishlist(product)"
      />
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
