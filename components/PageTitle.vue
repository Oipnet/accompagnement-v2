<script setup lang="ts">

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex justify-center md:justify-end text-4xl text-primary font-dancing-script w-full mt-12 pr-0 md:pr-24">
    <h1>{{ props.title}}</h1>
  </div>
</template>

<style scoped>

</style>