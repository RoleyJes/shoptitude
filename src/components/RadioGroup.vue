<script>
export default {
  name: 'RadioGroup',

  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
    },
  },
}
</script>
<template>
  <label v-for="(opt, i) in options" :key="i" class="flex items-center justify-between gap-4">
    <div class="flex items-center gap-4">
      <input
        type="radio"
        class="accent-primary size-6"
        :value="opt.value"
        :checked="opt.value === modelValue"
        @change="$emit('update:modelValue', opt.value)"
      />
      <span>{{ opt.label }}</span>
    </div>

    <!-- <div v-if="opt.image" class="ms-auto"> -->
    <div v-if="opt.image && Array.isArray(opt.image)" class="flex items-center gap-2">
      <div v-for="(img, i) in opt.image" :key="i" class="h-7 w-10.5">
        <img :src="img" alt="options" class="size-full object-contain" />
      </div>
    </div>
    <div v-else-if="opt.image && typeof opt.image === 'string'" class="h-7 w-10.5">
      <img :src="opt.image" alt="options" class="size-full object-contain" />
    </div>
    <!-- </div> -->
  </label>
</template>

<style lang="scss" scoped></style>
