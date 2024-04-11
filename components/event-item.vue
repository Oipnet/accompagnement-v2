<script setup lang="ts">
  const { event } = defineProps(['event']);
</script>

<template>
  <div class="flex flex-row mb-2 gap-1">
    <nuxt-img :src="event.image" alt="" width="64px" height="64px" loading="lazy" preload></nuxt-img>
    <div class="text-secondary flex flex-col justify-center w-full">
      <nuxt-link :to="`/events/${event.slug}`" class="text-bold text-right">{{ event.title }}</nuxt-link>
      <span class="text-xs text-right w-full inline-block">{{ event.date }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>