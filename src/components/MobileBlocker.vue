<template>
  <div class="mobile-blocker">
    <div>
      <h2>This application is only available on desktop.</h2>
      <p>Please use a desktop device to access Shoptitude.</p>
    </div>
  </div>
</template>

<style scoped>
.mobile-blocker {
  position: fixed;
  inset: 0;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  z-index: 99999;
  font-size: 1.3rem;
}
</style>
