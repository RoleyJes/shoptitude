<script>
export default {
  name: 'CartBillSummary',

  props: {
    subtotalValue: {
      type: String,
      required: true,
    },
    totalValue: {
      type: String,
      required: true,
    },
  },
}
</script>
<template>
  <div class="space-y-4 divide-y">
    <div class="flex items-center justify-between pb-4">
      <p>Subtotal:</p>
      <p>{{ subtotalValue }}</p>
    </div>
    <div class="flex items-center justify-between pb-4">
      <p>Shipping:</p>
      <p>Free</p>
    </div>
    <div class="flex items-center justify-between pb-4">
      <p>Total:</p>
      <p>{{ totalValue }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
