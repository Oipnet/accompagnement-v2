<script setup lang="ts">
import {type InferType, object, string} from "yup";

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
}

</script>

<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit">
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
</template>

<style scoped>

</style>