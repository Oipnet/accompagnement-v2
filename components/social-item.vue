<script setup lang="ts">
  import {useRouter} from "vue-router";

  const router = useRouter()

  const { social } = defineProps(['social']);
</script>

<template>
  <div class="flex flex-row w-full sm:w-1/2 hover:scale-105 hover:cursor-pointer transition ease-in-out" @click.prevent="navigateTo(social.url, {
    open: {
      target: '_blank'
    }
  })">
    <nuxt-img :src="social.icon" :alt="social.name" width="64px" height="64px"></nuxt-img>
    <div class="flex flex-col ml-2">
      <nuxt-link :to="social.url" target="_blank" class="text-right">{{ social.name }}</nuxt-link>
      <span class="text-right text-xs text-secondary">{{ social.followers }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>