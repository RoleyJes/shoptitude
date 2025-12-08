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

export default {
  name: 'About',

  data() {
    return {
      breadcrumbs: [
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
          icon: SellersIcon,
          header: '10.5k',
          description: 'Sellers active our site',
        },

        {
          icon: DollarIcon,
          header: '33k',
          description: 'Monthly Product Sale',
        },
        {
          icon: ShoppingBagIcon,
          header: '45.5k',
          description: 'Customer active in our site',
        },
        {
          icon: MoneyBagIcon,
          header: '25k',
          description: 'Anual gross sale in our site',
        },
      ],
      guaranteeData: [
        {
          icon: DeliveryIcon,
          header: 'FREE AND FAST DELIVERY',
          description: 'Free delivery for all orders over $140',
        },

        {
          icon: CustomerServiceIcon,
          header: '24/7 CUSTOMER SERVICE',
          description: 'Friendly 24/7 customer support',
        },
        {
          icon: ShieldTickIcon,
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
    SellersIcon,
    MoneyBagIcon,
    ShoppingBagIcon,
    DollarIcon,
    DeliveryIcon,
    CustomerServiceIcon,
    ShieldTickIcon,
    Team,
  },
}
</script>
<template>
  <section class="max-w-project_container mx-auto mt-20 mb-10.5">
    <!-- Breadcrumbs -->
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
  </section>
  <OurStory />
  <Guarantee :dataArr="detailsSummary" :boldFont="true" :border="true" />
  <Team />
  <Guarantee :dataArr="guaranteeData" />
</template>

<style lang="scss" scoped></style>
