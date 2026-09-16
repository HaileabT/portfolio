<template>
  <div class="w-full flex flex-col gap-2">
    <div v-for="e of experience" :key="e.key"
      class="relative border-foreground/30 bg-background text-primary border-[1px] p-4 w-full flex flex-col  justify-between gap-2">
      <h3 class="text-foreground text-base font-extrabold">
        {{
          e.title
        }}</h3>
      <p
        class="bg-foreground w-max top-0 right-0 font-bold text-card text-sm px-2 absolute">
        {{
          (e.progress).toLocaleLowerCase() }}</p>
      <p v-if="e.tech"
        class="flex gap-2 xl:flex-wrap max-w-[100%] overflow-x-scroll">
        <span class="bg-foreground/10 text-foreground/50 font-bold"
          v-for="t of e.tech" :key="t">{{ t
          }}</span>
      </p>
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
    key: "expense tracker",
    title: "Simple Expense Tracker",
    progress: "in production",
    tech: ["html", "javascript", "css", "sqlite", "drizzle", "expressjs", "nodejs"],
    description: "A simple local expense tracker I actually made for myself and use.",
    resources: [{
      "key": "repo",
      title: "Expense Tracker Repo",
      url: "https://github.com/HaileabT/bare-minimun_local-expense-tracker"
    }]
  },
  {
    key: "splitbuddy",
    title: "SplitBuddy",
    progress: "in production",
    tech: ["nextjs", "supabase", "tailwind", "drizzle"],
    description: "A simple shared loan book in your phone.",
    resources: [{
      key: 'splitbuddy-web',
      title: "splitbuddy",
      url: "https://splitbuddy.haileabtesfaye.dev"
    }]
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
  },
]
</script>

<style></style>