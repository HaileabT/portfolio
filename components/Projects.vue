<template>
  <div
    id="projects"
    class="bg-dark-sub-header-text scroll-smooth py-20 px-5 md:px-10 flex flex-col gap-10"
  >
    <div>
      <h2 class="text-dark-bg font-extrabold text-4xl">My Works</h2>
    </div>
    <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      <div
        v-for="project in projects"
        :key="project.title"
        class="bg-dark-bg p-4 w-full rounded-[0.5rem]"
      >
        <NuxtImg src="/project.png" class="mb-4" />
        <h2 class="text text-dark-normal-text text-xl font-semibold mb-2">
          {{ project.title }}
        </h2>
        <p class="text-dark-normal-text mb-4">{{ project.description }}</p>

        <div class="flex gap-4 flex-wrap">
          <div
            v-for="tech in project.tech"
            :key="tech.title"
            class="bg-dark-header-text p-2 rounded-[0.25rem]"
            :title="tech.description"
          >
            <h4 class="text-sm font-bold text-dark-bg">{{ tech.title }}</h4>
            <!-- <p>{{ tech.description }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { projects } = useProject();
</script>
<style></style>
