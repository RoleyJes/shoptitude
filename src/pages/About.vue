<script>
import DollarIcon from '@/assets/about/DollarIcon.vue'
import MoneyBagIcon from '@/assets/about/MoneyBagIcon.vue'
import SellersIcon from '@/assets/about/SellersIcon.vue'
import ShoppingBagIcon from '@/assets/about/ShoppingBagIcon.vue'
import CustomerServiceIcon from '@/assets/home/CustomerServiceIcon.vue'
import DeliveryIcon from '@/assets/home/DeliveryIcon.vue'
import ShieldTickIcon from '@/assets/home/ShieldTickIcon.vue'
import OurStory from '@/components/About/OurStory.vue'
import Team from '@/components/About/Team.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Guarantee from '@/components/Home/Guarantee.vue'
import { markRaw } from 'vue'

export default {
  name: 'About',

  data() {
    return {
      breadcrumbsArr: [
        {
          path: '/',
          label: 'Home',
        },
        {
          label: 'About',
        },
      ],

      detailsSummary: [
        {
          icon: markRaw(SellersIcon),
          header: '10.5k',
          description: 'Sellers active our site',
        },

        {
          icon: markRaw(DollarIcon),
          header: '33k',
          description: 'Monthly Product Sale',
        },
        {
          icon: markRaw(ShoppingBagIcon),
          header: '45.5k',
          description: 'Customer active in our site',
        },
        {
          icon: markRaw(MoneyBagIcon),
          header: '25k',
          description: 'Anual gross sale in our site',
        },
      ],
      guaranteeData: [
        {
          icon: markRaw(DeliveryIcon),
          header: 'FREE AND FAST DELIVERY',
          description: 'Free delivery for all orders over $140',
        },

        {
          icon: markRaw(CustomerServiceIcon),
          header: '24/7 CUSTOMER SERVICE',
          description: 'Friendly 24/7 customer support',
        },
        {
          icon: markRaw(ShieldTickIcon),
          header: 'MONEY BACK GUARANTEE',
          description: 'We reurn money within 30 days',
        },
      ],
    }
  },

  components: {
    Breadcrumbs,
    OurStory,
    Guarantee,
    Team,
  },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mt-20 mb-10.5">
    <!-- Breadcrumbs -->
    <Breadcrumbs :breadcrumbs="breadcrumbsArr" />
  </section>
  <OurStory />
  <Guarantee :dataArr="detailsSummary" :boldFont="true" :border="true" />
  <Team />
  <Guarantee :dataArr="guaranteeData" />
</template>

<style lang="scss" scoped></style>
