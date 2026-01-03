<template>
    <div
        id="bio"
        class="bg-dark-normal-text px-8 md:px-8 lg:px-20 scroll-smooth text-primary"
    >
        <div
            class="bio flex flex-col xl:flex-row gap-10 mx-auto xl:items-center"
        >
            <div class="relative xl:w-1/2 py-20">
                <h1 class="text-secondary text-md">Haileab Tesfaye</h1>
                <h2 class="text-3xl font-bold text-tertiary text-left">
                    {{ aboutMe }}
                </h2>
                <p class="text-md text-primary text-left">
                    {{ shortDescription }}
                </p>
            </div>
            <div class="self-start bg-primary w-full xl:w-1/2 p-4 hidden">
                <h2 class="text-2xl font-extrabold text-background w-max">
                    Education
                </h2>
                <ul class="flex justify-start gap-4">
                    <li
                        v-for="edu in education"
                        :key="edu.title"
                        class="bg-dark-header-text p-4 pl-0 rounded-[0.35rem]"
                    >
                        <div class="">
                            <h3
                                class="font-bold text-background/90 text-[1.1rem] mb-0"
                            >
                                {{ edu.title }}
                            </h3>
                            <h4 class="font-semibold text-background mb-2">
                                {{ edu.institute }}
                            </h4>
                            <p class="font-normal text-background">
                                {{ edu.description }}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { education } = useEducation();
const aboutMe = "A Backend Developer with Fullstack Experience.";
const shortDescription =
    "I'm a versatile developer specializing in backend engineering.";
</script>
