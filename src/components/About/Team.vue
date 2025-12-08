<script>
import man1 from '@/assets/about/man1.webp'
import man2 from '@/assets/about/man2.webp'
import woman from '@/assets/about/woman.webp'
import TwitterIcon from './TwitterIcon.vue'
import InstagramIcon from './InstagramIcon.vue'
import LinkedInIcon from './LinkedInIcon.vue'

export default {
  name: 'Team',

  data() {
    return {
      teams: [
        {
          image: man1,
          name: 'Tom Cruise',
          role: 'Founder & Chairman',
        },
        {
          image: woman,
          name: 'Emma Watson',
          role: 'Managing Director',
        },
        {
          image: man2,
          name: 'Will Smith',
          role: 'Product Designer',
        },
      ],
    }
  },

  components: { TwitterIcon, InstagramIcon, LinkedInIcon },
}
</script>

<template>
  <section class="max-w-project_container mx-auto mb-35 grid grid-cols-3 gap-7.5">
    <div v-for="(team, i) in teams" :key="i" class="transition-all duration-300 hover:scale-95">
      <!-- Image -->
      <div class="bg-gray relative mb-8 h-107.5 w-92.5 overflow-hidden rounded">
        <div class="absolute bottom-0 left-1/2 h-98 w-full -translate-x-1/2">
          <img
            :src="team.image"
            alt="man folding hands and smiling"
            class="size-full object-contain"
          />
        </div>
      </div>
      <!-- Text -->
      <div>
        <p class="font-inter text-[32px] leading-[30px] font-medium tracking-[1.28px]">
          {{ team.name }}
        </p>
        <p class="mt-2 mb-4">
          {{ team.role }}
        </p>

        <div class="flex items-center gap-4">
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
