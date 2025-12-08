<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import CartBillSummary from '@/components/Cart/CartBillSummary.vue'
import FormField from '@/components/FormField.vue'
import RadioGroup from '@/components/RadioGroup.vue'
import CustomButton from '@/components/CustomButton.vue'
import { formatCurrency } from '@/utils/formatCurrency'
import { mapGetters } from 'vuex'
import bkash from '@/assets/checkout/bkash.webp'
import visa from '@/assets/checkout/visa.webp'
import masterCard from '@/assets/checkout/masterCard.webp'
import image33 from '@/assets/checkout/image33.webp'

export default {
  name: 'CheckOut',

  data() {
    return {
      breadcrumbs: [
        {
          path: '/account',
          label: 'My Account',
        },
        {
          path: '/product-detail',
          label: 'Product',
        },
        {
          path: '/cart',
          label: 'View Cart',
        },
        {
          label: 'CheckOut',
        },
      ],
      paymentChoice: 'cash',
      paymentOptions: [
        { label: 'Bank', value: 'bank', image: [bkash, visa, masterCard, image33] },
        { label: 'Cash on Delivery', value: 'cash' },
      ],
    }
  },

  methods: {
    formatCurrency,
  },

  computed: {
    ...mapGetters('cart', ['getCart', 'getCartSubTotal']),
  },

  components: { Breadcrumbs, FormField, CartBillSummary, RadioGroup, CustomButton },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mt-20 mb-35">
    <!-- Breadcrumbs -->
    <Breadcrumbs :breadcrumbs="breadcrumbs" />

    <h2 class="font-inter mt-20 mb-12 text-4xl font-medium">Billing Details</h2>

    <form class="grid grid-cols-2 gap-43">
      <!-- Billing details -->
      <section class="space-y-8">
        <FormField :required="true" label="First Name" id="firstName" inputType="text" />
        <FormField label="Company Name" id="companyName" inputType="text" />
        <FormField :required="true" label="Street Address" id="streetAddress" inputType="text" />
        <FormField label="Apartment, floor, etc. (optional)" id="appartment" inputType="text" />
        <FormField :required="true" label="Town/City" id="town/city" inputType="text" />
        <FormField :required="true" label="Phone Number" id="phoneNumber" inputType="text" />
        <FormField :required="true" label="Email Address" id="email" inputType="email" />
        <div class="flex items-center gap-4">
          <input
            type="checkbox"
            id="saveAddressInfo"
            class="accent-red size-6 cursor-pointer rounded"
          />
          <label for="saveAddressInfo" class="cursor-pointer"
            >Save this information for faster check-out next time</label
          >
        </div>
      </section>

      <!-- Bills summary -->
      <section class="mt-8">
        <div class="w-full max-w-105.5 space-y-8">
          <p v-if="getCart.length < 1" class="text-center text-lg">No item in cart</p>

          <article v-else>
            <div
              v-for="product in getCart"
              :key="product.id"
              class="mb-8 grid grid-cols-[3.375rem_1fr] items-center gap-5 last-of-type:mb-0"
            >
              <!-- image -->
              <div class="h-13.5 w-13.5">
                <img :src="product.image" :alt="product.title" class="size-full object-contain" />
              </div>

              <!-- Texts -->
              <div class="flex items-center justify-between gap-8">
                <p>{{ product.title }}</p>
                <p>{{ formatCurrency({ amount: product.price }) }}</p>
              </div>
            </div>
          </article>

          <!-- Cart bill summary -->
          <CartBillSummary
            :subtotalValue="formatCurrency({ amount: getCartSubTotal })"
            :totalValue="formatCurrency({ amount: getCartSubTotal })"
          />

          <!-- Radio group -->
          <div class="flex w-full flex-col gap-8">
            <RadioGroup :options="paymentOptions" v-model="paymentChoice" />
          </div>

          <!-- Button -->
          <CustomButton type="submit" buttonText="Place Order" :bgRed="true" class="mt-10 w-full" />
        </div>
      </section>
    </form>
  </section>
</template>

<style lang="scss" scoped></style>
