<script>
export default {
  name: 'FetchError',

  props: {
    errMsg: {
      type: String,
      required: true,
    },
  },
}
</script>
<template>
  <p class="text-red max-w-project_container mx-auto text-center text-lg font-medium">
    {{ errMsg }}
  </p>
</template>

<style lang="scss" scoped></style>
