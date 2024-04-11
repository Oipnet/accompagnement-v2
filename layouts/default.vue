<template>
  <div class="font-roboto">
    <Navbar></Navbar>
    <UContainer>
      <slot />
    </UContainer>
    <footer class="h-[32px]"></footer>
    <SpeedInsights />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>