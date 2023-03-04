export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      apiUrl:
        process.env.NODE_ENV === "development"
          ? process.env.API_URL
          : "本番URL",
    },
  },
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
