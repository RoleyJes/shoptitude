<script>
import CancelIConWithoutCircle from '@/assets/cart/CancelIConWithoutCircle.vue'

export default {
  name: 'CartRow',

  props: {
    image: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: null,
    },
    quantity: {
      type: Number,
      default: null,
    },
    itemSubTotal: {
      type: String,
      default: null,
    },
  },

  components: { CancelIConWithoutCircle },
}
</script>
<template>
  <div
    class="shadow-category group grid grid-cols-4 items-center gap-15 rounded bg-white px-10 py-6"
  >
    <div class="flex items-center gap-5">
      <!-- Image -->
      <div class="relative">
        <div class="h-13.5 w-13.5">
          <img :src="image" :alt="alt" class="size-full object-contain" />
        </div>
        <div
          @click="$emit('deleteFromCart')"
          class="bg-red absolute -top-2 flex size-4.5 cursor-pointer items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
        >
          <component :is="'CancelIConWithoutCircle'" class="text-white"></component>
        </div>
      </div>

      <!-- Product Name -->
      <p>{{ title }}</p>
    </div>
    <p>{{ price }}</p>
    <div class="border-primary/40 flex w-fit items-center gap-4 rounded border-[1.5px] px-3 py-1.5">
      <p>{{ quantity }}</p>
      <div class="flex flex-col gap-[5.3px]">
        <span @click="$emit('increaseQuantity')">
          <svg
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.24267 1.88533L0.942667 5.18533L0 4.24267L4.24267 0L8.48533 4.24267L7.54267 5.18533L4.24267 1.88533Z"
              fill="black"
            />
          </svg>
        </span>
        <span @click="$emit('decreaseQuantity')">
          <svg
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.24268 3.3L7.54268 0L8.48535 0.942666L4.24268 5.18533L1.71661e-05 0.942666L0.942683 0L4.24268 3.3Z"
              fill="black"
            />
          </svg>
        </span>
      </div>
    </div>
    <p>{{ itemSubTotal }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
