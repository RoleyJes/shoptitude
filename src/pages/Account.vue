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
            { label: 'My Profile', path: '/account' },
            { label: 'Address Book', path: '/account/address' },
            { label: 'My Payment Options', path: '/account' },
          ],
        },
        {
          header: 'My Orders',
          links: [
            { label: 'My Returns', path: '/account' },
            { label: 'My Cancellations', path: '/account' },
          ],
        },
      ],
    }
  },

  computed: {
    ...mapGetters('user', ['getloggedInUser']),
    username() {
      return this.getloggedInUser?.name || JSON.parse(localStorage.getItem('user')).name
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
      <p class="flex gap-1.5 text-sm">
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
            <RouterLink
              v-for="(link, index) in item.links"
              :key="index"
              :to="link.path"
              class="text-primary/50 hover:text-red transition-all duration-300"
              >{{ link.label }}</RouterLink
            >
          </div>
        </div>
      </aside>

      <div class="shadow-category rounded bg-white px-20 py-10">
        <h3 class="text-red mb-4 text-xl font-medium">Edit Your Profile</h3>

        <form>
          <div class="mb-6 flex gap-12.5">
            <FormField label="First Name" inputType="text" id="firstName" class="w-full" />
            <FormField label="Last Name" inputType="text" id="lastName" class="w-full" />
          </div>
          <div class="mb-6 flex gap-12.5">
            <FormField label="Email" inputType="email" id="email" class="w-full" />
            <FormField label="Address" inputType="text" id="address" class="w-full" />
          </div>
          <div class="mb-6">
            <FormField
              label="Password Changes"
              inputType="text"
              class="w-full"
              placeholder="Current Password"
            />
            <FormField inputType="text" class="my-4 w-full" placeholder="New Password" />
            <FormField inputType="text" class="w-full" placeholder="Confirm New Passwod" />
          </div>

          <div class="flex items-center justify-end gap-8">
            <CustomButton
              buttonText="Cancel"
              :transparent="true"
              class="hover:text-red border-none hover:bg-transparent"
            />
            <CustomButton buttonText="Save Changes" class="w-53.5" :bg-red="true" />
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
