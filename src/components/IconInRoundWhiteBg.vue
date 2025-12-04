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
    IconComponent: {
      type: String,
      default: '',
    },
  },
}
</script>
<template>
  <button
    class="hover:shadow-primary/20 flex size-8.5 cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-300 hover:shadow-lg"
  >
    <!-- <component :is="IconComponent" class="w-4 text-black"> -->
    <img v-if="defaultImage" :src="image" :alt="alt" class="w-4" />
    <!-- </component> -->
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
