<template>
    <div
        id="welcome"
        class="w-full h-max bg-background flex justify-between items-center p-8 shadow-2xl lg:px-20"
    >
        <div class="flex items-center gap-4">
            <div
                v-if="logoContent"
                v-html="logoContent"
                class="md:w-[1.8rem] h-max w-[1.2rem] z-40 fill-secondary"
            ></div>
            <!-- <h4 class="text-primary w-max font-bold">Haileab Tesfaye</h4> -->
        </div>
        <nav class="w-full right-14 z-40 mix-blend-difference">
            <div
                class="w-full scroll-smooth flex gap-5 justify-end px-0 lg:px-4"
            >
                <a
                    v-for="link in links"
                    :href="link.url"
                    :key="link.url"
                    class="pointer-grow relative group text-xs md:text-sm text-dark-normal-text text-tertiary transition-all"
                    >{{ link.text }}
                    <span
                        class="absolute -bottom-0.5 left-0 w-0 bg-dark-header-text h-px group-hover:w-full transition-all"
                    ></span>
                </a>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
interface NavBarLinks {
    text: string;
    url: string;
}

const logoContent = ref();

const links: NavBarLinks[] = [
    // {
    //     text: "Welcome",
    //     url: "#welcome",
    // },
    {
        text: "Bio",
        url: "#bio",
    },
    {
        text: "Projects",
        url: "#projects",
    },
    {
        text: "Skills",
        url: "#skills",
    },
];

const emit = defineEmits(["linkClicked"]);

const getLogo = async () => {
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
};

onMounted(() => {
    getLogo();
});
</script>
