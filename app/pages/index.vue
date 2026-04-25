<template>
    <div class="flex gap-4 bg-background w-svw h-svh">
        <div
            class="bg-card w-1/3 p-8 flex flex-col justify-center gap-8 text-primary">
            <div class="flex flex-col w-max">

                <div class="w-full">
                    <div v-if="logoContent" v-html="logoContent"
                        class="fill-secondary w-10">
                    </div>

                </div>
                <div class="w-full my-4">
                    <h1 class="text-2xl font-bold mb-0 pb-0">haileab tesfaye
                    </h1>
                    <p class="mt-0 pt-0">a fullstack dev</p>
                </div>
                <div v-if="socials && socials.length > 0"
                    class="flex w-full gap-2 text-secondary self-start">
                    <div v-for="s of socials" :key="s.link">
                        <NuxtLink :href="s.link" target="_blank">
                            <i :class="s.fontawesomeClass"
                                class="text-secondary text-lg hover:text-primary"
                                :title="s.site" />
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="w-full">
                <h2 class="text-primary/70 w-full">a little about me</h2>
                <p class="text-tertiary">I'm a backend focused fullstack
                    developer. If thats what you are looking for, hit me up and
                    let's work together.
                </p>
            </div>

            <div class="full">
                <div class="w-full h-px bg-secondary"></div>
                <p class="text-center text-tertiary/60 px-2 py-4">designed and
                    developed by
                    <NuxtLink href="github.com/haileabt" class="text-secondary">
                        Haileab Tesfaye</NuxtLink>
                </p>
                <p class="text-center text-tertiary/60 px-2 py-4"> {{ new
                    Date().getFullYear() }}
                </p>
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<script setup lang="ts">
const logoContent = ref<string>();

const { socials } = useSocials();

onMounted(async () => {
    if (useRuntimeConfig().public.logo_cloud_url) {
        console.log("logo url", useRuntimeConfig().public.logo_cloud_url)
        const res = await $fetch<any>(
            useRuntimeConfig().public.logo_cloud_url,
            {
                method: "GET",
                headers: {
                    "Content-Type": "text/html",
                },
            },
        ).catch((error) => console.error(error));
        if (!res) return;
        logoContent.value = await res.text();
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
