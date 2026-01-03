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
const logoContent = ref();

const { socials } = useSocials();

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
        logoContent.value = logoContent.value;
    }
});
</script>

<style scoped>
@media screen and (hover: none) {
    .cursor-follower {
        display: none !important;
    }
}
</style>
