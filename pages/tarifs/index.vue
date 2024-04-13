<script setup lang="ts">

</script>

<template>
  <h1 class="flex justify-end text-4xl text-primary font-dancing-script w-full mt-12 pr-24 mb-24">Tarifs</h1>
  <section class="flex flex-row flex-wrap h-auto dark:text-white justify-around">
    <UCard :ui="{
      divide: 'divide-white',
      ring: 'ring-0',
      shadow: 'shadow-none',
      base: 'w-full md:w-1/3 dark:text-white',
      footer: {
        base: 'flex justify-center',
      }}
    ">
      <template #header>
        <h2 class="text-primary font-dancing-script text-2xl text-center h-[110px]">Accompagnement Doula</h2>
      </template>
      <template #footer>
        <UButton variant="outline" color="primary" to="/tarifs/accompagnement-doula">En savoir plus</UButton>
      </template>
    </UCard>
    <UCard :ui="{
      divide: 'divide-white',
      ring: 'ring-0',
      shadow: 'shadow-none',
      base: 'w-full md:w-1/3 dark:text-white',
      footer: {
        base: 'flex justify-center',
      }}
    ">
      <template #header>
        <h2 class="text-primary font-dancing-script text-2xl text-center h-[110px]">Accompagnement Hypnonatal</h2>
      </template>
      <template #footer>
        <UButton variant="outline" color="primary" to="/tarifs/accompagnement-hypnotal">En savoir plus</UButton>
      </template>
    </UCard>
    <UCard :ui="{
      divide: 'divide-white',
      ring: 'ring-0',
      shadow: 'shadow-none',
      base: 'w-full md:w-1/3 dark:text-white',
      footer: {
        base: 'flex justify-center',
      }}
    ">
      <template #header>
        <h2 class="text-primary font-dancing-script text-2xl text-center h-[110px]">Energetique</h2>
      </template>
      <template #footer>
        <UButton variant="outline" color="primary" to="/tarifs/energetique">En savoir plus</UButton>
      </template>
    </UCard>
    <UCard :ui="{
      divide: 'divide-primary-200 divide-dashed dark:divide-gray-900 mt-4',
      ring: 'ring-0',
      shadow: 'shadow-none',
      base: 'w-full col-span-3 text-center self-center text-black bg-primary mt-24 mb-24 dark:text-white',
      background: 'bg-primary-100 dark:bg-gray-900',
      footer: {
        base: 'flex flex-col justify-center text-center',
      }}
    ">
      <p class="ml-32 mr-32">
        Notre Première rencontre par zoom est offerte (pour les forfaits). Pour tout déplacement au delà de 30Km
        de mon domicile, des frais kilométriques pourront être demandés.<br><br>

        L'accompagnement par une Doula est un cadeau précieux : vous pouvez vous le faire offrir en cadeau de
        naissance ou bien le financer grâce à la prime de naissance de votre mutuelle.<br><br>

        Le règlement peut être effectué en plusieurs versements.
      </p>
      <template #footer>
        <p class="ml-32 mr-32">
          Parlons- en !<br>
          L'argent ne doit pas être un frein à votre accompagnement.
          Je reste à votre écoute pour trouver des solutions qui conviennent à tout le monde.
        </p>
        <UButton variant="outline" color="primary" to="/contact" :ui="{ base: 'text-center m-auto mt-4'}">Me contacter</UButton>
      </template>
    </UCard>
    <UCard :ui="{
      divide: 'divide-white',
      ring: 'ring-0',
      shadow: 'shadow-none',
      base: 'w-full md:w-1/3 dark:text-white',
      footer: {
        base: 'flex justify-center',
      }}
    ">
      <template #header>
        <h2 class="text-primary font-dancing-script text-2xl text-center h-[110px]">Naturopathie</h2>
      </template>
      <template #footer>
        <UButton variant="outline" color="primary" to="/tarifs/naturopathie">En savoir plus</UButton>
      </template>
    </UCard>
    <UCard :ui="{
      divide: 'divide-white',
      ring: 'ring-0',
      shadow: 'shadow-none',
      base: 'w-full md:w-1/3',
      footer: {
        base: 'flex justify-center',
      }}
    ">
      <template #header>
        <h2 class="text-primary font-dancing-script text-2xl text-center h-[110px]">Célébration</h2>
      </template>
      <template #footer>
        <UButton variant="outline" color="primary" to="/tarifs/celebration">En savoir plus</UButton>
      </template>
    </UCard>
  </section>
</template>

<style scoped>

</style>