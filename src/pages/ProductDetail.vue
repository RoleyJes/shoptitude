<script>
import DeliveryIcon from '@/assets/home/DeliveryIcon.vue'
import StarProductReviewIcon from '@/assets/iconComponents/StarProductReviewIcon.vue'
import WishHeartIcon from '@/assets/iconComponents/WishHeartIcon.vue'
import ReturnIcon from '@/assets/productDetail/ReturnIcon.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import CustomButton from '@/components/CustomButton.vue'
import SideImages from '@/components/ProductDetails/SideImages.vue'
import JustForYou from '@/components/Wishlist/JustForYou.vue'
import { formatCurrency } from '@/utils/formatCurrency'
import { Toaster } from 'vue3-hot-toast'
import { mapGetters } from 'vuex'

export default {
  name: 'ProductDetail',

  data() {
    return {
      productId: null,
      deliveryData: [
        {
          icon: 'DeliveryIcon',
          header: 'Free Delivery',
          text: 'Enter your postal code for Delivery Availability',
        },
        {
          icon: 'ReturnIcon',
          header: 'Return Delivery',
          text: 'Free 30 Days Delivery Returns.',
        },
      ],
    }
  },

  created() {
    this.productId = this.$route.params.id
  },

  computed: {
    ...mapGetters('products', ['getSingleProduct']),

    product() {
      return this.getSingleProduct(+this.productId)
    },

    cartItem() {
      return this.$store.getters['cart/getCartItemById'](+this.productId)
    },

    wishlistItem() {
      return this.$store.getters['wishlist/getWishlistItem'](+this.productId)
    },

    quantity() {
      return this.cartItem?.quantity || 0
    },

    breadcrumbs() {
      return [
        {
          path: '/',
          label: 'Home',
        },
        {
          label: this.product?.title || 'Product not found',
        },
      ]
    },

    formattedPrice() {
      return formatCurrency({ amount: this.product.price })
    },
  },

  watch: {
    '$route.params.id': {
      immediate: true,
      handler(newId) {
        this.productId = +newId
      },
    },
  },

  methods: {
    handleBuyNow(product) {
      this.$store.dispatch('cart/addToCart', product)
      this.$router.push('/checkout')
    },

    toggleWishlist(product) {
      this.$store.dispatch('wishlist/updateWishlist', product)
    },
  },

  components: {
    Breadcrumbs,
    SideImages,
    StarProductReviewIcon,
    CustomButton,
    WishHeartIcon,
    JustForYou,
    Toaster,
    ReturnIcon,
    DeliveryIcon,
  },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mt-20 mb-35">
    <!-- Breadcrumbs -->
    <Breadcrumbs :breadcrumbs="breadcrumbs" />

    <!-- Product -->
    <section class="mt-20 mb-35 grid grid-cols-[170px_1fr_399px]">
      <!-- Side images -->
      <div class="flex flex-col gap-4">
        <SideImages :product="product" />
        <SideImages :product="product" imageContainerClass="rotate-z-310" />
        <SideImages :product="product" imageContainerClass="-rotate-z-280" />
        <SideImages :product="product" imageContainerClass="rotate-z-45" />
      </div>

      <!-- Main image -->
      <div
        class="bg-gray ms-7.5 me-17.5 flex h-150 items-center justify-center overflow-hidden rounded"
      >
        <div class="h-78.5 w-111.5">
          <img :src="product?.image" :alt="product?.description" class="size-full object-contain" />
        </div>
      </div>

      <!-- Details -->
      <article>
        <div class="space-y-4">
          <p class="font-inter text-2xl font-semibold">{{ product?.title }}</p>
          <div class="flex items-center gap-4">
            <!-- Review -->
            <div class="flex items-center gap-2">
              <component :is="'StarProductReviewIcon'" class="text-yellow"></component>
              <p class="text-primary/50 text-sm">({{ product?.rating?.count }} Reviews)</p>
            </div>
            <!-- In stock -->
            <p class="border-l-primary/50 text-green border-l ps-4 text-sm">In Stock</p>
          </div>
          <p class="font-inter text-2xl">{{ formattedPrice }}</p>
        </div>

        <!-- Description -->
        <p class="border-b-primary/50 my-6 border-b pb-6">{{ product?.description }}</p>

        <!-- Quantity, Buy, Wish -->
        <div class="flex items-center">
          <!-- Quantity -->
          <div class="border-primary/50 flex items-center rounded border">
            <button
              class="hover:bg-red flex h-11 w-10 cursor-pointer items-center justify-center text-3xl transition-all duration-300 hover:text-white"
              @click="$store.dispatch('cart/decreaseQuantity', product?.id)"
            >
              -
            </button>
            <p
              class="border-x-primary/50 flex h-11 w-20 items-center justify-center border-x text-xl font-medium"
            >
              {{ quantity }}
            </p>
            <button
              class="hover:bg-red flex h-11 w-10 cursor-pointer items-center justify-center text-3xl transition-all duration-300 hover:text-white"
              @click="$store.dispatch('cart/addToCart', product)"
            >
              +
            </button>
          </div>

          <!-- Buy -->
          <CustomButton
            @click="handleBuyNow(product)"
            buttonText="Buy Now"
            :bgRed="true"
            class="ms-4 me-4.5 w-41 py-2.5!"
          />

          <!-- Wish -->
          <div
            :class="[
              'border-primary/50 hover:bg-red hover:border-red flex size-10 cursor-pointer items-center justify-center rounded border transition-all duration-300 hover:text-white',
              wishlistItem ? 'bg-red border-red hover:bg-red/50 text-white' : '',
            ]"
            @click="toggleWishlist(product)"
          >
            <component :is="'WishHeartIcon'" class=""></component>
          </div>
        </div>

        <!-- Delivery -->
        <div class="border-primary/50 mt-10 rounded border py-7">
          <div
            v-for="(item, i) in deliveryData"
            :key="i"
            class="not-last:border-b-primary/50 flex items-center gap-4 px-4.5 not-last:border-b not-last:pb-4 last:pt-4"
          >
            <component :is="item.icon" class="text-primary"></component>
            <div class="font-medium">
              <p class="mb-2">{{ item.header }}</p>
              <p class="text-xs">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </article>
    </section>

    <JustForYou title="Related Items" />
  </section>
  <Toaster />
</template>

<style lang="scss" scoped></style>
