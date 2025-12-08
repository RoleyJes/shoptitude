<script>
import Phone from '@/assets/home/category/Phone.vue'
import SectionHeaders from '../SectionHeaders.vue'
import Computer from '@/assets/home/category/Computer.vue'
import SmartWatch from '@/assets/home/category/SmartWatch.vue'
import Camera from '@/assets/home/category/Camera.vue'
import HeadPhones from '@/assets/home/category/HeadPhones.vue'
import Gaming from '@/assets/home/category/Gaming.vue'

export default {
  name: 'BrowseByCategory',

  data() {
    return {
      categories: [
        {
          component: 'Phone',
          label: 'Phones',
        },
        {
          component: 'Computer',
          label: 'Computers',
        },
        {
          component: 'SmartWatch',
          label: 'SmartWatch',
        },
        {
          component: 'Camera',
          label: 'Camera',
        },
        {
          component: 'HeadPhones',
          label: 'HeadPhones',
        },
        {
          component: 'Gaming',
          label: 'Gaming',
        },
      ],
    }
  },

  components: {
    SectionHeaders,
    Phone,
    Computer,
    SmartWatch,
    Camera,
    HeadPhones,
    Gaming,
  },
}
</script>
<template>
  <section class="max-w-project_container border-b-primary/30 mx-auto mb-17.5 border-b pb-17.5">
    <!-- Heading -->
    <section class="mb-15">
      <SectionHeaders subHeader="Categories" header="Browse By Category" />
    </section>

    <section class="flex gap-7.5">
      <article
        v-for="({ component, label }, i) in categories"
        :key="i"
        class="border-primary/30 group hover:bg-red hover:shadow-category flex h-36 w-42.5 flex-col items-center justify-center gap-4 rounded border transition-all duration-300"
      >
        <component
          :is="component"
          class="text-primary group-hover:text-offWhite transition-all duration-300"
        ></component>
        <p class="group-hover:text-offWhite transition-all duration-300">{{ label }}</p>
      </article>
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
