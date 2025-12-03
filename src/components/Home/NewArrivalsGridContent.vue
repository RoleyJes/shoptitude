<script>
export default {
  name: 'NewArrivalsGridContent',

  props: {
    containerClass: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    imageClass: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    textContainerClass: {
      type: String,
      default: 'space-y-4',
    },
    header: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
<template>
  <div :class="['relative flex rounded', containerClass]">
    <img :src="image" :alt="alt" :class="['absolute z-10', imageClass]" />
    <div :class="['text-offWhite static z-20 mt-auto max-w-60.5', textContainerClass]">
      <p class="font-inter text-2xl font-semibold tracking-[0.72px]">{{ header }}</p>
      <p class="text-sm">{{ description }}</p>
      <p class="font-medium text-white underline underline-offset-4">Shop Now</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
