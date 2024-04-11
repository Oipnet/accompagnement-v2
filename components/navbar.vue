<script setup lang="ts">
import {useLinks} from "~/composables/useLinks";

const links = useLinks()
</script>

<template>
  <div class="mr-8">
    <UHorizontalNavigation :links="links" class="justify-end" :ui="{
      base: 'justify-end',
      after: 'after:h-0',
      active: 'border-b border-primary dark:bg-primary-400 rounded-none',
    }"/>
  </div>
</template>