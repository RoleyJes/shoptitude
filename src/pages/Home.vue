<script>
import BestSelling from '@/components/Home/BestSelling.vue'
import BrowseByCategory from '@/components/Home/BrowseByCategory.vue'
import EnhanceMusic from '@/components/Home/EnhanceMusic.vue'
import ExploreProducts from '@/components/Home/ExploreProducts.vue'
import FlashSales from '@/components/Home/FlashSales.vue'
import Guarantee from '@/components/Home/Guarantee.vue'
import Hero from '@/components/Home/Hero.vue'
import NewArrivals from '@/components/Home/NewArrivals.vue'

export default {
  name: 'Home',

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
  <Guarantee />
</template>

<style lang="scss" scoped></style>
