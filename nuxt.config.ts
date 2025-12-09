// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  // devtools: { enabled: true },

  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "Harborough Resource Hub",
    },
  },

  plugins: ["./plugins/fontawesome.js"],

  modules: ["v-gsap-nuxt"],
  devtools: {
    enabled: false,
  },
});
