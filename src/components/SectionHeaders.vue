<script>
export default {
  name: 'SectionHeader',

  props: {
    subHeader: {
      type: String,
      default: '',
    },
    header: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div>
    <p class="mb-5 flex items-center gap-4">
      <span class="bg-red h-10 w-5 rounded"></span>
      <span class="text-red text-base leading-5 font-semibold">{{ subHeader }}</span>
    </p>
    <div class="flex items-center justify-between">
      <div class="flex items-end gap-22">
        <p class="font-inter text-4xl leading-[33px] font-semibold tracking-[1.44px]">
          {{ header }}
        </p>
        <slot />
      </div>

      <slot name="headerButton" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
