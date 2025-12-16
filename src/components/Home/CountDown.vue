<script>
export default {
  name: 'CountDown',

  data() {
    return {
      now: Date.now(),
      targetDate: null,
      timer: null,
    }
  },

  computed: {
    timeLeft() {
      const diff = this.targetDate - this.now

      if (diff <= 0) {
        return {
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        }
      }

      const seconds = Math.floor((diff / 1000) % 60)
      const minutes = Math.floor((diff / 1000 / 60) % 60)
      const hours = Math.floor((diff / 1000 / 60 / 60) % 24)
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))

      return {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      }
    },
  },

  mounted() {
    const THREE_AND_HALF_DAYS = (3 * 24 + 12) * 60 * 60 * 1000 // 84 hours in ms

    this.targetDate = Date.now() + THREE_AND_HALF_DAYS

    this.timer = setInterval(() => {
      this.now = Date.now()
    }, 1000)
  },

  beforeUnmount() {
    clearInterval(this.timer)
  },
}
</script>

<template>
  <div class="flex items-center gap-4.5">
    <p>{{ calcCountdown }}</p>
    <!-- Days -->
    <div class="space-y-1">
      <p class="text-xs font-medium">Days</p>
      <p class="font-inter text-[32px] leading-[30px] font-bold">{{ timeLeft.days }}</p>
    </div>
    <div class="flex flex-col gap-3">
      <span class="bg-red size-1 rounded-full"></span>
      <span class="bg-red size-1 rounded-full"></span>
    </div>
    <!-- Hours -->
    <div class="space-y-1">
      <p class="text-xs font-medium">Hours</p>
      <p class="font-inter text-[32px] leading-[30px] font-bold">{{ timeLeft.hours }}</p>
    </div>
    <div class="flex flex-col gap-3">
      <span class="bg-red size-1 rounded-full"></span>
      <span class="bg-red size-1 rounded-full"></span>
    </div>
    <!-- Minutes -->
    <div class="space-y-1">
      <p class="text-xs font-medium">Minutes</p>
      <p class="font-inter text-[32px] leading-[30px] font-bold">{{ timeLeft.minutes }}</p>
    </div>
    <div class="flex flex-col gap-3">
      <span class="bg-red size-1 rounded-full"></span>
      <span class="bg-red size-1 rounded-full"></span>
    </div>
    <!-- Seconds -->
    <div class="space-y-1">
      <p class="text-xs font-medium">Seconds</p>
      <p class="font-inter text-[32px] leading-[30px] font-bold">{{ timeLeft.seconds }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
