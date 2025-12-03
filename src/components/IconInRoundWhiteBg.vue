<script>
export default {
  name: 'IconInRoundWhiteBg',

  props: {
    image: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    defaultImage: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<template>
  <button
    class="hover:shadow-primary/20 flex size-8.5 cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-300 hover:shadow-lg"
  >
    <img v-if="defaultImage" :src="image" :alt="alt" class="w-4" />
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
