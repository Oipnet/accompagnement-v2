<template>
  <h1 class="flex justify-end text-4xl text-primary font-dancing-script w-full mt-12 pr-24">Contactez moi</h1>
  <div class="flex flex-row gap-8 mt-8">
    <div class="w-1/2 h-[500px] min-h-1/2 inline-block">
      <LMap
          ref="map"
          :zoom="zoom"
          :center="[44.594148017743, -0.331121971985]"
      >
        <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
        />
        <LMarker :lat-lng="[44.594148017743, -0.331121971985]"> </LMarker>
      </LMap>
    </div>
    <UForm :schema="schema" :state="state" class="w-1/2" @submit="onSubmit">
      <UFormGroup label="Email" name="email" class="mb-8">
        <UInput v-model="state.email" />
      </UFormGroup>
      <UFormGroup label="Sujet" name="subject" class="mb-8">
        <UInput v-model="state.subject" />
      </UFormGroup>
      <UFormGroup label="Message" name="message" class="mb-8">
        <UTextarea v-model="state.message" />
      </UFormGroup>
      <UButton block variant="outline" type="submit">
        Envoyer
      </UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import {object, string, type InferType} from "yup";
const zoom = ref(15)

const schema = object({
  email: string().email('L\'email n\'est pas valide').required('L\'email est obligatoire'),
  subject: string().required('Le sujet est obligatoire'),
  message: string().required('Le message est obligatoire')
})

const state = reactive({
  email: undefined,
  subject: undefined,
  message: undefined
})

type Schema = InferType<typeof schema>

async function onSubmit (event: FormSubmitEvent<Schema>) {
  let message = {
    reply_to: {
      email: state.email
    },
    to: [{
      email: 'contact@forelse.info'
    }],
    subject: state.subject,
    text: state.message
  }

  const { data } = await useFetch('/api/sendgrid', {
    method: 'POST',
    body: message
  });

  console.log(data)
}

</script>