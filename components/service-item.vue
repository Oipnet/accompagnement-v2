<script setup lang="ts">
import {useRouter} from "vue-router";


  const router = useRouter()
  const { service } = defineProps(['service'])
  const url = computed(() => `/services/${service.slug}`)
</script>

<template>
  <div class="p-6 w-full sm:w-1/4 flex flex-col hover:scale-105 hover:cursor-pointer transition ease-in-out" @click="router.push(url)">
    <nuxt-img :src="service.image" alt="" />
    <nuxt-link :to="url" class="text-bold text-center text-secondary">{{ service.name }}</nuxt-link>
  </div>
</template>

<style scoped>

</style>