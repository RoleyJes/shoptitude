<script>
export default {
  name: 'GeneralFooter',

  data() {
    return {
      footerLinks: [
        {
          header: 'Support',
          links: [
            { label: '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.' },
            { label: 'shoptitude@gmail.com' },
            { label: '+88015-88888-9999' },
          ],
        },
        {
          header: 'Support',
          route: true,
          links: [
            { label: 'My Account', path: '/account' },
            { label: 'Login / Register', path: '/auth/login' },
            { label: 'Cart', path: '/cart' },
            { label: 'Wishlist', path: '/wishlist' },
            { label: 'Shop', path: '/' },
          ],
        },
        {
          header: 'Quick Link',
          route: true,
          links: [
            { label: 'Privacy Policy', path: '/' },
            { label: 'Terms of Use', path: '/' },
            { label: 'FAQ', path: '/' },
            { label: 'Contact', path: '/' },
          ],
        },
      ],
    }
  },
}
</script>

<template>
  <footer class="bg-primary mt-auto pt-20 pb-15">
    <div class="text-offWhite max-w-project_container mx-auto flex w-full justify-between">
      <!-- <div class="text-offWhite mx-auto flex w-full max-w-292.5 justify-between"> -->
      <!-- Logo -->
      <div class="basis-54 space-y-6">
        <p class="text-2xl font-bold">Shoptitude</p>
        <p class="text-xl font-medium">Subscribe</p>
        <div class="space-y-4">
          <p>Get 10% off your first order</p>
          <div class="relative">
            <input
              type="text"
              class="border-offWhite placeholdertext-offWhite w-full rounded border-[1.5px] bg-transparent py-3 ps-4 pe-12"
              placeholder="Enter your email"
            />
            <img
              src="@/assets/sendIcon.png"
              alt="send icon"
              class="absolute top-1/2 right-3 -translate-y-1/2"
            />
          </div>
        </div>
      </div>

      <!-- Links -->
      <div v-for="(item, i) in footerLinks" :key="i" class="basis-44 space-y-6">
        <p class="text-xl font-medium">
          {{ item.header }}
        </p>
        <div class="flex flex-col gap-4">
          <component
            :is="item.route ? 'RouterLink' : 'p'"
            :to="link.path"
            v-for="(link, linkIndex) in item.links"
            :key="linkIndex"
            >{{ link.label }}</component
          >
        </div>
      </div>

      <!-- Download -->
      <div class="basis-49.5 space-y-6">
        <p class="text-xl font-medium">Download App</p>

        <div>
          <p class="mb-2 text-xs font-medium">Save $3 with App New User Only</p>
          <div class="flex gap-2">
            <img src="@/assets/qrCode.png" alt="QR Code" class="size-20" />
            <div class="flex flex-col gap-0.5">
              <div class="h-10 w-27.5">
                <img src="@/assets/googlePlay.png" alt="google play store" class="size-full" />
              </div>
              <div class="h-10 w-27.5">
                <img src="@/assets/appleStore.png" alt="apple play store" class="size-full" />
              </div>
            </div>
          </div>
        </div>

        <!-- Social links -->
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
