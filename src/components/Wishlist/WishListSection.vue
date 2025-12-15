<script>
import { Toaster } from 'vue3-hot-toast'
import ProductCard from '../ProductCard.vue'
import WishlistHeader from './WishlistHeader.vue'

export default {
  name: 'WishListSection',

  methods: {
    deleteFromWishlist(id) {
      this.$store.dispatch('wishlist/deleteProduct', id)
    },
    handleAddToCart(product) {
      this.$store.dispatch('cart/addToCart', product)
      this.$store.dispatch('wishlist/deleteProduct', product.id)
    },
    handleAddAllItemsInWishlistToCart() {
      this.$store.dispatch('cart/addMultipleToCart', this.wishlist)
      this.$store.dispatch('wishlist/clearWishlist')
    },
  },

  computed: {
    wishlist() {
      return this.$store.getters['wishlist/getWishlist']
    },
  },

  components: { WishlistHeader, ProductCard, Toaster },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mt-32 mb-20">
    <WishlistHeader
      v-if="wishlist.length >= 1"
      title="Wishlist"
      buttonText="Move All To Cart"
      buttonClass="w-56"
      @click="handleAddAllItemsInWishlistToCart"
    />

    <p v-if="wishlist.length < 1" class="flex flex-col gap-3 text-center text-xl">
      <span class="font-medium">Your wishlist is waiting…</span>
      <span>Save products you’re eyeing so you can come back to them anytime.</span>
    </p>

    <section class="grid grid-cols-4 gap-7.5">
      <ProductCard
        v-for="product in wishlist"
        :key="product.id"
        :product="product"
        :showWishlistIcon="false"
        :showEyeIcon="false"
        :showOtherIcon="true"
        :showRating="false"
        :wishlistView="true"
        @otherIconClicked="deleteFromWishlist(product.id)"
        @addToCart="handleAddToCart(product)"
      >
        <template #otherIcon>
          <img
            src="@/assets/trashIcon.png"
            alt="Trash icon button to delete product from wishlist; appears on a wishlist product card"
            class="w-4"
          />
        </template>
      </ProductCard>
    </section>
  </section>
  <Toaster />
</template>

<style lang="scss" scoped></style>
