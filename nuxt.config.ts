// https://nuxt.com/docs/api/configuration/nuxt-config
import colors from "tailwindcss/colors";

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    preference: 'light'
  },
  modules: [
    '@nuxt/ui',
    "@nuxt/image",
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/content',
    'nuxt-viewport',
    'nuxt3-leaflet',
  ],
  googleFonts: {
    families: {
      'Dancing Script': [600],
      'Roboto': true,
    }
  },
  runtimeConfig: {
    sendApiKey: process.env.SEND_API_KEY,
    senderEmail: process.env.SENDER_EMAIL,
  }
})