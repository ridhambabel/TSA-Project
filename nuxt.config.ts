// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "NAME",
    },
  },

  plugins: ["./plugins/fontawesome.js"],

  modules: ["v-gsap-nuxt"],
});
