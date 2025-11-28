<script>
import GeneralFooter from '@/ui/GeneralFooter.vue'
import GeneralNavbar from '@/ui/GeneralNavbar.vue'

export default {
  name: 'GeneralLayout',

  components: { GeneralNavbar, GeneralFooter },
}
</script>
<template>
  <div class="flex min-h-screen flex-col">
    <GeneralNavbar />
    <main>
      <RouterView />
    </main>
    <GeneralFooter />
  </div>
</template>

<style lang="scss" scoped></style>
