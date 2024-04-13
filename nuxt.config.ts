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
  modules: [
    '@nuxt/ui',
    "@nuxt/image",
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/content',
    'nuxt-viewport',
    'nuxt-purgecss'
  ],
  googleFonts: {
    families: {
      'Dancing Script': [600],
      'Roboto': true,
    }
  }
})