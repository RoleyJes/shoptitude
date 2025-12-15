<script>
export default {
  name: 'FormField',

  props: {
    label: {
      type: String,
      required: false,
    },
    labelClass: {
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
    },
    modelValue: {
      type: null,
    },
    placeholder: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    textareaRows: {
      type: Number,
      required: false,
    },
  },
}
</script>
<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" :for="id" :class="['text-primary', labelClass]">
      <span>{{ label }}</span>
      <span v-if="required" class="text-red/40">*</span>
    </label>

    <!-- WHEN I USE INPUT, IT DOESN'T DISPLAY THE DEFAULT VALUES FROM THE ADDRESS {}. WHY???? -->

    <!-- <input
      :type="inputType"
      :id="id"
      class="bg-gray focus:outline-green/30 placeholder:text-primary/50 rounded py-[13px] ps-4"
      :defaultValue="defaultValue"
      :placeholder="placeholder"
      v-model="inputValue"
    /> -->
    <component
      :is="inputType ? 'input' : 'textarea'"
      :type="inputType"
      :id="id"
      :rows="textareaRows"
      class="bg-gray focus:outline-green/30 placeholder:text-primary/50 rounded py-[13px] ps-4"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
    />
  </div>
</template>

<style lang="scss" scoped></style>
