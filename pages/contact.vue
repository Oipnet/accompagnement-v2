<template>
  <h1 class="flex justify-end text-4xl text-primary font-dancing-script w-full mt-12 pr-24">Contactez moi</h1>
  <div class="flex flex-row mt-8 flex-wrap">
    <div class="w-full flex flex-row flex-wrap text-center mb-8 justify-around">
      <div class="flex flex-col w-1/3 p-4">
        <UIcon name="i-heroicons-phone" class="m-auto mb-8 text-4xl text-primary"/>
        <h2 class="text-primary text-2xl font-bold font-dancing-script mb-4">Téléphone</h2>
        <a href="tel:0679660240" class="hover:underline">06 79 66 02 40</a>
      </div>
      <div class="flex flex-col w-1/3 p-4">
        <UIcon name="i-heroicons-map-pin" class="m-auto mb-8 text-4xl text-primary"/>
        <h2 class="text-primary text-2xl font-bold font-dancing-script mb-4">Adresse</h2>
        <address>
          10 Hallet Sud 33720 Barsac
        </address>
      </div>
      <div class="flex flex-col w-1/3 p-4">
        <UIcon name="i-heroicons-envelope-open" class="m-auto mb-8 text-4xl text-primary"/>
        <h2 class="text-primary text-2xl font-bold font-dancing-script mb-4">E-mail</h2>
        <a href="mailto:accompagnementsacre@gmail.com">accompagnementsacre@gmail.com</a>
      </div>
      <div class="flex flex-col w-1/3 p-4">
        <UIcon name="i-heroicons-globe-alt" class="m-auto mb-8 text-4xl text-primary"/>
        <h2 class="text-primary text-2xl font-bold font-dancing-script mb-4">Réseaux Sociaux</h2>
        <div class="translate-x-4">
          <social-item :social="socials[0]" :isLite="true" />
          <social-item :social="socials[1]" :isLite="true" />
        </div>
      </div>
    </div>
    <div class="w-1/2 h-[500px] min-h-1/2 inline-block">
      <contact-map :latlng="[44.594148017743, -0.331121971985]" />
    </div>
    <div class="w-1/2 pl-8">
      <contact-form />
    </div>
  </div>
</template>

<script setup lang="ts">

import ContactForm from "~/components/contact/ContactForm.vue";
import ContactMap from "~/components/contact/ContactMap.vue";

const socials = useSocials();

</script>