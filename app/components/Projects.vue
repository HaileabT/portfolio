<template>
    <div
        id="projects"
        class="bg-dark-sub-header-text scroll-smooth px-8 lg:px-20 md:px-10 flex flex-col gap-10"
    >
        <div>
            <h2
                class="text-background w-max bg-secondary font-extrabold text-2xl"
            >
                My Works
            </h2>
        </div>
        <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <NuxtLink
                target="_blank"
                v-for="project in projects"
                :key="project.title"
                :to="project.link || '#'"
                class="cursor-pointer pointer-grow bg-backgroun border border-primary text-primary p-4 w-full rounded-md"
            >
                <NuxtImg
                    :src="project.picture"
                    class="pointer-grow mb-4 rounded-[0.3rem]"
                />
                <h2
                    class="pointer-grow text-primary text-xl font-semibold mb-2"
                >
                    {{ project.title }}
                </h2>
                <p class="pointer-grow text-tertiary mb-4">
                    {{ project.description }}
                </p>

                <div
                    v-if="project.partners && project.partners.length >= 1"
                    class="pointer-grow mb-4"
                >
                    <h4 class="text-primary mb-2">With:</h4>
                    <div class="flex flex-row gap-2">
                        <NuxtLink
                            v-for="partner in project.partners"
                            :key="partner.name"
                            :href="partner.link"
                            target="_blank"
                            class="pointer-grow rounded-sm font-bold text-secondary underline"
                            >{{ partner.name }}</NuxtLink
                        >
                    </div>
                </div>

                <div class="flex gap-4 flex-wrap">
                    <div
                        v-for="tech in project.tech"
                        :key="tech.title"
                        class="bg-primary text-background p-2 rounded-sm"
                        :title="tech.description"
                    >
                        <h4 class="text-sm font-bold cursor-help">
                            {{ tech.title }}
                        </h4>
                        <!-- <p>{{ tech.description }}</p> -->
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { projects } = useProject();
</script>
<style></style>
