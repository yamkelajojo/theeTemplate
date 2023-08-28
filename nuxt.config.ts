// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon"],
  app: {
    head: {
      title: "ThaSto'",
      meta: [
        { name: "ThaSto", content: "Get your top Merchandise Right Here" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
    },
  },
  css: ["assets/css/global.css", "assets/css/animations.css"],
});
