<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import CartRow from '@/components/Cart/CartRow.vue'
import CustomButton from '@/components/CustomButton.vue'
import { formatCurrency } from '@/utils/formatCurrency'
import { Toaster } from 'vue3-hot-toast'
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',

  data() {
    return {
      breadcrumbs: [
        {
          path: '/',
          label: 'Home',
        },
        {
          label: 'Cart',
        },
      ],
    }
  },

  methods: {
    formatCurrency,
    deleteFromCart(id) {
      this.$store.dispatch('cart/deleteFromCart', id)
    },
    decreaseQuantity({ quantity, id }) {
      if (quantity <= 1) {
        this.$store.dispatch('cart/deleteFromCart', id)
      } else {
        this.$store.dispatch('cart/decreaseQuantity', id)
      }
    },
  },

  computed: {
    ...mapGetters('cart', ['getCart', 'getItemSubtotal', 'getCartSubTotal']),
  },

  components: { Breadcrumbs, CartRow, Toaster, CustomButton },
}
</script>

<template>
  <section class="max-w-project_container mx-auto mt-20 mb-35">
    <!-- Breadcrumbs -->
    <Breadcrumbs :breadcrumbs="breadcrumbs" />

    <section class="mt-20">
      <template v-if="getCart.length > 0">
        <!-- Header -->
        <div
          class="shadow-category mb-10 grid grid-cols-4 items-center gap-15 rounded bg-white px-10 py-6"
        >
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Item Subtotal</p>
        </div>

        <!-- Cart items -->
        <div class="flex flex-col gap-10">
          <CartRow
            v-for="product in getCart"
            :key="product.id"
            v-bind="{ ...product }"
            :price="formatCurrency({ amount: product.price })"
            :itemSubTotal="formatCurrency({ amount: getItemSubtotal(product.id) })"
            @deleteFromCart="deleteFromCart(product.id)"
            @increaseQuantity="$store.dispatch('cart/increaseQuantity', product.id)"
            @decreaseQuantity="decreaseQuantity(product)"
          />

          <div class="flex justify-between">
            <div>
              <CustomButton
                path="/"
                :transparent="true"
                buttonText="Return To Shop"
                class="w-54.5"
              />
            </div>

            <!-- Checkout box -->
            <div class="border-primary w-117.5 rounded border-[1.5px] px-6 py-8">
              <p class="mb-6 text-xl font-medium">Cart Total</p>

              <!-- Cart summary -->
              <div class="space-y-4 divide-y">
                <div class="flex items-center justify-between pb-4">
                  <p>Subtotal:</p>
                  <p>{{ formatCurrency({ amount: getCartSubTotal }) }}</p>
                </div>
                <div class="flex items-center justify-between pb-4">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div class="flex items-center justify-between pb-4">
                  <p>Total:</p>
                  <p>{{ formatCurrency({ amount: getCartSubTotal }) }}</p>
                </div>
              </div>

              <div class="flex justify-center">
                <CustomButton :bgRed="true" buttonText="Proceed to checkout" class="w-65" />
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Empty cart -->
      <p v-else class="flex flex-col gap-3 text-center text-xl">
        <span class="font-medium">Nothing here yet!</span>
        <span>Let’s fill this cart with your next favorites.</span>
      </p>
    </section>
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
