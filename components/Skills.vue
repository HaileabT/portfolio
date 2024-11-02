<template>
  <div
    id="skills"
    class="pointer-events-none bg-dark-header-text scroll-smooth py-20 px-5 md:px-10"
  >
    <h2 class="text-dark-bg font-extrabold text-4xl text-center">My Skills</h2>
    <div
      class="pointer-events-none w-full h-full grid place-items-center grid-cols-1 lg:grid-cols-[30%_1fr] py-12 gap-10 lg:gap-5 max-w-[1200px] mx-auto overflow-hidden"
    >
      <div
        class="box fixed bg-dark-sub-header-text z-20 mix-blend-difference rounded-[0.2rem]"
      ></div>
      <ul
        ref="skillRef"
        class="flex flex-row lg:flex-col gap-6 lg:gap-4 pointer-events-none w-full flex-wrap lg:flex-nowrap justify-center lg:justify-start px-10 lg:px-0"
      >
        <li
          v-for="(skill, idx) in skills"
          :key="skill.title"
          class="pointer-grow w-max relative z-10 cursor-pointer pointer-events-auto text-xl lg:text-2xl font-bold lg:w-full"
          @click="() => skillClicked(skill, idx)"
        >
          <!-- <div
            v-if="idx == 0"
            class="pointer-grow bg-[#2c1aa1] px-2 py-2 w-[100%] text-[#cdbff0]"
          >
            {{ skill.title }}
          </div> -->
          <div class="pointer-grow text-dark-bg-lighter">
            {{ skill.title }}
          </div>
        </li>
      </ul>
      <div
        class="w-full h-full bg-[#2c1aa1] rounded-[0.5rem] p-4 grid place-items-center"
      >
        <div class="text-center">
          <h4 class="font-extrabold text-5xl mb-2 text-dark-sub-header-text">
            {{ currentSkill.title }}
          </h4>
          <p class="text-dark-sub-header-text">
            {{ currentSkill.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import type { Skill } from "~/composables/useSkills";

const { skills } = useSkills();
const currentSkill = ref<Skill>(skills.value[0]);
const lRef = ref(null);
const skillRef = ref<HTMLUListElement>();

const skillClicked = (skill: Skill | null, index: number) => {
  currentSkill.value = skills.value[index];
  console.log(skillRef.value?.children[index].getBoundingClientRect().top);
  if (skillRef.value) {
    gsap.to(".box", {
      display: "block",
      delay: 0.3,
    });
    gsap.to(".box", {
      top: skillRef.value.children[index].getBoundingClientRect().top - 4,
      left: skillRef.value.children[index].getBoundingClientRect().left - 4,
      width: skillRef.value.children[index].clientWidth + 8 + "px",
      height: skillRef.value.children[index].clientHeight + 8 + "px",
      duration: 1.2,
      ease: "power2.inOut",
    });
  }
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    const box = document.querySelector(".box") as HTMLDivElement;
    box.style.display = "none";
  });
  skillClicked(null, 0);
});
</script>
