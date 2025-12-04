<script>
import SectionHeaders from '../SectionHeaders.vue'
import SkeletonLoader from '../SkeletonLoader.vue'
import CustomButton from '../CustomButton.vue'
import ProductCard from '../ProductCard.vue'
import { calcDiscount } from '@/utils/calcDiscount'
import { mapGetters } from 'vuex'
import FetchError from '../FetchError.vue'
import { Toaster } from 'vue3-hot-toast'

export default {
  name: 'FlashSales',

  methods: {
    calcDiscount,
    addToWishlist(product) {
      this.$store.dispatch('wishlist/updateWishlist', product)
    },
    addToCart(product) {
      this.$store.dispatch('cart/addToCart', product)
    },
  },

  created() {
    this.$store.dispatch('products/fetchProducts')
  },

  // computed: {

  //   products() {
  //     return this.$store.getters['products/getProducts']
  //   },
  //   loading() {
  //     return this.$store.getters['products/getLoading']
  //   },
  //   fetchError() {
  //     return this.$store.getters['products/getError']
  //   },
  // },

  computed: {
    ...mapGetters('products', ['getProducts', 'getLoading', 'getError']),
    slicedProducts() {
      return this.getProducts.slice(0, 10)
    },
  },
  // computed: {
  //   ...mapGetters('products', {
  //     products: 'getProducts',
  //     loading: 'getLoading',
  //     fetchError: 'getError',
  //   }),
  // },

  components: { SectionHeaders, SkeletonLoader, CustomButton, ProductCard, FetchError, Toaster },
}
</script>

<template>
  <section class="mb-20">
    <!-- Heading -->
    <section class="max-w-project_container mx-auto mb-10">
      <SectionHeaders subHeader="Today's" header="Flash Sales">
        <div class="flex items-center gap-4.5">
          <!-- Days -->
          <div class="space-y-1">
            <p class="text-xs font-medium">Days</p>
            <p class="font-inter text-[32px] leading-[30px] font-bold">03</p>
          </div>
          <div class="flex flex-col gap-3">
            <span class="bg-red size-1 rounded-full"></span>
            <span class="bg-red size-1 rounded-full"></span>
          </div>
          <!-- Hours -->
          <div class="space-y-1">
            <p class="text-xs font-medium">Hours</p>
            <p class="font-inter text-[32px] leading-[30px] font-bold">23</p>
          </div>
          <div class="flex flex-col gap-3">
            <span class="bg-red size-1 rounded-full"></span>
            <span class="bg-red size-1 rounded-full"></span>
          </div>
          <!-- Minutes -->
          <div class="space-y-1">
            <p class="text-xs font-medium">Minutes</p>
            <p class="font-inter text-[32px] leading-[30px] font-bold">19</p>
          </div>
          <div class="flex flex-col gap-3">
            <span class="bg-red size-1 rounded-full"></span>
            <span class="bg-red size-1 rounded-full"></span>
          </div>
          <!-- Seconds -->
          <div class="space-y-1">
            <p class="text-xs font-medium">Seconds</p>
            <p class="font-inter text-[32px] leading-[30px] font-bold">56</p>
          </div>
        </div>
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

    <!-- Product card -->
    <section
      v-else
      class="max-w-project_container scrollbar-hide mx-auto flex gap-7.5 overflow-x-auto"
    >
      <ProductCard
        v-for="product in slicedProducts"
        :product="product"
        :key="product.id"
        :calculatedDiscount="calcDiscount(product.price)"
        @addToWishlist="addToWishlist(product)"
        @addToCart="addToCart(product)"
      >
        <template #banner>
          <p class="bg-red text-offWhite absolute top-3 left-3 rounded px-3 py-1 text-xs">-40%</p>
        </template>
      </ProductCard>
    </section>

    <!-- Button -->
    <div
      class="border-primary/30 max-w-project_container mx-auto flex justify-center border-b py-15"
    >
      <CustomButton buttonText="View All Products" :bgRed="true" class="mx-auto w-58.5" />
    </div>
  </section>

  <Toaster
    :toast-options="{
      success: {
        duration: 5000,
      },
    }"
  />
</template>

<style lang="scss" scoped></style>
