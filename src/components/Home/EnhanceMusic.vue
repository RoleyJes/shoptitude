<script>
import CustomButton from '../CustomButton.vue'

export default {
  name: 'EnhanceMusic',

  data() {
    return {
      flashSaleTimers: [
        {
          number: 23,
          label: 'Hours',
        },
        {
          number: 0o5,
          label: 'Days',
        },
        {
          number: 59,
          label: 'Minutes',
        },
        {
          number: 35,
          label: 'Seconds',
        },
      ],
    }
  },

  components: { CustomButton },
}
</script>
<template>
  <section
    class="max-w-project_container bg-primary gap mx-auto mb-18 flex gap-7 overflow-hidden ps-14 pe-11"
  >
    <!-- Texts -->
    <div class="mt-17 w-110.5">
      <span class="text-green font-semibold">Categories</span>
      <p class="text-offWhite font-inter my-8 text-5xl font-semibold tracking-[1.44px]">
        Enhance Your Music Experience
      </p>

      <!-- Timer -->
      <div class="flex gap-6">
        <div
          v-for="(item, i) in flashSaleTimers"
          :key="i"
          class="flex size-15.5 flex-col items-center justify-center rounded-full bg-white"
        >
          <span class="-mb-2 font-semibold">{{ item.number }}</span>
          <span class="text-xs">{{ item.label }}</span>
        </div>
      </div>

      <!-- Button -->
      <CustomButton buttonText="Buy Now" :bgGreen="true" class="mt-10 w-43" />
    </div>

    <!-- Image -->
    <div class="relative">
      <div class="h-[500px] w-[504px] rounded-full bg-[#D9D9D9]/50 blur-[200px]"></div>
      <img
        src="@/assets/home/boombox.webp"
        alt="Premium wireless speaker with sleek black design, featuring multiple control buttons and a modern aesthetic, positioned in a contemporary music retail environment"
        class="absolute top-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
