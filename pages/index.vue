<template>
  <div
    tabindex="-1"
    id="cursor-follower"
    class="pointer-events-none cursor-follower fixed bg-dark-sub-header-text mix-blend-difference translate-x-[-50%] translate-y-[-50%] w-5 h-5 rounded-full z-[100]"
  ></div>
  <div
    v-html="logoContent"
    class="svg w-10 fixed left-[50%] bottom-[45%] translate-x-[-50%] translate-y-[-50%] z-40"
    style="
      width: 10rem;
      height: 10rem;
      fill: #cdbff0;
      mix-blend-mode: difference;
    "
  ></div>
  <div id="svg-container" class="svg-container bg-red-700">
    <Header
      @link-clicked="
        (link) => {
          lenis?.scrollTo(`${link.url}`);
        }
      "
    />
  </div>

  <Bio />
  <Projects />
  <Skills />

  <div class="fixed bottom-5 right-10 mix-blend-difference">
    <NuxtLink to="/contact" class="pointer-grow text-xl text-dark-header-text"
      >Contact Me</NuxtLink
    >
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
    console.log(lenis);
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
      bottom: 89 + "%",
      left: 2.5 + "rem",
      y: 0 + "%",
      x: 0 + "%",
      width: 2.5 + "rem",
      height: 2.5 + "rem",
      ease: "ease.out",
    });
  });
});
</script>
