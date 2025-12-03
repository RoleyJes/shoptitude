<script>
import ProductCard from '../ProductCard.vue'
import WishlistHeader from './WishlistHeader.vue'

export default {
  name: 'WishListSection',

  methods: {
    deleteFromWishlist(id) {
      console.log('clicked')
      this.$store.dispatch('wishlist/deleteProduct', id)
    },
  },

  computed: {
    wishlist() {
      return this.$store.getters['wishlist/getWishlist']
    },
  },

  components: { WishlistHeader, ProductCard },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mt-32 mb-20">
    <WishlistHeader
      v-if="wishlist.length >= 1"
      title="Wishlist"
      buttonText="Move All To Bag"
      buttonClass="w-56"
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
</template>

<style lang="scss" scoped></style>
