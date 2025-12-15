<script>
import CustomerServiceIcon from '@/assets/home/CustomerServiceIcon.vue'
import DeliveryIcon from '@/assets/home/DeliveryIcon.vue'
import ShieldTickIcon from '@/assets/home/ShieldTickIcon.vue'
import BestSelling from '@/components/Home/BestSelling.vue'
import BrowseByCategory from '@/components/Home/BrowseByCategory.vue'
import EnhanceMusic from '@/components/Home/EnhanceMusic.vue'
import ExploreProducts from '@/components/Home/ExploreProducts.vue'
import FlashSales from '@/components/Home/FlashSales.vue'
import Guarantee from '@/components/Home/Guarantee.vue'
import Hero from '@/components/Home/Hero.vue'
import NewArrivals from '@/components/Home/NewArrivals.vue'
import { markRaw } from 'vue'

export default {
  name: 'Home',

  data() {
    return {
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
    Hero,
    FlashSales,
    BrowseByCategory,
    BestSelling,
    EnhanceMusic,
    ExploreProducts,
    NewArrivals,
    Guarantee,
  },
}
</script>
<template>
  <Hero />
  <FlashSales />
  <BrowseByCategory />
  <BestSelling />
  <EnhanceMusic />
  <ExploreProducts />
  <NewArrivals />
  <Guarantee :dataArr="guaranteeData" />
</template>

<style lang="scss" scoped></style>
