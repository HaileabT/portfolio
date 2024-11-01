<template>
  <Lenis
    root
    :options="{
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 0.7,
    }"
  >
    <div class="bg-dark-bg w-full h-svh">
      <NuxtPage />
    </div>
  </Lenis>
</template>

<script setup>
let lenis = useLenis();
</script>
