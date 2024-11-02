<template>
  <div
    id="projects"
    class="bg-dark-sub-header-text scroll-smooth py-20 px-5 md:px-10 flex flex-col gap-10"
  >
    <div>
      <h2 class="text-dark-bg font-extrabold text-4xl">My Works</h2>
    </div>
    <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      <NuxtLink
        target="_blank"
        v-for="project in projects"
        :key="project.title"
        :to="project.link || '#'"
        class="cursor-pointer pointer-grow bg-dark-bg p-4 w-full rounded-[0.5rem]"
      >
        <NuxtImg
          :src="project.picture"
          class="pointer-grow mb-4 rounded-[0.3rem]"
        />
        <h2
          class="pointer-grow text-dark-normal-text text-xl font-semibold mb-2"
        >
          {{ project.title }}
        </h2>
        <p class="pointer-grow text-dark-normal-text mb-4">
          {{ project.description }}
        </p>

        <div
          v-if="project.partners && project.partners.length >= 1"
          class="pointer-grow mb-4"
        >
          <h4 class="text-dark-sub-header-text mb-2">With</h4>
          <div class="flex flex-row gap-2">
            <a
              v-for="partner in project.partners"
              :key="partner.name"
              :href="partner.link"
              target="_blank"
              class="pointer-grow p-2 bg-dark-bg-secondary rounded-[0.25rem] font-bold text-dark-bg"
              >{{ partner.name }}</a
            >
          </div>
        </div>

        <div class="flex gap-4 flex-wrap">
          <div
            v-for="tech in project.tech"
            :key="tech.title"
            class="bg-dark-header-text p-2 rounded-[0.25rem]"
            :title="tech.description"
          >
            <h4 class="text-sm font-bold text-dark-bg">
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
