<script>
import MailIcon from '@/assets/contact/MailIcon.vue'
import PhoneIcon from '@/assets/contact/PhoneIcon.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import CustomButton from '@/components/CustomButton.vue'
import FormField from '@/components/FormField.vue'

export default {
  name: 'Contact',

  data() {
    return {
      breadcrumbs: [
        {
          path: '/',
          label: 'Home',
        },
        {
          label: 'Contact',
        },
      ],

      contactDetails: [
        {
          icon: 'PhoneIcon',
          header: 'Call Us',
          text: 'We are available 24/7, 7 days a week.',
          contacts: [
            {
              type: 'tel',
              label: 'Phone:',
              value: '+8801611112222',
            },
          ],
        },
        {
          icon: 'MailIcon',
          header: 'Write Us',
          text: 'Fill out our form and we will contact you within 24 hours.',
          contacts: [
            {
              type: 'email',
              label: 'Email:',
              value: 'customer@shoptitude.com',
            },
            {
              type: 'email',
              label: 'Email:',
              value: 'support@shoptitude.com',
            },
          ],
        },
      ],
    }
  },

  components: { Breadcrumbs, PhoneIcon, MailIcon, FormField, CustomButton },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mt-20 mb-35">
    <!-- Breadcrumbs -->
    <Breadcrumbs :breadcrumbs="breadcrumbs" />

    <section class="mt-20 grid grid-cols-[340px_1fr] gap-7.5">
      <!-- Contact info -->
      <div
        class="shadow-category divide-primary space-y-8 divide-y rounded bg-white px-8.5 pt-10 pb-12.5"
      >
        <!-- Phone -->
        <div v-for="(item, i) in contactDetails" :key="i" class="not-last:pb-8">
          <!-- Icon & Header -->
          <div class="flex items-center gap-4">
            <div class="bg-red flex size-10 items-center justify-center rounded-full">
              <component :is="item.icon"></component>
            </div>

            <p class="font-medium">{{ item.header }}</p>
          </div>
          <p class="mt-6 mb-4 text-sm">{{ item.text }}</p>
          <a
            v-for="(contact, ind) in item.contacts"
            :key="ind"
            :href="contact.type === 'tel' ? 'tel:' + contact.value : 'mailto:' + contact.value"
            class="inline-block text-sm not-last:mb-4"
          >
            {{ contact.label }} {{ contact.value }}
          </a>
        </div>
      </div>

      <!-- Form -->
      <form class="shadow-category space-y-8 rounded bg-white px-8 py-10">
        <div class="grid grid-cols-3 gap-4">
          <FormField inputType="text" placeholder="Your Name *" />
          <FormField inputType="email" placeholder="Your Email *" />
          <FormField inputType="text" placeholder="Your Phone *" />
        </div>
        <FormField placeholder="Your Message" :textareaRows="10" />

        <div class="flex justify-end">
          <CustomButton buttonText="Send Message" :bgRed="true" class="w-53.5" @click.prevent="" />
        </div>
      </form>
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
