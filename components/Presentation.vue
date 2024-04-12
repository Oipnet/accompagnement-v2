<script setup lang="ts">
const presentation = (await useAsyncData('presentation', () => queryContent('/presentation').findOne())).data
</script>

<template>
  <section class="flex sm:flex-row flex-col-reverse">
    <UCard :ui="{
      divide: 'divide-white',
      ring: 'ring-0',
      shadow: 'shadow-none',
      base: 'sm:w-2/5 w-full m-auto',
      footer: {
        base: 'flex justify-center',
      }
    }">
      <p class="text-center text-secondary">
        <ContentRenderer :value="presentation" />
      </p>
    </UCard>
    <nuxt-img
        preload
        src="/images/karen.webp"
        alt="Karen"
        class="h-[300px] sm:rounded-full w-full sm:h-[400px] sm:w-[400px] object-cover shadow-lg m-auto hover:scale-105 transition ease-in-out"
    />
  </section>
</template>

<style scoped>

</style>