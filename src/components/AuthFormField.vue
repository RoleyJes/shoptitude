<template>
  <div class="relative w-full">
    <!-- <input
      :id="id"
      v-model="inputValue"
      :type="currentType"
      @focus="isFocused = true"
      @blur="isFocused = false"
      class="border-b-primary/50 w-full border-b pe-6 outline-none"
    /> -->
    <input
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="currentType"
      @focus="isFocused = true"
      @blur="isFocused = false"
      class="border-b-primary/50 w-full border-b pe-6 outline-none"
    />

    <label
      v-if="label"
      :for="id"
      class="pointer-events-none absolute left-0 text-black/50 transition-all duration-200"
      :class="[isFocused || modelValue ? '-top-7' : '-top-2']"
    >
      {{ label }}
    </label>
    <!-- v-if="label"
      :for="id"
      class="pointer-events-none absolute left-0 text-black/50 transition-all duration-200"
      :class="[isFocused || inputValue ? '-top-7' : '-top-2']"
      >{{ label }}</label
    > -->
  </div>
</template>

<script>
export default {
  name: 'AuthFormField',

  data() {
    return {
      currentType: this.inputType,
      isFocused: false,
      // inputValue: this.modelValue,
    }
  },

  props: {
    label: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    inputType: {
      type: String,
      required: false,
      default: 'text',
    },
    modelValue: {
      type: null,
    },
  },

  // watch: {
  //   inputValue(value) {
  //     this.$emit('update:modelValue', value)
  //   },
  // },
}
</script>

<style lang="scss" scoped></style>
