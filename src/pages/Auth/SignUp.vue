<script>
import CustomButton from '@/components/CustomButton.vue'
import FormField from '@/components/FormField.vue'
import toast, { Toaster } from 'vue3-hot-toast'

export default {
  name: 'SignUp',

  data() {
    return {
      form: {
        name: '',
        userEmail: '',
        password: '',
      },
      localForm: { ...this.form },
    }
  },

  methods: {
    handleSubmit() {
      if (!this.localForm.name || !this.localForm.userEmail || !this.localForm.password) {
        return toast.error('Please fill in the fields')
      }
      if (this.localForm.name.length < 3) {
        return toast.error('Name must be longer than 2 characters')
      }

      const user =
        JSON.parse(localStorage.getItem('user')) || this.$store.getters['user/getMockedUser']

      // Don't create new account if user already exist
      if (
        user?.userEmail === this.localForm.userEmail &&
        user?.password === this.localForm.password
      ) {
        return toast.error('This email is already registered. Log in instead')
      }

      // create acct if user doesn't exist
      if (!user) {
        this.$store.dispatch('user/updateMockedUser', this.localForm)
        toast.success('Account created successfully. You will be redirected to log in')
        setTimeout(() => {
          this.$router.push('/auth/login')
        }, 2000)
      }
    },
  },

  components: { FormField, CustomButton, Toaster },
}
</script>
<template>
  <div class="mb-9 space-y-3">
    <h1 class="font-inter mb-6 text-4xl font-medium tracking-wider">Create an account</h1>
    <p class="">Enter your details below</p>

    <form class="mt-12" @submit.prevent="handleSubmit">
      <FormField class="mb-10" label="Name" inputType="text" v-model="localForm.name" />
      <FormField class="mb-10" label="Email" inputType="email" v-model="localForm.userEmail" />
      <FormField label="Password" inputType="password" v-model="localForm.password" />

      <CustomButton buttonText="Create Account" class="mt-10 w-full" />

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
        duration: 5000,
        style: {
          backgroundColor: 'rgb(248, 229, 229)',
          color: 'hsla(0, 68%, 56%, 1)',
          textAlign: 'center',
        },
      },
      success: {
        duration: 5000,
      },
    }"
  />
</template>

<style lang="scss" scoped></style>
