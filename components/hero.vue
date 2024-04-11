<script setup lang="ts">

</script>

<template>
  <section class="flex sm:flex-row mt-[64px] flex-col-reverse">
    <UCard :ui="{
      divide: 'divide-white',
      ring: 'ring-0',
      shadow: 'shadow-none',
      base: 'sm:w-2/3 w-full',
      footer: {
        base: 'flex justify-center',
      }
    }">
      <template #header>
        <h1 class="text-3xl text-primary uppercase text-center font-dancing-script">Karen Accompagnement Sacre</h1>
      </template>
      <p class="text-center text-secondary">
        Moi, c'est Karen, 34 ans, je vis dans la région bordelaise avec mon mari (mon pilier) et mes 3 enfants.<br class="mb-4" />

        Depuis toujours, j’ai des perceptions extra-sensorielles et j'ai appris à les utiliser pour accompagner les âmes qui en ont besoin, notamment lors de notre entrée ou sortie de ce monde.
      </p>
      <template #footer>
        <UButton variant="outline" color="primary" to="/contact">En savoir plus</UButton>
      </template>
    </UCard>
    <nuxt-img
        src="/images/karen.webp"
        alt="Karen"
        class="h-[300px] sm:rounded-full w-full sm:h-[250px] sm:w-[250px] object-cover shadow-lg m-auto hover:scale-105 transition ease-in-out"
    />
  </section>
</template>

<style scoped>

</style>