<script>
import CustomButton from '@/components/CustomButton.vue'
import toast, { Toaster } from 'vue3-hot-toast'
import AuthFormField from '@/components/AuthFormField.vue'

export default {
  name: 'LogIn',
  data() {
    return {
      form: {
        userEmail: '',
        password: '',
      },
      localForm: { ...this.form },
    }
  },

  methods: {
    handleSubmit() {
      const MockedUser = this.getMockedUser

      if (!MockedUser && this.localForm) {
        toast.error('Account does not exist', {
          duration: 1500,
        })
        setTimeout(() => {
          return this.$router.push('/auth/signup')
        }, 1500)
        return
      }

      const { userEmail, password, name } = MockedUser

      if (userEmail !== this.localForm.userEmail || password !== this.localForm.password) {
        return toast.error('Incorrect login details')
      }

      if (userEmail === this.localForm.userEmail && password === this.localForm.password) {
        localStorage.setItem('user', JSON.stringify(MockedUser))
        this.$store.dispatch('user/updateloggedInUser', { ...this.localForm, name })
        return this.$router.push('/')
      }
    },
  },

  computed: {
    getloggedInUser() {
      return this.$store.getters['user/getloggedInUser']
    },
    getMockedUser() {
      return this.$store.getters['user/getMockedUser']
    },
  },
  components: { AuthFormField, CustomButton, Toaster },
}
</script>
<template>
  <div class="mb-9 space-y-3">
    <h1 class="font-inter mb-6 text-4xl font-medium tracking-wider">Log in to Shoptitude</h1>
    <p class="">Enter your details below</p>

    <form class="mt-12" @submit.prevent="handleSubmit">
      <AuthFormField
        class="mb-10"
        label="Email or Phone Number"
        inputType="text"
        v-model="localForm.userEmail"
      />
      <AuthFormField label="Password" inputType="password" v-model="localForm.password" />

      <div class="mt-10 flex items-center justify-between gap-3">
        <CustomButton buttonText="Log In" :bgRed="true" class="w-35.5" />

        <p class="text-primary/60">
          <span>No account?</span>
          <RouterLink to="/auth/signup" class="ms-2 font-medium underline underline-offset-8"
            >Sign Up</RouterLink
          >
        </p>
      </div>
    </form>
  </div>

  <Toaster
    :toast-options="{
      error: {
        duration: 5000,
        style: {
          backgroundColor: 'rgb(248, 229, 229)',
          color: 'hsla(0, 68%, 56%, 1)',
          textAlign: 'center',
        },
      },
    }"
  />
</template>

<style lang="scss" scoped></style>
