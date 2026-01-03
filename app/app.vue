<template>
    <div class="w-full h-svh bg-background overflow-x-hidden">
        <!-- <VueReCaptcha /> -->
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "Haileab Tesfaye",
    htmlAttrs: {
        lang: "en-us",
    },
    meta: [
        {
            name: "keywords",
            content:
                "Haileab Tesfaye, Portfolio, Website, Nuxtjs, Nuxt, Vue, GSAP, Lenis, Nodejs, Go, Typescript, JavaScript, HTML, CSS",
        },
        {
            name: "author",
            content: "Haileab Tesfaye",
        },
        {
            name: "description",
            content: "I'm Haileab Tesfaye; A Backend Developer.",
        },
    ],
});

useSeoMeta({
    ogTitle: "Haileab Tesfaye",
    ogImage: "/preview.jpg",
    ogImageAlt: "Haileab Tesfaye",
    ogSiteName: "Haileab Tesfaye",
    ogDescription: "I'm Haileab Tesfaye; A Backend Developer.",
    twitterTitle: "Haileab Tesfaye",
    twitterImage: "/preview.jpg",
    twitterImageAlt: "Haileab Tesfaye",
    twitterSite: "@haileabtesfaye",
    twitterCreator: "@haileabtesfaye",
    twitterCard: "summary_large_image",
    author: "Haileab Tesfaye",
    description: "I'm Haileab Tesfaye; A Backend Developer.",
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
});
</script>
