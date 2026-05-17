<template>
  <div class="w-full flex flex-col gap-4">
    <div v-for="e of experience" :key="e.key"
      class="relative border-primary/50 bg-black text-primary border-[1px] p-4 w-full">
      <h3 class="text-primary text-lg">{{ e.title
      }}</h3>
      <p class="text-tertiary/80">{{ e.description
      }}</p>
      <p
        class="bg-primary w-max top-0 right-0 font-bold text-card px-2 absolute">
        {{
          (e.progress).toUpperCase() }}</p>
      <p v-if="e.tech"
        class="flex gap-2 mt-2 xl:flex-wrap max-w-[100%] overflow-x-scroll">
        <span
          class="bg-tertiary/30 text-tertiary font-bold px-1"
          v-for="t of e.tech" :key="t">{{ t
          }}</span>
      </p>
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

type ProjectResourceItem = {
  key: string,
  title: string,
  url: string
}
type ProjectItem = {
  key: string,
  title: string,
  description: string,
  progress: "in production" | "in progress" | "abandoned",
  tech?: string[],
  url?: string,
  resources?: ProjectResourceItem[]
}

const experience: ProjectItem[] = [
  {
    key: "splitbuddy",
    title: "SplitBuddy",
    progress: "in progress",
    tech: ["nextjs", "supabase", "tailwind", "drizzle"],
    description: "A simple shared loan book in your phone.",
    // resources: [{
    //   key: 'minute-hand-web',
    //   title: "Minute Hand Product Page",
    //   url: "http://some-url.com"
    // }]
  },
  {
    key: "firmaoffice",
    title: "Firma Office",
    progress: "in progress",
    tech: ["nextjs", "nestjs", "prisma", "postgres", "bullmq"],
    description: "A full-fledged ERP SaaS we are making to make ERPs accessible and affordable to local businesses.",
    resources: [{
      "key": "prototype",
      title: "Firma Office Prototype",
      url: "https://zemraerp.lovable.app/"
    }]
  }
]
</script>

<style></style>