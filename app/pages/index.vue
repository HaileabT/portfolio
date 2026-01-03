<template>
    <div>
        <div
            tabindex="-1"
            id="cursor-follower"
            class="pointer-events-none cursor-follower fixed bg-background z-5000 mix-blend-difference translate-x-[-50%] translate-y-[-50%] w-5 h-5 rounded-full"
        ></div>
        <div id="svg-container" class="svg-container bg-background">
            <Header
                @link-clicked="
                    (link) => {
                        useRouter().push(link.url);
                    }
                "
            />
        </div>
        <div class="flex flex-col gap-5 bg-background">
            <Barrier />
            <Bio />
            <Projects class="bg-background" />
            <Skills />

            <Contact />

            <div class="bg-background py-2">
                <Barrier />
            </div>
            <div class="fixed bottom-5 right-5 lg:right-10">
                <a
                    href="#contact"
                    class="pointer-grow lg:text-xl text-md text-background bg-primary"
                    >Contact Me</a
                >
            </div>

            <div class="py-5 px-5 bg-primary text-center">
                <h2>
                    Designed and implemented by
                    <a
                        href="https://www.github.com/haileabT"
                        target="_blank"
                        class="font-bold text-dark-sub-header-text pointer-grow"
                        >Haileab Tesfaye</a
                    >
                </h2>
                <div
                    class="flex gap-5 justify-center items-baseline row-start-2 md:row-start-1 py-2"
                >
                    <div>
                        <div
                            v-if="logoContent"
                            v-html="logoContent"
                            class="w-13 z-40 fill-background border-r-2 border-r-background pr-5"
                        ></div>
                    </div>
                    <ul class="flex gap-3">
                        <li
                            v-for="social in socials"
                            class="pointer-grow hover-effect-li"
                        >
                            <NuxtLink :href="social.link" target="_blank"
                                ><i
                                    :class="`${social.fontawesomeClass}`"
                                    class="text-xl md:text-3x text-background hover:text-tertiary"
                                ></i
                            ></NuxtLink>
                        </li>
                    </ul>
                </div>
                <p>{{ new Date().getFullYear() }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const logoContent = ref();

const { socials } = useSocials();

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
    ogImage: "/og-image.png",
    ogImageAlt: "Haileab Tesfaye",
    ogSiteName: "Haileab Tesfaye",
    ogDescription: "I'm Haileab Tesfaye; A Backend Developer.",
    twitterTitle: "Haileab Tesfaye",
    twitterImage: "/og-image.png",
    twitterImageAlt: "Haileab Tesfaye",
    twitterSite: "@haileabtesfaye",
    twitterCreator: "@haileabtesfaye",
    twitterCard: "summary_large_image",
    author: "Haileab Tesfaye",
    description: "I'm Haileab Tesfaye; A Backend Developer.",
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
});

const hRef = ref(null);
// console.log(useRuntimeConfig().logo_cloud_url);

onMounted(async () => {
    if (useRuntimeConfig().public.logo_cloud_url) {
        logoContent.value = await $fetch(
            useRuntimeConfig().public.logo_cloud_url,
            {
                method: "GET",
                headers: {
                    "Content-Type": "text/html",
                },
            },
        ).catch((error) => console.error(error));
        logoContent.value = await logoContent.value.text();
        // console.log(logoContent.value);
        logoContent.value = logoContent.value;
    }
    setTimeout(() => {
        return;
        // lenis.value.on("scroll", ScrollTrigger.update);

        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".svg",
                start: "10% 30%",
                end: "500% 10%",
                scrub: true,
                markers: false,
            },
        });
        const tl1 = gsap.timeline();

        if (window.scrollY >= 200) {
            tl1.to(".svg", {
                bottom: 90 + "%",
                left: 4 + "rem",
                y: 0 + "%",
                x: 0 + "%",
                width: 2.5 + "rem",
                height: 2.5 + "rem",
                ease: "ease.out",
            }).eventCallback("onComplete", () => {
                ScrollTrigger.refresh();
                ScrollTrigger.update();
                tl1.clear();
            });
        }

        document.addEventListener("mousemove", (e) => {
            // console.log(document.elementFromPoint(e.x, e.y));
            if (
                document
                    .elementFromPoint(e.clientX, e.clientY)
                    ?.classList.contains("pointer-grow")
            ) {
                gsap.to("#cursor-follower", {
                    scale: 4.3,
                    duration: 0.2,
                    ease: "ease.inOut",
                });
            } else if (
                document
                    .elementFromPoint(e.clientX, e.clientY)
                    ?.classList.contains("pointer-grow-special")
            ) {
                gsap.to("#cursor-follower", {
                    scale: 150,
                    duration: 1,
                    ease: "none",
                });
            } else {
                gsap.to("#cursor-follower", {
                    scale: 1,
                    duration: 0.2,
                    ease: "else.inOut",
                });
            }
            gsap.to("#cursor-follower", {
                left: e.clientX,
                top: e.clientY,
                overflow: "auto",
                duration: 0.2,
                ease: "none",
            });
        });
        tl.to(".svg", {
            bottom: 90 + "%",
            left: 4 + "rem",
            y: 0 + "%",
            x: 0 + "%",
            width: 2.5 + "rem",
            height: 2.5 + "rem",
            ease: "ease.out",
        });
    });
});
</script>

<style scoped>
@media screen and (hover: none) {
    .cursor-follower {
        display: none !important;
    }
}
</style>
