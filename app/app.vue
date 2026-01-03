<template>
    <VueLenis
        class="h-svh"
        root
        :options="{
            smoothWheel: true,
            autoRaf: true,
            lerp: 0.1,
            wheelMultiplier: 0.8,
        }"
    >
        <div class="w-full h-full bg-background overflow-x-hidden">
            <NuxtPage />
        </div>
    </VueLenis>
</template>

<script setup lang="ts">
import { useLenis } from "lenis/vue";

const lenis = useLenis();

useHead({
    title: "Haileab Tesfaye",
    htmlAttrs: {
        lang: "en-us",
    },
    meta: [
        {
            name: "keywords",
            content:
                "Haileab Tesfaye, Portfolio, Website, Nuxtjs, Nuxt, Vue, Lenis, Nodejs, Go, Typescript, JavaScript, HTML, CSS",
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

watch(
    lenis,
    () => {
        console.log("Lenis instance updated");
    },
    { immediate: true },
);
</script>
