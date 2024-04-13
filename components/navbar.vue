<script setup lang="ts">
import {useLinks} from "~/composables/useLinks";

const viewport = useViewport()
const links = useLinks()
const isOpen = ref(false)
</script>

<template>
  <div v-if="viewport.isGreaterThan('mobileWide')">
    <UHorizontalNavigation :links="links" class="justify-end" :ui="{
      base: 'justify-end',
      after: 'after:h-0',
      active: 'border-b border-primary dark:bg-primary-400 rounded-none',
    }"/>
  </div>
  <div v-if="! viewport.isGreaterThan('mobileWide')">
    <UButton @click="isOpen = !isOpen" variant="outline" :ui="{
base: 'm-4'
    }">
      <div class="space-y-2">
        <div class="w-8 h-0.5 bg-primary"></div>
        <div class="w-8 h-0.5 bg-primary"></div>
        <div class="w-8 h-0.5 bg-primary"></div>
      </div>
    </UButton>
    <USlideover v-model="isOpen">
      <div class="p-4 flex-1">
        <ul>
          <li v-for="link in links" class="m-auto text-center">
            <nuxt-link :to="link.to" class="text-primary text-center m-4 inline-block ">{{ link.label }}</nuxt-link>
          </li>
        </ul>
      </div>
    </USlideover>
  </div>
</template>