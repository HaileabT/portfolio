<template>
    <div
        id="skills"
        class="pointer-events-none bg-background scroll-smooth py-20 px-8 lg:px-20 md:px-10 flex flex-col gap-10"
    >
        <div>
            <h2
                class="text-background w-max bg-secondary font-extrabold text-2xl"
            >
                My Tech Stack
            </h2>
        </div>
        <div class="flex gap-8 flex-wrap">
            <div>
                <p class="text-secondary mb-2">Languages</p>
                <div class="flex gap-2 max-w-300 items-left flex-wrap">
                    <div
                        v-for="skill in skills['Languages']"
                        :key="skill.title"
                    >
                        <div
                            class="bg-primary text-background px-8 flex items-center gap-2"
                        >
                            <i v-if="skill.icon" :class="skill.icon" />
                            <h3 class="text-xl font-bold mb-1">
                                {{ skill.title }}
                            </h3>
                            <p class="text-gray-500 hidden">
                                {{ skill.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-secondary mb-2">APIs</p>
                <div class="flex gap-2 max-w-300 items-left flex-wrap">
                    <div v-for="skill in skills['APIs']" :key="skill.title">
                        <div
                            class="bg-primary text-background px-8 flex items-center gap-2"
                        >
                            <i v-if="skill.icon" :class="skill.icon" />
                            <h3 class="text-xl font-bold mb-1">
                                {{ skill.title }}
                            </h3>
                            <p class="text-gray-500 hidden">
                                {{ skill.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-secondary mb-2">Server Frameworks</p>
                <div class="flex gap-2 max-w-300 items-left flex-wrap">
                    <div
                        v-for="skill in skills['Server Frameworks']"
                        :key="skill.title"
                    >
                        <div
                            class="bg-primary text-background px-8 flex items-center gap-2"
                        >
                            <i v-if="skill.icon" :class="skill.icon" />
                            <h3 class="text-xl font-bold mb-1">
                                {{ skill.title }}
                            </h3>
                            <p class="text-gray-500 hidden">
                                {{ skill.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-secondary mb-2">ORMs</p>
                <div class="flex gap-2 max-w-300 items-left flex-wrap">
                    <div v-for="skill in skills['ORMs']" :key="skill.title">
                        <div
                            class="bg-primary text-background px-8 flex items-center gap-2"
                        >
                            <i v-if="skill.icon" :class="skill.icon" />
                            <h3 class="text-xl font-bold mb-1">
                                {{ skill.title }}
                            </h3>
                            <p class="text-gray-500 hidden">
                                {{ skill.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-secondary mb-2">Databases</p>
                <div class="flex gap-2 max-w-300 items-left flex-wrap">
                    <div
                        v-for="skill in skills['Databases']"
                        :key="skill.title"
                    >
                        <div
                            class="bg-primary text-background px-8 flex items-center gap-2"
                        >
                            <i v-if="skill.icon" :class="skill.icon" />
                            <h3 class="text-xl font-bold mb-1">
                                {{ skill.title }}
                            </h3>
                            <p class="text-gray-500 hidden">
                                {{ skill.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-secondary mb-2">Frontend</p>
                <div class="flex gap-2 max-w-300 items-left flex-wrap">
                    <div v-for="skill in skills['Frontend']" :key="skill.title">
                        <div
                            class="bg-primary text-background px-8 flex items-center gap-2"
                        >
                            <i v-if="skill.icon" :class="skill.icon" />
                            <h3 class="text-xl font-bold mb-1">
                                {{ skill.title }}
                            </h3>
                            <p class="text-gray-500 hidden">
                                {{ skill.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-secondary mb-2">Fullstack</p>
                <div class="flex gap-2 max-w-300 items-left flex-wrap">
                    <div
                        v-for="skill in skills['Fullstack']"
                        :key="skill.title"
                    >
                        <div
                            class="bg-primary text-background px-8 flex items-center gap-2"
                        >
                            <i v-if="skill.icon" :class="skill.icon" />
                            <h3 class="text-xl font-bold mb-1">
                                {{ skill.title }}
                            </h3>
                            <p class="text-gray-500 hidden">
                                {{ skill.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-secondary mb-2">DevOps</p>
                <div class="flex gap-2 max-w-300 items-left flex-wrap">
                    <div v-for="skill in skills['DevOps']" :key="skill.title">
                        <div
                            class="bg-primary text-background px-8 flex items-center gap-2"
                        >
                            <i v-if="skill.icon" :class="skill.icon" />
                            <h3 class="text-xl font-bold mb-1">
                                {{ skill.title }}
                            </h3>
                            <p class="text-gray-500 hidden">
                                {{ skill.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { skills } = useSkills();
</script>
