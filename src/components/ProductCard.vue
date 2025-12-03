<script>
import StarProductReviewIcon from '@/assets/iconComponents/StarProductReviewIcon.vue'
import IconInRoundWhiteBg from './IconInRoundWhiteBg.vue'
import heartIcon from '@/assets/wishHeartIcon.png'
import eyeIcon from '@/assets/eyeIcon.png'

export default {
  name: 'ProductCard',
  data() {
    return {
      heartIcon,
      eyeIcon,
    }
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
    calculatedDiscount: {
      type: String,
      required: false,
    },
    showWishlistIcon: {
      type: Boolean,
      default: true,
    },
    showEyeIcon: {
      type: Boolean,
      default: true,
    },
    showOtherIcon: {
      type: Boolean,
      default: false,
    },
    showRating: {
      type: Boolean,
      default: true,
    },
    wishlistView: {
      type: Boolean,
      default: false,
    },
  },

  components: { StarProductReviewIcon, IconInRoundWhiteBg },
}
</script>
<template>
  <article class="min-w-67.5">
    <!-- Images -->
    <div class="bg-gray group relative flex h-62.5 items-center justify-center rounded p-12.5">
      <img :src="product.image" alt="product on sale" class="size-full object-contain" />

      <!-- Discount/banner?? -->
      <slot name="banner"></slot>

      <!-- Wish and Detail and others... -->
      <div class="absolute top-3 right-3 flex flex-col gap-2">
        <IconInRoundWhiteBg
          v-if="showWishlistIcon"
          @click="$emit('addToWishlist')"
          :image="heartIcon"
          alt="Heart shaped wishlist icon button overlaid at the top-right of a product image, indicating add or remove from favorites; appears on a discounted product card; neutral inviting tone"
        />
        <IconInRoundWhiteBg
          v-if="showEyeIcon"
          :image="eyeIcon"
          alt="Eye icon button to view product details; appears on a discounted product card"
        />
        <IconInRoundWhiteBg
          v-if="showOtherIcon"
          @click="$emit('otherIconClicked')"
          :defaultImage="false"
        >
          <slot name="otherIcon"></slot>
        </IconInRoundWhiteBg>
      </div>

      <!-- Add to cart button -->
      <button
        :class="[
          'bg-primary absolute bottom-0 left-0 flex w-full cursor-pointer items-center justify-center gap-2 rounded-b py-2 text-center font-medium text-white transition-all duration-300',
          wishlistView ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
        ]"
      >
        <img
          src="@/assets/cartIconWhite.png"
          alt="Shopping cart icon button to add product to cart; appears on a product card"
        />
        <span>Add To Cart</span>
      </button>
    </div>

    <!-- Details -->
    <div class="mt-4 scroll-py-2">
      <p class="font-medium">{{ product.title }}</p>
      <p class="flex gap-3 font-medium">
        <span v-if="calculatedDiscount" class="text-red">{{ calculatedDiscount }}</span>
        <span :class="[calculatedDiscount ? 'text-primary/50 line-through' : 'text-red']"
          >${{ product.price }}</span
        >
      </p>
      <div v-if="showRating" class="flex items-center gap-2">
        <div class="flex gap-1">
          <component :is="'StarProductReviewIcon'" class="text-yellow"></component>
        </div>
        <p class="text-primary/50 text-sm font-semibold">({{ product.rating.count }})</p>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
