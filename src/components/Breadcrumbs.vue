<script>
export default {
  name: 'Breadcrumbs',

  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
  },
}
</script>
<template>
  <div class="flex items-center gap-3">
    <template v-for="(link, i) in breadcrumbs" :key="i">
      <component
        :is="link.path ? 'RouterLink' : 'p'"
        :to="link.path"
        :class="[
          'text-sm transition-all',
          !link.path
            ? 'text-primary'
            : 'text-primary/50 hover:text-primary hover:underline hover:underline-offset-4',
        ]"
        >{{ link.label }}</component
      >
      <span class="text-primary/50 text-xs last:hidden">/</span>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
