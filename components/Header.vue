<template>
  <div id="welcome" class="w-full h-svh grid place-items-center">
    <nav
      class="w-full top-10 right-8 md:right-14 lg:right-0 fixed z-40 mix-blend-difference"
    >
      <div class="w-full flex gap-5 justify-end lg:justify-center px-0 lg:px-4">
        <a
          v-for="link in links"
          :href="link.url"
          :key="link.url"
          @click.prevent="
            () => {
              $emit('linkClicked', link);
            }
          "
          class="pointer-grow relative group text-sm md:text-md lg:text-xl text-dark-normal-text hover:text-dark-header-text transition-all"
          >{{ link.text }}
          <span
            class="absolute bottom-[-2px] left-0 w-0 bg-dark-header-text h-[1px] group-hover:w-full transition-all"
          ></span>
        </a>
      </div>
    </nav>
    <div
      data-rellax-speed="-3"
      class="z-10 rellax w-[calc(100%-1rem)] max-w-[1200px] flex flex-col gap-10 items-center relative"
    >
      <h1
        class="text-dark-normal-text font-[Poppins] text-center text-2xl lg:text-4xl"
      >
        Nice to meet you, I am
        <span
          class="pointer-grow-special z-10 text-dark-bg bg-dark-header-text inline-block"
          >Haileab Tesfaye</span
        >.<br />
        I am a fullstack developer.
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const { skills } = useSkills();

interface NavBarLinks {
  text: string;
  url: string;
}

const links: NavBarLinks[] = [
  {
    text: "Welcome",
    url: "#welcome",
  },
  {
    text: "Bio",
    url: "#bio",
  },
  {
    text: "Projects",
    url: "#projects",
  },
  {
    text: "Skills",
    url: "#skills",
  },
];

const emit = defineEmits(["linkClicked"]);

onMounted(() => {
  setTimeout(() => {
    const rellax = useNuxtApp().$rellaxInit();
  }, 1);
});

onBeforeUnmount(() => {
  useNuxtApp().$rellaxDestroy();
});
</script>
