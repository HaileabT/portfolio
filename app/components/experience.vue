<template>
  <div class="w-full flex flex-col gap-4">
    <div v-for="e of experience" :key="e.key"
      class="border-primary/40 bg-black text-primary border-[1px] p-4 w-full">
      <h3 class="text-primary text-lg">{{ e.title
        }}</h3>
      <p class="text-tertiary/80">{{ e.description
        }}</p>
      <div
        v-if="e.resources && e.resources.length > 0">
        <h3 class="mt-4">resources</h3>
        <NuxtLink v-for="r of e.resources"
          :key="r.key" :href="r.url"
          target="_blank"
          class="text-secondary hover:underline">-
          {{ r.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type ExperienceResourceItem = {
  key: string,
  title: string,
  url: string
}
type ExperienceItem = {
  key: string,
  title: string,
  description: string,
  url?: string,
  resources?: ExperienceResourceItem[]
}

const experience: ExperienceItem[] = [
  {
    key: "hashlabs",
    title: "Fullstack Engineer",
    description: "Hashlabs hired me contractually to develop their operations and client dashboard. I was the architect and developer of the system.",
    resources: [{
      key: 'hashlabs-recomm',
      title: "Recommendation Letter",
      url: "https://drive.google.com/file/d/1NXzXJyMfEyPrV8c6MNQqFa9_udsUlwan/view?usp=sharing"
    }]
  },
  {
    key: "upwork",
    title: "Fullstack Engineer and Browser Extension Developer",
    description: "I have completed and delivered 3 jobs on upwork.",
    resources: [{
      key: 'upwork-profile',
      title: "Upwork Profile",
      url: "https://www.upwork.com/freelancers/~016c67669a454e77a9?mp_source=share"
    }]
  }, {
    key: "internships",
    title: "Developer Intern",
    description: "I have enrolled in 2 different internship programs from MMCY Tech and Efuye Gela.",
    resources: [{
      key: 'mmcytech-completion-certificate',
      title: "MMCY Tech Internship Certificate",
      url: "https://drive.google.com/file/d/1YkZStsayQmzJa0UG1lvDSxAWKSoz97S2/view?usp=sharing"
    }]
  }
]
</script>

<style></style>