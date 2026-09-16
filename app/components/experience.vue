<template>
  <div class="w-full flex flex-col gap-2">
    <div v-for="e of experience" :key="e.key"
      class="border-foreground/30 bg-background text-primary border-[1px] p-2 md:p-4  w-full flex flex-col gap-1 md:gap-2 justify-between">
      <h3 class="text-foreground text-sm md:text-base font-extrabold">
        {{
          e.key + " / " + e.title
        }}</h3>

      <div class="flex gap-2 text-foreground/40 text-sm md:text-base">
        <p>{{ e.from.toLocaleDateString('en-us', {
          month: "short", year:
            "numeric"
        }) }}</p> -
        <p>{{ e.to ? e.to.toLocaleDateString('en-us', {
          month: "short", year:
            "numeric"
        }) : "now" }}</p>
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
  resources?: ExperienceResourceItem[],
  from: Date,
  to?: Date,
}

const experience: ExperienceItem[] = [
  {
    key: "Hashlabs",
    title: "Fullstack Engineer",
    description: "Hashlabs hired me contractually to develop their operations and client dashboard. I was the architect and developer of the system.",
    resources: [{
      key: 'hashlabs-recomm',
      title: "Recommendation Letter",
      url: "https://drive.google.com/file/d/1NXzXJyMfEyPrV8c6MNQqFa9_udsUlwan/view?usp=sharing"
    }],
    from: new Date('08-01-2025'),
    to: new Date('02-01-2026')
  },
  {
    key: "Upwork",
    title: "Fullstack Engineer & Extension Developer",
    description: "I have completed and delivered 3 jobs on upwork.",
    resources: [{
      key: 'upwork-profile',
      title: "Upwork Profile",
      url: "https://www.upwork.com/freelancers/~016c67669a454e77a9?mp_source=share"
    }],
    from: new Date('01-01-2023'),
    to: undefined
  }, {
    key: "MMCY",
    title: "Intern Developer",
    description: "I have enrolled in 2 different internship programs from MMCY Tech and Efuye Gela.",
    resources: [{
      key: 'mmcytech-completion-certificate',
      title: "MMCY Tech Internship Certificate",
      url: "https://drive.google.com/file/d/1YkZStsayQmzJa0UG1lvDSxAWKSoz97S2/view?usp=sharing"
    }],
    from: new Date('07-08-2024'),
    to: new Date('10-8-2024')
  }
]
</script>

<style></style>