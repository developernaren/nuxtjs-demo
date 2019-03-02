<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div v-if="error" class="alert error">{{ error }}</div>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      </div>
      <div class="flex items-center justify-between">
        <button
          @click.prevent="login"
          class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
      </div>
    </form>
    <p class="text-center text-grey text-xs">
      &copy; Naren's Real Estate Empire
    </p>
  </div>
</template>

<script>
  export default {
    layout : 'login',
    methods : {
      async login(){
        this.error = null
        try {
          await this.$auth.loginWith('local',{
            data: {
              email: this.email,
              password: this.password
            }
          })

          this.$router.push({ name : 'index'})

        } catch (error) {

          this.error = error.response.data.message
        }
      }
    },
    data(){
      return  {
        email : '',
        password : '',
        error : null
      }
    }
  }
</script>
