<script setup lang="ts">
  const route = useRoute()
  console.log(route)
</script>

<template>
  <h1>Service {{ route.params.slug}}</h1>
</template>

<style scoped>

</style>