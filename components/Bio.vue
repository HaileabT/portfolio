<template>
  <div id="bio" class="bg-dark-normal-text py-32 px-5 md:px-10 scroll-smooth">
    <div class="bio flex flex-col gap-10 max-w-[1200px] mx-auto items-center">
      <div class="relative">
        <h2 class="text-center text-2xl font-extrabold mb-2 text-dark-bg">
          About Me
        </h2>
        <p class="text-center text-lg text-dark-bg-lighter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt
          inventore eaque modi aliquam architecto facere, cum impedit optio
          ducimus deleniti aut ut aperiam, ipsa tenetur quidem accusantium
          voluptatem natus?
        </p>
      </div>
      <div class="">
        <h2 class="text-center text-2xl font-extrabold mb-4 text-dark-bg">
          Education
        </h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li
            v-for="edu in education"
            :key="edu.title"
            class="bg-dark-header-text p-4 rounded-[0.35rem]"
          >
            <div class="">
              <h3 class="font-bold text-dark-bg text-[1.1rem] mb-0">
                {{ edu.title }}
              </h3>
              <h4 class="font-semibold text-dark-bg mb-2">
                {{ edu.institute }}
              </h4>
              <p class="font-normal">{{ edu.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { education } = useEducation();
</script>
