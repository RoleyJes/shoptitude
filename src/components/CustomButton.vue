<template>
  <component
    :is="path ? 'RouterLink' : 'button'"
    :to="path"
    :class="[
      'cursor-pointer rounded py-4 text-base font-medium transition-all duration-300',
      transparent
        ? 'text-primary hover:bg-primary border-primary/50 hover:text-offWhite border bg-none'
        : 'bg-red border-red text-offWhite border hover:bg-red-700',
    ]"
  >
    <slot>
      {{ buttonText }}
    </slot>
  </component>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    transparent: {
      type: Boolean,
      default: false,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
