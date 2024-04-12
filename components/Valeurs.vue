<script setup lang="ts">
import ValeurItem from "~/components/ValeurItem.vue";

const valeurs = [
  {
    slug: 'amour',
    title: 'Amour',
    image: '/images/amour.webp'
  },
  {
    slug: 'bienveillance',
    title: 'Bienveillance',
    image: '/images/bienveillance.webp'
  },
  {
    slug: 'sacre',
    title: 'Sacré',
    image: '/images/sacre.webp'
  },
  {
    slug: 'harmonie',
    title: 'Harmonie',
    image: '/images/harmonie.webp'
  },
  {
    slug: 'espoir',
    title: 'Espoir ou respect/tolérance',
    image: '/images/espoir.webp'
  },
]
</script>

<template>
  <h1 class="flex justify-center text-4xl text-center sm:text-right text-primary font-dancing-script w-full mt-12 mb-10">
    Découvrir les valeurs qui m'animent
  </h1>
  <valeur-item v-for="(valeur, index) in valeurs" :key="valeur.slug" :valeur="valeur" :isOdd="index % 2 !== 0" />
</template>

<style scoped>

</style>