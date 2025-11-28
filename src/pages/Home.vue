<script>
import FlashSales from '@/components/Home/FlashSales.vue'
import Hero from '@/components/Home/Hero.vue'

export default {
  name: 'Home',

  components: { Hero, FlashSales },
}
</script>
<template>
  <Hero />
  <FlashSales />
</template>

<style lang="scss" scoped></style>
