<script>
export default {
  name: 'Hero',

  data() {
    return {
      categories: [
        "Women's Fashion",
        "Men's Fashon",
        'Electronics',
        'Home & Lifestyle',
        'Medicine',
        'Sports & Outdoor',
        "Baby's & Toys",
        'Groceries & Pets',
        'Health & Beauy',
      ],
    }
  },
}
</script>

<template>
  <section class="mb-35">
    <div class="max-w-project_container divide-primary/10 mx-auto flex divide-x">
      <!-- Left section -->
      <section class="basis-58 pt-10">
        <ul class="flex flex-col gap-4">
          <li v-for="(category, i) in categories" :key="i">{{ category }}</li>
        </ul>
      </section>
      <!-- Right banner -->
      <section class="grow ps-11.5 pt-10">
        <div class="bg-primary flex w-full ps-16 pt-4 pb-6">
          <!-- Texts -->
          <div class="text-offWhite pt-10.5">
            <div class="mb-5 flex items-center gap-6">
              <img src="@/assets/home/appleLogo.png" alt="apple logo" />

              <p>iPhone 14 Series</p>
            </div>

            <p class="mb-5.5 text-5xl font-semibold">Up to 10% off Voucher</p>

            <p class="flex items-center gap-2 font-medium">
              <span>Shop Now</span>
              <img src="@/assets/arrowRightICon.png" alt="arrow right icon" />
            </p>
          </div>

          <!-- Image -->
          <div class="w-[496px">
            <img src="@/assets/home/heroPhone.png" alt="an iphone" class="w-[496px]" />
            ]
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
