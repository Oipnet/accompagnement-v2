<script setup lang="ts">
import type { NuxtError } from '#app'
import {useHttpStatus} from "~/composables/useHttpStatus";

definePageMeta({
  layout: 'error'
})

const httpStatusCode = useHttpStatus()

const props = defineProps({
  error: Object as () => NuxtError
})

const errorLabel = computed(() => {
  return httpStatusCode.find((status) => status.code === props.error.statusCode)?.label
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout name="404">
    <page-title title="Une erreur est survenue" class="mb-24" />
    <div class="flex flex-row mt-12 mb-12">
      <h2 class="text-2xl font-dancing-script w-1/2 text-primary">{{ error.statusCode }} - {{ errorLabel }}</h2>
      <nuxt-img
          preload
          src="/images/karen.webp"
          alt="Karen"
          class="justify-end h-[300px] sm:rounded-full w-full sm:h-[250px] sm:w-[250px] object-cover shadow-lg m-auto hover:scale-105 transition ease-in-out"
      />
    </div>
    <blockquote class="mt-12 mb-12 text-center text-secondary">
      «Guérir, c'est toucher avec de l’Amour
      ce qui a précédemment été touché par la peur.» Stephen Levine
    </blockquote>
    <UButton variant="outline" block @click="handleError" class="mt-12 mb-12">Revenir à l'accueil</UButton>
  </NuxtLayout>
</template>