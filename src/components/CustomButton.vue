<template>
  <component
    :is="path ? 'RouterLink' : 'button'"
    :to="path"
    :class="[
      'cursor-pointer rounded py-4 text-base font-medium transition-all duration-300',
      transparent
        ? 'text-primary hover:bg-primary border-primary/50 hover:text-offWhite border bg-none'
        : '',
      bgRed ? 'bg-red border-red text-offWhite border hover:bg-red-700' : '',
      bgGreen ? 'bg-green border-green text-offWhite border hover:bg-green-700' : '',
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
    bgRed: {
      typr: Boolean,
      default: false,
    },
    bgGreen: {
      typr: Boolean,
      default: false,
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
