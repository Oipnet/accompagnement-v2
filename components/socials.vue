<script setup lang="ts">
  import { useSocials } from "~/composables/useSocials";
  import SocialItem from "~/components/social-item.vue";

  const socials = useSocials();
</script>

<template>
  <h2 class="text-center text-2xl text-bold text-primary mb-8">Réseaux sociaux</h2>
  <div class="flex flex-row gap-4">
    <social-item v-for="social in socials" :key="social.id" :social="social" />
  </div>
</template>

<style scoped>

</style>