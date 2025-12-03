<script>
import CustomButton from '../CustomButton.vue'

export default {
  name: 'WishlistHeader',

  props: {
    title: {
      type: String,
      default: '',
    },
    redBorder: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: '',
    },
    buttonClass: {
      type: String,
      default: '',
    },
  },

  components: { CustomButton },
}
</script>
<template>
  <section class="mb-15 flex items-center justify-between">
    <h4 class="flex items-center gap-4 text-xl">
      <span v-if="redBorder" class="bg-red inline-block h-10 w-5 rounded"></span>
      <span>{{ title }}</span>
    </h4>

    <CustomButton :transparent="true" :buttonText="buttonText" :class="buttonClass" />
  </section>
</template>

<style lang="scss" scoped></style>
