<script setup lang="ts">
import {ref} from "vue";

const zoom = ref(15)
const props = defineProps<{
  latlng: [number, number]
}>()
</script>

<template>
  <LMap
      ref="map"
      :zoom="zoom"
      :center="props.latlng"
  >
    <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
    />
    <LMarker :lat-lng="props.latlng"> </LMarker>
  </LMap>
</template>

<style scoped>

</style>