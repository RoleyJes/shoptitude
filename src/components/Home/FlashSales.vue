<script>
import SectionHeaders from '../SectionHeaders.vue'

export default {
  name: 'FlashSales',

  components: { SectionHeaders },
}
</script>

<template>
  <section class="mb-20">
    <!-- Heading -->
    <section class="max-w-project_container mx-auto mb-10">
      <SectionHeaders subHeader="Today's" header="Flash Sales">
        <div class="flex items-center gap-4.5">
          <!-- Days -->
          <div class="space-y-1">
            <p class="text-xs font-medium">Days</p>
            <p class="font-inter text-[32px] leading-[30px] font-bold">03</p>
          </div>
          <div class="flex flex-col gap-3">
            <span class="bg-red size-1 rounded-full"></span>
            <span class="bg-red size-1 rounded-full"></span>
          </div>
          <!-- Hours -->
          <div class="space-y-1">
            <p class="text-xs font-medium">Hours</p>
            <p class="font-inter text-[32px] leading-[30px] font-bold">23</p>
          </div>
          <div class="flex flex-col gap-3">
            <span class="bg-red size-1 rounded-full"></span>
            <span class="bg-red size-1 rounded-full"></span>
          </div>
          <!-- Minutes -->
          <div class="space-y-1">
            <p class="text-xs font-medium">Minutes</p>
            <p class="font-inter text-[32px] leading-[30px] font-bold">19</p>
          </div>
          <div class="flex flex-col gap-3">
            <span class="bg-red size-1 rounded-full"></span>
            <span class="bg-red size-1 rounded-full"></span>
          </div>
          <!-- Seconds -->
          <div class="space-y-1">
            <p class="text-xs font-medium">Seconds</p>
            <p class="font-inter text-[32px] leading-[30px] font-bold">56</p>
          </div>
        </div>
      </SectionHeaders>
    </section>

    <!-- Products -->
    <section class="overflow-x-auto ps-34">
      <article class="w-67.5">
        <div class="bg-gray relative flex h-62.5 items-center justify-center rounded">
          <img src="@/assets/test.png" alt="product on sale" />
          <!-- Discount -->
          <p class="bg-red text-offWhite absolute top-3 left-3 rounded px-3 py-1 text-xs">-40%</p>
          <!-- Wish and Detail -->
          <div class="absolute top-3 right-3 flex flex-col gap-2">
            <button class="flex size-8.5 items-center justify-center rounded-full bg-white">
              <img
                src="@/assets/wishHeartIcon.png"
                alt="Heart shaped wishlist icon button overlaid at the top-right of a product image, indicating add or remove from favorites; appears on a discounted product card; neutral inviting tone"
                class="w-4"
              />
            </button>
          </div>
        </div>
      </article>
    </section>
    <!-- Button -->
  </section>
</template>

<style lang="scss" scoped></style>
