// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  css: ['vuetify/styles', '@/assets/scss/main.scss'],

  build: {
    transpile: ['vuetify'],
  },

  modules: ['@pinia/nuxt'],
  compatibilityDate: '2024-09-08',
})
