<template>
  <Hero />
  <Services />
  <section class="flex flex-row mt-[64px] gap-4">
    <UCard
      :ui="{
        divide: 'divide-white',
        ring: 'ring-0',
        shadow: 'shadow-none',
        base: 'w-1/3 border border-secondary',
      }"
    >
      <h2 class="text-center text-2xl text-bold text-primary mb-8">Evènements</h2>
      <div v-for="event in events" :key="event.slug" class="flex flex-row mb-2 gap-1">
        <nuxt-img :src="event.image" alt="" width="64px" height="64px"></nuxt-img>
        <div class="text-secondary flex flex-col justify-center w-full">
          <nuxt-link :to="`/events/${event.slug}`" class="text-bold text-right">{{ event.title }}</nuxt-link>
          <span class="text-xs text-right w-full inline-block">{{ event.date }}</span>
        </div>
      </div>
    </UCard>
    <UCard
        :ui="{
          divide: 'divide-white',
          ring: 'ring-0',
          shadow: 'shadow-none',
          base: 'w-2/3',
          footer: {
            base: 'flex justify-center'
          }
      }">
      <Socials />
      <template #footer>
        <UButton variant="outline" color="primary" to="/contact" :ui="{ base: 'm-auto'}">Me contacter</UButton>
      </template>
    </UCard>
  </section>
</template>
<script setup lang="ts">
import Hero from "~/components/hero.vue";
import {useEvents} from "~/composables/useEvents";
import Socials from "~/components/socials.vue";

const events = useEvents();
</script>