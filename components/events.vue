<script setup lang="ts">
import {useEvents} from "~/composables/useEvents";

const events = useEvents();
</script>

<template>
  <UCard
      :ui="{
        divide: 'divide-white',
        ring: 'ring-0',
        shadow: 'shadow-none',
        base: 'w-1/3 border border-secondary',
      }"
  >
    <h2 class="text-center text-2xl text-bold text-primary mb-8 font-dancing-script">Evènements</h2>
    <event-item v-for="event in events" :key="event.slug" :event="event" />
  </UCard>
</template>

<style scoped>

</style>