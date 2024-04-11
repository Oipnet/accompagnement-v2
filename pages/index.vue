<template>
  <Hero />
  <section class="flex flex-row">
    <div class="p-6 w-1/4 flex flex-col">
      <nuxt-img src="/images/services/grossesse.png" alt="" />
      <nuxt-link to="/" class="text-bold text-center text-secondary">Accompagnement de Grossesse</nuxt-link>
    </div>
    <div class="p-6 w-1/4 flex flex-col">
      <nuxt-img src="/images/services/emotionnel.png" alt="" />
      <nuxt-link to="/" class="text-bold text-center text-secondary">Accompagnement Emotionnel</nuxt-link>
    </div>
    <div class="p-6 w-1/4 flex flex-col">
      <nuxt-img src="/images/services/naturotherapie.png" alt="" />
      <nuxt-link to="/" class="text-bold text-center text-secondary">Naturothérapie</nuxt-link>
    </div>
    <div class="p-6 w-1/4 flex flex-col">
      <nuxt-img src="/images/services/soins-energetiques.png" alt="" />
      <nuxt-link to="/" class="text-bold text-center text-secondary">Soins Energétiques</nuxt-link>
    </div>
  </section>
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
      <h2 class="text-center text-2xl text-bold text-primary mb-8">Réseaux sociaux</h2>
      <div class="flex flex-row gap-4">
        <div class="flex flex-row w-1/2">
          <nuxt-img src="/images/socials/facebook.png" alt="Facebook" width="64px" height="64px"></nuxt-img>
          <div class="flex flex-col ml-2">
            <span class="text-right">Karen Accompagnement Sacré</span>
            <span class="text-right text-xs text-secondary">282 followers • 2 following</span>
          </div>
        </div>
        <div class="flex flex-row w-1/2">
          <nuxt-img src="/images/socials/instagram.png" alt="Facebook" width="64px" height="64px"></nuxt-img>
          <div class="flex flex-col ml-2">
            <span class="text-right">Karen Accompagnement Sacré</span>
            <span class="text-right text-xs text-secondary">282 followers • 2 following</span>
          </div>
        </div>
      </div>
      <template #footer>
        <UButton variant="outline" color="primary" to="/contact" :ui="{ base: 'm-auto'}">Me contacter</UButton>
      </template>
    </UCard>
  </section>
</template>
<script setup lang="ts">
import Hero from "~/components/hero.vue";
import {useEvents} from "~/composables/useEvents";

const events = useEvents();
</script>