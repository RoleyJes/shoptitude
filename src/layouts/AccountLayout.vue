<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import CustomButton from '@/components/CustomButton.vue'
import FormField from '@/components/FormField.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Account',

  data() {
    return {
      breadcrumbs: [
        {
          path: '/',
          label: 'Home',
        },
        {
          label: 'My Account',
        },
      ],
      sideMenu: [
        {
          header: 'Manage My Account',
          links: [
            { label: 'My Profile', path: '/account/profile' },
            { label: 'Address Book', path: '/account/address' },
            { label: 'My Payment Options' },
          ],
        },
        {
          header: 'My Orders',
          links: [{ label: 'My Returns' }, { label: 'My Cancellations' }],
        },
      ],
    }
  },

  methods: {
    isActiveRoute(route) {
      return this.$route.path === route
    },
  },

  computed: {
    ...mapGetters('user', ['getloggedInUser']),
    username() {
      return this.getloggedInUser?.firstName || JSON.parse(localStorage.getItem('user')).firstName
    },
  },

  components: { Breadcrumbs, FormField, CustomButton },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mt-20 mb-35">
    <!-- Header -->
    <section class="flex items-center justify-between">
      <!-- Breadcrumbs -->
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <p class="flex gap-1.5 text-lg">
        <span>Welcome!</span>
        <span class="text-red capitalize">{{ username }}</span>
      </p>
    </section>

    <section class="mt-20 grid grid-cols-[202px_1fr] gap-24.5">
      <!-- Side menu -->
      <aside class="space-y-6">
        <div v-for="(item, i) in sideMenu" :key="i" class="">
          <p class="mb-4 font-medium">{{ item.header }}</p>
          <div class="ms-9 flex w-fit flex-col gap-2">
            <component
              :is="link.path ? 'RouterLink' : 'p'"
              v-for="(link, index) in item.links"
              :key="index"
              :to="link.path"
              :class="[
                'hover:text-red transition-all duration-300',
                isActiveRoute(link.path) ? 'text-red' : 'text-primary/50',
              ]"
            >
              {{ link.label }}
            </component>
          </div>
        </div>
      </aside>

      <RouterView />
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
