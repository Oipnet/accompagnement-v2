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
import {useFacebookMetas} from "~/composables/useFacebookMetas";
import {useTwitterMetas} from "~/composables/useTwitterMetas";

const description = "Découvrez Karen, offrant une gamme complète de services de soutien à la naissance et au post-partum. Explorez nos événements enrichissants et rejoignez notre communauté bienveillante. Suivez-nous sur les réseaux sociaux pour rester connecté(e) et inspiré(e) dans votre parcours de parentalité.";
const title = "Karen Accompagnement Sacré";

const baseMetas = useBaseMetas();
const facebookMetas = useFacebookMetas();
const twitterMetas = useTwitterMetas();

useSeoMeta({
  ...baseMetas,
  ...facebookMetas,
  ...twitterMetas
})
</script>