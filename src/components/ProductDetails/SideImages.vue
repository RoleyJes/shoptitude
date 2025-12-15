<script>
export default {
  name: 'SideImages',

  props: {
    product: {
      type: Object,
      required: true,
    },
    imageContainerClass: {
      type: String,
      required: false,
    },
  },
}
</script>
<template>
  <div class="bg-gray flex h-34.5 w-42.5 items-center justify-center rounded">
    <div :class="['h-24.5 w-28', imageContainerClass ? imageContainerClass : '']">
      <img :src="product?.image" :alt="product?.description" class="size-full object-contain" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
