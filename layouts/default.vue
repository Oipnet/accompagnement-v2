<template>
  <div class="font-roboto">
    <Navbar></Navbar>
    <UContainer>
      <slot />
    </UContainer>
    <footer class="bg-gray-800 mt-8 text-white">
      <div class="flex flex-col sm:flex-row pt-4">
        <div class="w-full sm:w-1/3">
          <h2 class="text-center text-primary font-dancing-script mb-2 text-2xl">Suivez-moi</h2>
          <UDivider :ui="{
            wrapper: {
              base: 'pl-8 pr-8'
            }
          }"></UDivider>
          <socials-lite />
        </div>
        <div class="w-full sm:w-1/3">
          <h2 class="text-center text-primary font-dancing-script mb-2 text-2xl">Vous et Moi</h2>
          <UDivider :ui="{
            wrapper: {
              base: 'pl-8 pr-8'
            }
          }"></UDivider>
          <ul class="text-center italic underline">
            <li class="flex flex-col">
              <nuxt-link to="/qui-suis-je" class="text-secondary mb-4 mt-2">Qui suis-je ?</nuxt-link>
              <nuxt-link to="/evenements" class="text-secondary mb-4">Evènements</nuxt-link>
              <nuxt-link to="/services" class="text-secondary mb-4">Services</nuxt-link>
              <nuxt-link to="/tarifs" class="text-secondary mb-4">Tarifs</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-1/3">
          <h2 class="text-center text-primary font-dancing-script mb-2 text-2xl">Pratique</h2>
          <UDivider :ui="{
            wrapper: {
              base: 'pl-8 pr-8'
            }
          }"></UDivider>
          <ul class="text-center italic underline">
            <li class="flex flex-col">
              <nuxt-link to="/contact" class="text-secondary mb-4">Me contacter</nuxt-link>
              <a href="/sitemap.xml" class="text-secondary mb-4 mt-2">Plan du site</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full m-auto text-center text-xs pb-4">
        ©2024 <nuxt-link to="https://forelse.info" class="text-secondary">Forelse</nuxt-link>
      </div>
    </footer>
    <SpeedInsights />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
const socials = useSocials();

useHead({
  link: [
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
  meta: [
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#fae9e3',
    },
  ],
})
</script>