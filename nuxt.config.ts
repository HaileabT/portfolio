import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  app: {
    head: {
      script: [
        {
          textContent: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5NBV7B6F');
          `,
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: process.env.LOGO_CLOUDINARY_URL || "",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
          integrity:
            "sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/cloudinary",
  ],
  runtimeConfig: {
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    resendApiKey: process.env.RESEND_API_KEY,
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
    public: {
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
      logo_cloud_url: process.env.LOGO_CLOUDINARY_URL,
    },
  },
  googleFonts: {
    display: "auto",
    // stylePath: "~/assets/css/google-fonts.css",
    // fontsPath: "~/assets/fonts",
    families: {
      "Space Mono": true,
      "Luckiest Guy": true,
      Righteous: true
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
