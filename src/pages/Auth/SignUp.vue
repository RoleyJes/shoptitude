<script>
import CustomButton from '@/components/CustomButton.vue'
import toast, { Toaster } from 'vue3-hot-toast'
import AuthFormField from '@/components/AuthFormField.vue'

export default {
  name: 'SignUp',

  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        userEmail: '',
        password: '',
      },
    }
  },

  methods: {
    handleSubmit() {
      if (!this.form.firstName || !this.form.userEmail || !this.form.password) {
        return toast.error('Please fill in the fields')
      }
      if (this.form.firstName.length < 3) {
        return toast.error('Name must be longer than 2 characters')
      }

      const user =
        JSON.parse(localStorage.getItem('user')) || this.$store.getters['user/getMockedUser']

      // Don't create new account if user already exist
      if (user?.userEmail === this.form.userEmail) {
        return toast.error(`This email is already registered.
        Log in instead`)
      }

      // create acct if user doesn't exist
      if (!user || user?.userEmail !== this.form.userEmail) {
        this.$store.dispatch('user/updateMockedUser', this.form)
        toast.success(`Account created successfully.
        You will be redirected to log in`)
        setTimeout(() => {
          this.$router.push('/auth/login')
        }, 1500)
      }
    },
  },

  components: { AuthFormField, CustomButton, Toaster },
}
</script>
<template>
  <div class="mb-9 space-y-3">
    <h1 class="font-inter mb-6 text-4xl font-medium tracking-wider">Create an account</h1>
    <p class="">Enter your details below</p>

    <form class="mt-12" @submit.prevent="handleSubmit">
      <AuthFormField class="mb-10" label="First Name" inputType="text" v-model="form.firstName" />
      <AuthFormField class="mb-10" label="Last Name" inputType="text" v-model="form.lastName" />
      <AuthFormField class="mb-10" label="Email" inputType="email" v-model="form.userEmail" />
      <AuthFormField label="Password" inputType="password" v-model="form.password" />

      <CustomButton buttonText="Create Account" :bgRed="true" class="mt-10 w-full" />

      <p class="text-primary/60 mt-8.5 text-center">
        <span>Already have account?</span>
        <RouterLink to="/auth/login" class="ms-4 font-medium underline underline-offset-8"
          >Log in</RouterLink
        >
      </p>
    </form>
  </div>

  <Toaster
    :toast-options="{
      error: {
        // duration: 5000,
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
