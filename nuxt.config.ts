// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["~/plugins/rellax/rellax.client"],
  ssr: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: process.env.LOGO_CLOUDINARY_URL || "",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt3-lenis",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "nuxt-svgo",
    "@nuxtjs/cloudinary",
  ],
  runtimeConfig: {
    logo_cloud_url: process.env.LOGO_CLOUDINARY_URL,
  },
  svgo: {
    autoImportPath: "~/assets/svg/",
  },
  googleFonts: {
    display: "auto",
    // stylePath: "~/assets/css/google-fonts.css",
    // fontsPath: "~/assets/fonts",
    families: {
      Poppins: true,
    },
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config.ts",
    exposeConfig: {
      level: 2,
    },
    viewer: true,
  },
});
