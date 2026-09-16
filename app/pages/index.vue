<template>
    <div
        class="relative text-foreground flex flex-col xl:flex-row w-svw xl:h-svh h-svh overflow-hidden p-5 md:p-10 lg:p-15 xl:p-20">
        <NuxtImg src="/main-bg.png"
            class="[main.light_&]:hidden absolute object-cover! w-full h-full top-0 left-0 z-0" />
        <NuxtImg src="/main-bg-dark.png"
            class="[main.dark_&]:hidden absolute object-cover! w-full h-full top-0 left-0 z-0" />
        <div
            class="relative z-1 bg-card w-full h-max my-auto max-w-[1200px] max-h-[800px] mx-auto flex flex-col gap-8 p-4 md:p-8 overflow-y-auto">
            <NuxtLink
                class="cursor-pointer flex items-center gap-2 text-sm bg-foreground w-max  px-2 absolute top-4 right-4 text-background"
                href="https://drive.google.com/file/d/1N6trEdDI2ehYs1yGYT2_uCip0YtL5EEe/view?usp=drive_link"
                target="_blank">
                <Icon name="mdi:eye" /> <span>Resume</span>
            </NuxtLink>
            <div>
                <h1 class="text-foreground text-xl font-bold lowercase">Haileab
                    Tesfaye
                </h1>
                <p class="lowercase text-foreground/80">A fullstack
                    engineer</p>
                <div class="flex gap-2 mt-2">
                    <NuxtLink v-for="social of socials" :key="social.site"
                        :href="social.link">
                        <Icon :class="social.fontawesomeClass"
                            :name="`mdi:${social.site}`" />
                    </NuxtLink>
                </div>
            </div>

            <div class="flex gap-2 flex-col lg:flex-row">
                <div class="flex flex-col gap-2 w-full">
                    <h2>Experience</h2>
                    <Experience class="w-full!" />
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <h2>Projects</h2>
                    <Projects class="w-full!" />

                </div>
            </div>

        </div>
        <div
            class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 flex-col">

            <div class=" bg-card">
                <Skills />
            </div>

            <span class="self-center bg-card text-xs">@{{ new
                Date().getFullYear()
            }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const { socials } = useSocials();
</script>

<style scoped>
@media screen and (hover: none) {
    .cursor-follower {
        display: none !important;
    }
}
</style>
