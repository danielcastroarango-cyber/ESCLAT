<script setup lang="ts">
import { lineup as artists } from '@/components/data/lineup'
</script>

<template>
  <div class="relative min-h-[70vh] w-full overflow-hidden border-2 border-[#1cff2f] bg-transparent shadow-[6px_6px_0_#1cff2f]">
    <div
      v-for="artist in artists"
      :key="artist.id"
      class="group absolute -translate-x-1/2 -translate-y-1/2"
      :style="{ left: artist.x + '%', top: artist.y + '%' }"
    >
      <img
        :src="artist.image"
        :alt="artist.name"
        class="h-20 w-20 rounded-full border-2 border-[#1cff2f] object-cover shadow-[4px_4px_0_#1cff2f] transition-transform duration-300 group-hover:-translate-y-1 md:h-28 md:w-28"
      >

      <div class="pointer-events-none absolute left-1/2 top-full z-20 mt-4 w-72 -translate-x-1/2 border-2 border-[#1cff2f] bg-black p-4 text-white opacity-0 shadow-[4px_4px_0_#1cff2f] transition-opacity duration-300 group-hover:opacity-100">
        <h3 class=" text-xl font-bold uppercase tracking-[0.12em]">
          {{ artist.name }}
        </h3>
        <p class="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-[#1cff2f]">
          {{ artist.genre }}
        </p>
        <p class="mt-3 text-base leading-relaxed text-white/85">
          {{ artist.bio }}
        </p>
      </div>
    </div>
  </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

@font-face {
  font-family: Geist;
  src: url('/fonts/Geist-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Unbounded';
  src: url('/fonts/Unbounded-Regular.woff2') format('woff2'),
       url('/fonts/Unbounded-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.titulo-portada {
  font-family: 'Anton', sans-serif;
  font-weight: 400;
}
</style>
