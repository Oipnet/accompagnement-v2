<script setup lang="ts">
  import {useServices} from "~/composables/useServices";

  const services = useServices();
</script>

<template>
  <section class="flex sm:flex-row flex-col">
    <service-item v-for="service in services" :key="service.slug" :service="service" />
  </section>
</template>

<style scoped>

</style>