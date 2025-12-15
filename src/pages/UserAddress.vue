<script>
import CustomButton from '@/components/CustomButton.vue'
import FormField from '@/components/FormField.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'UserAddress',

  data() {
    return {
      streetAddress: this.$store.getters['user/getAddress']?.streetAddress,
      appartment: this.$store.getters['user/getAddress']?.appartment,
      townOrCity: this.$store.getters['user/getAddress']?.townOrCity,
    }
  },

  computed: {
    ...mapGetters('user', ['getAddress']),
    defaultStreetAddress() {
      return this.getAddress?.streetAddress
    },
  },

  components: { FormField, CustomButton },
}
</script>
<template>
  <div class="shadow-category rounded bg-white px-20 py-10">
    <h3 class="text-red mb-4 text-xl font-medium">Edit Your Address</h3>

    <form>
      <div class="mb-6 flex gap-12.5">
        <FormField
          label="Street Address"
          id="streetAddress"
          inputType="text"
          class="w-full"
          v-model="streetAddress"
        />
        <FormField
          label="Apartment, floor, etc. (optional)"
          id="appartment"
          inputType="text"
          class="w-full"
          v-model="appartment"
        />
      </div>
      <FormField
        label="Town/City"
        id="townOrCity"
        inputType="text"
        class="mb-6 w-full"
        v-model="townOrCity"
      />

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
