<template>
  <div>
    <div v-for="building in buildings" class="mt-4">
      <nuxt-link :to="`/buildings/${building.slug}`">
      <div class="lg:flex mb-4">
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            :style="{backgroundImage: `url(${building.image})`}" :title="building.name">
          </div>
        <div
          class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">

            <div class="text-black font-bold text-xl mb-2">{{ building.name }}</div>
            <p class="text-grey-darker text-base">
              {{ building.description }}
            </p>
          </div>
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4"
                 src="https://www.gravatar.com/avatar/719a95c0aa48840deaf75741324a3289" alt="Avatar of Naren Chitrakar">
            <div class="text-sm">
              <p class="text-black leading-none">Naren Chitrakar</p>
            </div>
          </div>
        </div>
      </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $axios }){
      const buildings = (await $axios.get('/api/buildings')).data
      return {
          buildings
      }
    },
    head : {
      title : 'List of Tallest Buildings in the world',
      meta: [
        { hid: 'description', name: 'description', content: 'This is the description of the list page' },
        { hid: 'og:image', name: 'og:image', content: process.env.baseUrl + '/marina-23.jpg' },
      ],
    }
  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>

