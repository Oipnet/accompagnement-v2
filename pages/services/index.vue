<script setup lang="ts">
import {useRouter} from "vue-router";
import {useServices} from "~/composables/useServices";

const router = useRouter()
const services = useServices();

</script>

<template>
  <page-title title="Services" />
  <div class="grid grid-cols-2">
    <div
        v-for="service in services"
        class="p-6 w-full flex flex-col hover:scale-105 hover:cursor-pointer transition ease-in-out" @click="router.push(`/services/${service.slug}`)">
      <nuxt-img :src="service.image" alt="" loading="lazy" preload class="m-auto w-[200px] h-auto" />
      <nuxt-link :to="`/services/${service.slug}`" class="text-bold text-center text-secondary">{{ service.name }}</nuxt-link>
    </div>
  </div>
</template>

<style scoped>

</style>