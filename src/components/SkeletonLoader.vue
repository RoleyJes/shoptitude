<script>
export default {
  name: 'SkeletonLoader',
}
</script>
<template>
  <div class="flex animate-pulse flex-col space-y-4">
    <div class="relative flex h-62.5 w-67.5 items-center justify-center rounded bg-gray-200"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 rounded bg-gray-200"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 h-2 rounded bg-gray-200"></div>
          <div class="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div class="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
