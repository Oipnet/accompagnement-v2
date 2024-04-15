<template>
  <h1 class="flex justify-end text-4xl text-primary font-dancing-script w-full mt-12 pr-24">Contactez moi</h1>
  <div class="flex flex-row mt-8 flex-wrap">
    <contact-summary />
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
import ContactSummary from "~/components/contact/ContactSummary.vue";

</script>