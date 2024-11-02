<template>
  <div
    tabindex="-1"
    id="cursor-follower"
    class="pointer-events-none cursor-follower fixed bg-dark-sub-header-text mix-blend-difference translate-x-[-50%] translate-y-[-50%] w-5 h-5 rounded-full z-[100]"
  ></div>
  <div
    v-html="logoContent"
    class="svg hidden lg:block w-[4rem] h-[4rem] lg:w-[8rem] lg:h-[8rem] fixed left-[50%] bottom-[50%] lg:bottom-[45%] translate-x-[-50%] translate-y-[-50%] z-40"
    style="fill: #cdbff0; mix-blend-mode: difference"
  ></div>
  <div
    v-html="logoContent"
    class="block lg:hidden w-[1.8rem] h-[1.8rem] fixed left-8 md:left-14 top-14 md:top-16 translate-x-[-50%] translate-y-[-50%] z-40"
    style="fill: #cdbff0; mix-blend-mode: difference"
  ></div>
  <div id="svg-container" class="svg-container bg-red-700">
    <Header
      @link-clicked="
        (link) => {
          return lenis?.scrollTo(`${link.url}`);
        }
      "
    />
  </div>

  <Bio />
  <Projects />
  <Skills />

  <Contact>
    <div
      v-html="logoContent"
      class="w-10 md:w-20 lg:w-20 z-40 fill-dark-bg"
    ></div>
  </Contact>

  <div class="fixed bottom-5 right-5 lg:right-10 mix-blend-difference">
    <NuxtLink
      @click.prevent="
        () => {
          return lenis?.scrollTo(`#contact`);
        }
      "
      class="pointer-grow lg:text-xl text-md text-dark-header-text"
      >Contact Me</NuxtLink
    >
  </div>

  <div class="py-5 px-5 bg-dark-bg-secondary text-dark-header-text text-center">
    <h2>
      Designed and implemented by
      <a
        href="https://www.github.com/haileabT"
        target="_blank"
        class="font-bold text-dark-sub-header-text pointer-grow"
        >Haileab Tesfaye</a
      >
    </h2>
    <p>2024</p>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const logoContent = ref();

useHead({
  title: "Haileab Tesfaye",
  htmlAttrs: {
    lang: "en-us",
  },
  meta: [
    {
      name: "keywords",
      content:
        "Haileab Tesfaye, Portfolio, Website, Nuxtjs, Nuxt, Vue, GSAP, Lenis",
    },
  ],
});

useSeoMeta({
  ogTitle: "Haileab Tesfaye",
  ogDescription: "Haileab Tesfaye's portfolio",
  author: "Haileab Tesfaye",
  description: "Haileab Tesfaye's portfolio.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
});

const { instance: lenis } = useLenis();
const hRef = ref(null);
// console.log(useRuntimeConfig().logo_cloud_url);
if (useRuntimeConfig().logo_cloud_url) {
  logoContent.value = await $fetch(useRuntimeConfig().logo_cloud_url, {
    method: "GET",
    headers: {
      "Content-Type": "text/html",
    },
  });
  logoContent.value = await logoContent.value.text();
  // console.log(logoContent.value);
  logoContent.value = logoContent.value;
}

onMounted(async () => {
  setTimeout(() => {
    lenis.value.on("scroll", ScrollTrigger.update);

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".svg",
        start: "10% 30%",
        end: "500% 10%",
        scrub: true,
        markers: false,
      },
    });
    const tl1 = gsap.timeline();

    if (window.scrollY >= 200) {
      tl1
        .to(".svg", {
          bottom: 90 + "%",
          left: 4 + "rem",
          y: 0 + "%",
          x: 0 + "%",
          width: 2.5 + "rem",
          height: 2.5 + "rem",
          ease: "ease.out",
        })
        .eventCallback("onComplete", () => {
          ScrollTrigger.refresh();
          ScrollTrigger.update();
          tl1.clear();
        });
    }

    document.addEventListener("mousemove", (e) => {
      // console.log(document.elementFromPoint(e.x, e.y));
      if (
        document
          .elementFromPoint(e.clientX, e.clientY)
          ?.classList.contains("pointer-grow")
      ) {
        gsap.to("#cursor-follower", {
          scale: 4.3,
          duration: 0.2,
          ease: "ease.inOut",
        });
      } else if (
        document
          .elementFromPoint(e.clientX, e.clientY)
          ?.classList.contains("pointer-grow-special")
      ) {
        gsap.to("#cursor-follower", {
          scale: 150,
          duration: 1,
          ease: "none",
        });
      } else {
        gsap.to("#cursor-follower", {
          scale: 1,
          duration: 0.2,
          ease: "else.inOut",
        });
      }
      gsap.to("#cursor-follower", {
        left: e.clientX,
        top: e.clientY,
        overflow: "auto",
        duration: 0.2,
        ease: "none",
      });
    });
    tl.to(".svg", {
      bottom: 90 + "%",
      left: 4 + "rem",
      y: 0 + "%",
      x: 0 + "%",
      width: 2.5 + "rem",
      height: 2.5 + "rem",
      ease: "ease.out",
    });
  });
});
</script>

<style scoped>
@media screen and (hover: none) {
  .cursor-follower {
    display: none !important;
  }
}
</style>
