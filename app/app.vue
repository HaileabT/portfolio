<template>
    <!-- <VueLenis root :options="{
        smoothWheel: true,
        autoRaf: true,
        lerp: 0.1,
        wheelMultiplier: 0.8,
    }"> -->
    <div class="w-full h-full bg-background overflow-x-hidden font-primary"
        :class="`${theme}`">
        <button
            class="fixed top-2 right-2 bg-secondary px-2 cursor-pointer flex justify-center min-w-[80px] border-black border"
            @click="toggleTheme">{{ dark
                ? "light" : "dark" }}</button>
        <NuxtPage />
    </div>
    <!-- </VueLenis> -->

    <noscript><iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NBV7B6F"
            height="0" width="0"
            style="display: none; visibility: hidden"></iframe></noscript>
</template>

<script setup lang="ts">
const dark = ref(true);

const theme = computed(() => {
    if (dark.value) return "dark";
    else ""
})

const toggleTheme = () => {
    dark.value = !dark.value;
}

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
    ogImage: "https://haileabtesfaye.dev/preview.jpg",
    ogImageAlt: "Haileab Tesfaye",
    ogSiteName: "Haileab Tesfaye",
    ogDescription: "I'm Haileab Tesfaye; A Backend Developer.",
    twitterTitle: "Haileab Tesfaye",
    twitterImage: "https://haileabtesfaye.dev/preview.jpg",
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
