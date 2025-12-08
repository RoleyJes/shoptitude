<script>
export default {
  name: 'Guarantee',

  props: {
    dataArr: {
      type: Array,
      required: true,
    },
    boldFont: {
      type: Boolean,
      default: false,
      required: false,
    },
    border: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
}
</script>
<template>
  <section
    :class="[
      'mx-auto mb-35 flex items-center justify-between',
      border ? 'max-w-project_container gap-7.5' : 'max-w-236',
    ]"
  >
    <div
      v-for="(item, i) in dataArr"
      :key="i"
      :class="[
        'group flex items-center justify-center transition-all duration-300',
        border
          ? 'border-primary/30 hover:bg-red hover:shadow-box h-57.5 w-67.5 rounded border hover:border-none hover:text-white'
          : '',
      ]"
    >
      <div class="flex flex-col items-center">
        <div class="flex size-20 items-center justify-center rounded-full bg-[#2F2E30]/30">
          <div
            :class="[
              'bg-primary flex size-14.5 items-center justify-center rounded-full text-white',
              border ? 'group-hover:bg-white group-hover:text-black' : '',
            ]"
          >
            <component :is="item.icon"></component>
          </div>
        </div>

        <!-- Texts -->
        <p
          :class="[
            'mt-6',
            boldFont
              ? 'inter mb-3 text-[32px] leading-[30px] font-bold tracking-[1.28px]'
              : 'mb-2 text-xl font-semibold',
          ]"
        >
          {{ item.header }}
        </p>
        <p :class="[boldFont ? 'text-base' : 'text-sm']">{{ item.description }}</p>
      </div>
      <!-- Icon -->
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
