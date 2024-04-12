<script setup lang="ts">
import {useServices} from "~/composables/useServices";

const services = useServices();
</script>

<template>
  <h1 class="flex justify-end text-4xl text-primary font-dancing-script w-full mt-12 pr-24">Services</h1>
  <div class="grid grid-cols-2">
    <div
        v-for="service in services"
        class="p-6 w-full flex flex-col hover:scale-105 hover:cursor-pointer transition ease-in-out" @click="router.push(url)">
      <nuxt-img :src="service.image" alt="" loading="lazy" preload class="m-auto w-[200px] h-auto" />
      <nuxt-link :to="url" class="text-bold text-center text-secondary">{{ service.name }}</nuxt-link>
    </div>
  </div>
</template>

<style scoped>

</style>