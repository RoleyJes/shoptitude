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
import toast, { Toaster } from 'vue3-hot-toast'

export default {
  name: 'CheckOut',

  data() {
    const storedUser = JSON.parse(localStorage.getItem('user'))

    return {
      breadcrumbs: [
        {
          path: '/account',
          label: 'My Account',
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
      form: {
        firstName: this.$store.getters['user/getLoggedInUser']?.firstName || storedUser?.firstName,
        companyName: '',
        streetAddress: '',
        appartment: '',
        townOrCity: '',
        phoneNumber: '',
        email: this.$store.getters['user/getLoggedInUser']?.userEmail || storedUser?.userEmail,
        saveAddressInfo: null,
      },
    }
  },

  methods: {
    formatCurrency,

    handleFormSubmit() {
      if (this.form.saveAddressInfo === true) {
        this.$store.dispatch('user/updateAddress', this.form)
        // Don't remove the break, it adds a new line in the template literal
        toast.success(`Address details saved successfully!
        Thank you for shopping with us`)
        this.$store.dispatch('cart/clearCart')
        this.form = {
          firstName: '',
          companyName: '',
          streetAddress: '',
          appartment: '',
          townOrCity: '',
          phoneNumber: '',
          email: '',
          saveAddressInfo: null,
        }
      } else {
        toast.success('Thank you for shopping with us!')
        this.$store.dispatch('cart/clearCart')
        this.form = {
          firstName: '',
          companyName: '',
          streetAddress: '',
          appartment: '',
          townOrCity: '',
          phoneNumber: '',
          email: '',
          saveAddressInfo: null,
        }
      }
    },
  },

  computed: {
    ...mapGetters('cart', ['getCart', 'getCartSubTotal', 'getItemSubtotal']),
  },

  components: {
    Breadcrumbs,
    FormField,
    CartBillSummary,
    RadioGroup,
    CustomButton,

    Toaster,
  },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mt-20 mb-35">
    <!-- Breadcrumbs -->
    <Breadcrumbs :breadcrumbs="breadcrumbs" />

    <h2 class="font-inter mt-20 mb-12 text-4xl font-medium">Billing Details</h2>

    <form class="grid grid-cols-2 gap-43" @submit.prevent="handleFormSubmit">
      <!-- Billing details -->
      <section class="space-y-8">
        <FormField
          :required="true"
          label="First Name"
          id="firstName"
          inputType="text"
          v-model="form.firstName"
        />
        <FormField
          label="Company Name"
          id="companyName"
          inputType="text"
          v-model="form.companyName"
        />
        <FormField
          :required="true"
          label="Street Address"
          id="streetAddress"
          inputType="text"
          v-model="form.streetAddress"
        />
        <FormField
          label="Apartment, floor, etc. (optional)"
          id="appartment"
          inputType="text"
          v-model="form.appartment"
        />
        <FormField
          :required="true"
          label="Town/City"
          id="townOrCity"
          inputType="text"
          v-model="form.townOrCity"
        />
        <FormField
          :required="true"
          label="Phone Number"
          id="phoneNumber"
          inputType="text"
          v-model="form.phoneNumber"
        />
        <FormField
          :required="true"
          label="Email Address"
          id="email"
          inputType="email"
          v-model="form.email"
        />
        <div class="flex items-center gap-4">
          <input
            type="checkbox"
            id="saveAddressInfo"
            class="accent-red size-6 cursor-pointer rounded"
            v-model="form.saveAddressInfo"
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
                <p>
                  <span>{{ product.title }} </span>
                  <span class="text-green ms-1 text-xs">({{ product.quantity }})</span>
                </p>
                <p>{{ formatCurrency({ amount: getItemSubtotal(product.id) }) }}</p>
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

  <Toaster> </Toaster>
</template>

<style lang="scss" scoped></style>
