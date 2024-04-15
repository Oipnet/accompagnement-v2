<template>
  <page-title title="Contactez moi" />
  <div class="flex flex-row mt-8 flex-wrap">
    <contact-summary />
    <div class="w-1/2 h-[500px] min-h-1/2 inline-block" v-if="viewport.isGreaterThan('mobileWide')">
      <contact-map :latlng="[44.594148017743, -0.331121971985]" />
    </div>
    <contact-form />
  </div>
</template>

<script setup lang="ts">

import ContactForm from "~/components/contact/ContactForm.vue";
import ContactMap from "~/components/contact/ContactMap.vue";
import ContactSummary from "~/components/contact/ContactSummary.vue";
import PageTitle from "~/components/PageTitle.vue";

const viewport = useViewport()

</script>