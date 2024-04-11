<template>
  <Hero />
  <Services />
  <section class="flex flex-col sm:flex-row mt-[64px] gap-4">
    <Events />
    <Socials />
  </section>
</template>
<script setup lang="ts">
import Hero from "~/components/hero.vue";
import Socials from "~/components/socials.vue";
import Events from "~/components/events.vue";


</script>