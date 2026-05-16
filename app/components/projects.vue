<template>
  <div class="w-full flex flex-col gap-4">
    <div v-for="e of experience" :key="e.key"
      class="border-primary/50 bg-black text-primary border-[1px] p-4 w-full">
      <h3 class="text-primary text-lg">{{ e.title }}</h3>
      <p class="text-tertiary/80">{{ e.description }}</p>
      <div v-if="e.resources && e.resources.length > 0">
        <h3 class="mt-4">Resources</h3>
        <NuxtLink v-for="r of e.resources" :key="r.key" :href="r.url"
          target="_blank" class="text-secondary hover:underline">- {{ r.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type ProjectResourceItem = {
  key: string,
  title: string,
  url: string
}
type ProjectItem = {
  key: string,
  title: string,
  description: string,
  url?: string,
  resources?: ProjectResourceItem[]
}

const experience: ProjectItem[] = [
  {
    key: "minute-hand",
    title: "Minute Hand",
    description: "A fully offline timer app with goal tracking, history and analytics for linux.",
    resources: [{
      key: 'minute-hand-web',
      title: "Minute Hand Product Page",
      url: "http://some-url.com"
    }]
  },
]
</script>

<style></style>