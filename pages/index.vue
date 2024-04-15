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

const description = "Découvrez Karen, offrant une gamme complète de services de soutien à la naissance et au post-partum. Explorez nos événements enrichissants et rejoignez notre communauté bienveillante. Suivez-nous sur les réseaux sociaux pour rester connecté(e) et inspiré(e) dans votre parcours de parentalité.";
const title = "Karen Accompagnement Sacré";

useSeoMeta({
  description,
  title,
  'og:title': title,
  'twitter:title': title,
  'og:description': description,
  'twitter:description': description,
  'og:type': 'website',
  'twitter:card': 'website',
  'twitter:image': '/images/karen.webp',
})
</script>