<script>
import CustomerServiceIcon from '@/assets/home/CustomerServiceIcon.vue'
import DeliveryIcon from '@/assets/home/DeliveryIcon.vue'
import ShieldTickIcon from '@/assets/home/ShieldTickIcon.vue'

export default {
  name: 'Guarantee',

  data() {
    return {
      guaranteeData: [
        {
          icon: 'DeliveryIcon',
          header: 'FREE AND FAST DELIVERY',
          description: 'Free delivery for all orders over $140',
        },

        {
          icon: 'CustomerServiceIcon',
          header: '24/7 CUSTOMER SERVICE',
          description: 'Friendly 24/7 customer support',
        },
        {
          icon: 'ShieldTickIcon',
          header: 'MONEY BACK GUARANTEE',
          description: 'We reurn money within 30 days',
        },
      ],
    }
  },

  components: { DeliveryIcon, CustomerServiceIcon, ShieldTickIcon },
}
</script>
<template>
  <section class="mx-auto mb-35 flex max-w-236 items-center justify-between">
    <div v-for="(item, i) in guaranteeData" :key="i" class="flex flex-col items-center">
      <!-- Icon -->
      <div class="flex size-20 items-center justify-center rounded-full bg-[#2F2E30]/30">
        <div class="bg-primary flex size-14.5 items-center justify-center rounded-full">
          <component :is="item.icon"></component>
        </div>
      </div>

      <!-- Texts -->
      <p class="mt-6 mb-2 text-xl font-semibold">{{ item.header }}</p>
      <p class="text-sm">{{ item.description }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
