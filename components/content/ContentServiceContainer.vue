<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center">
    <div class="row-start-2 sm:row-auto">
      <slot name="description" />
    </div>
    <div>
      <slot name="illustration" />
    </div>
  </div>
  <div class="flew flew-row w-full text-center">
    <UButton variant="outline" color="primary" to="/tarifs">En savoir plus</UButton>
  </div>
</template>

<style scoped>

</style>