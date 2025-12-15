<script>
import CustomButton from '@/components/CustomButton.vue'
import FormField from '@/components/FormField.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',

  data() {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    return {
      firstName: this.$store.getters['user/getLoggedInUser']?.firstName || storedUser?.firstName,
      lastName: this.$store.getters['user/getLoggedInUser']?.lastName || storedUser?.lastName,
      userEmail: this.$store.getters['user/getLoggedInUser']?.userEmail || storedUser?.userEmail,
      address: this.$store.getters['user/getAddress']?.streetAddress,
    }
  },

  computed: {
    ...mapGetters('user', ['getloggedInUser']),
    localStorageUser() {
      return JSON.parse(localStorage.getItem('user'))
    },
  },

  methods: {
    handleSubmit() {},
  },

  components: { FormField, CustomButton },
}
</script>
<template>
  <div class="shadow-category rounded bg-white px-20 py-10">
    <h3 class="text-red mb-4 text-xl font-medium">Edit Your Profile</h3>

    <form @submit.prevent="handleSubmit">
      <div class="mb-6 flex gap-12.5">
        <FormField
          label="First Name"
          inputType="text"
          id="firstName"
          class="w-full"
          v-model="firstName"
        />
        <FormField
          label="Last Name"
          inputType="text"
          id="lastName"
          class="w-full"
          v-model="lastName"
        />
      </div>
      <div class="mb-6 flex gap-12.5">
        <FormField label="Email" inputType="email" id="email" class="w-full" v-model="userEmail" />
        <FormField label="Address" inputType="text" id="address" class="w-full" v-model="address" />
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
</template>

<style lang="scss" scoped></style>
