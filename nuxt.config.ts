// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// import vuetifySass from "@paro-paro/vite-plugin-vuetify-sass";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      apiUrl: 'http://localhost/',
      backendUrl: 'http://localhost/',
    }

  },
  // sadasdsasd
  devtools: { enabled: true },
  css: ['~/assets/style.css'],
  build: {
    transpile: ['vuetify', 'vue-toastification'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({
          autoImport: true,

        }),
          // vuetifySass({
          //   configFile: "assets/variables.scss",
          // })
        )
      })
    },
    //...
    'nuxt-swiper', '@pinia/nuxt', 'nuxt-tiptap-editor'
  ],
  tiptap: {
    lowlight: {
      theme: 'github-dark',
    },
    prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },

  },
})
