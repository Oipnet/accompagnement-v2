<script setup lang="ts">

const { valeur, isOdd } = defineProps(['valeur', 'isOdd'])
const { data } = await useAsyncData('data', () => queryContent('/valeurs', valeur.slug).findOne())
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center">
    <div class="text-center align-middle mb-4 sm:mb-0 col-span-1" :class="{ 'col-start-2': isOdd }">
      <h2 class="text-primary font-dancing-script text-2xl text-center mb-8">{{ valeur.title }}</h2>
      <div>
        <ContentRenderer :value="data"></ContentRenderer>
      </div>
    </div>
    <div class="flex justify-center col-span-1" :class="{ 'col-start-1': isOdd, 'row-start-1': isOdd }">
      <nuxt-img :src="valeur.image" alt="Coeur" class="w-auto sm:w-[400px] rounded-xl" />
    </div>
  </div>
</template>

<style scoped>
</style>