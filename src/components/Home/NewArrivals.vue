<script>
import SectionHeaders from '../SectionHeaders.vue'
import NewArrivalsGridContent from './NewArrivalsGridContent.vue'
import playStation from '@/assets/home/playStation.webp'
import hatWoman from '@/assets/home/hatWoman.webp'
import amazonSpeakers from '@/assets/home/amazonSpeakers.webp'
import gucciPerfume from '@/assets/home/gucciPerfume.webp'

export default {
  name: 'NewArrivals',

  data() {
    return {
      playStation,
      hatWoman,
      amazonSpeakers,
      gucciPerfume,
    }
  },

  components: { SectionHeaders, NewArrivalsGridContent },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mb-35">
    <!-- Heading -->
    <section class="mb-15">
      <SectionHeaders subHeader="Featured" header="New Arrival" />
    </section>

    <div class="grid grid-cols-2 gap-7.5">
      <!-- Left grid item -->
      <NewArrivalsGridContent
        containerClass="h-150 p-8 bg-primary"
        :image="playStation"
        imageClass="h-[511px] bottom-0"
        alt="PlayStation 5 console in black and white, displayed against a primary colored background with product showcase lighting"
        header="PlayStation 5"
        description="Black and White version of the PS5 coming out on sale."
      />

      <!-- Right grid item -->
      <div class="flex flex-col gap-7.5">
        <NewArrivalsGridContent
          containerClass="h-1/2 p-6 bg-[#0D0D0D]"
          :image="hatWoman"
          imageClass="h-full right-0 bottom-0"
          alt="a woman wearing a hat"
          header="Women’s Collections"
          description="Featured woman collections that give you another vibe."
        />

        <div class="grid h-1/2 grid-cols-2 gap-7.5">
          <NewArrivalsGridContent
            containerClass="p-6 bg-[#0D0D0D]"
            :image="amazonSpeakers"
            imageClass="h-[221px] bottom-8"
            alt="Amazon wireless speakers"
            textContainerClass="space-y-2"
            header="Speakers"
            description="Amazon wireless speakers"
          />
          <NewArrivalsGridContent
            containerClass="p-6 bg-[#0D0D0D]"
            :image="gucciPerfume"
            imageClass="h-[203px] bottom-11"
            alt="GUCCI INTENSE OUD EDP"
            textContainerClass="space-y-2"
            header="Perfume"
            description="GUCCI INTENSE OUD EDP"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
