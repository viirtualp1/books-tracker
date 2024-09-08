// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['vuetify/styles', '@/assets/main.scss'],
  build: {
    transpile: ['vuetify'],
  },
})
