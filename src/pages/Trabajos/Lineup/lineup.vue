<script setup lang="ts">
import NavigatorPrimarius from '@/components/ui/Navegador.vue'
 import ArtistMap from '@/components/ui/ArtistMap.vue'
 import Banner from '@/components/ui/Banner.vue'
</script>

<template>
  <div class="min-h-screen w-full bg-black text-white">
    <NavigatorPrimarius />
    <Banner />

    <main class="relative overflow-hidden px-4 py-20 md:px-10 lg:px-14">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_18%,rgba(198,255,51,0.55)_0_1px,transparent_2px),radial-gradient(circle_at_82%_28%,rgba(198,255,51,0.42)_0_1px,transparent_2px),radial-gradient(circle_at_35%_78%,rgba(198,255,51,0.5)_0_1px,transparent_2px)] bg-[length:84px_84px,132px_132px,108px_108px] opacity-75"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(198,255,51,0.16),transparent_34%),linear-gradient(145deg,rgba(198,255,51,0.11),transparent_30%,rgba(198,255,51,0.08)_58%,transparent_84%)]"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_18%,rgba(125,57,235,0.26),transparent_34%),linear-gradient(215deg,transparent_12%,rgba(125,57,235,0.14)_48%,transparent_76%)]"
      />

      <section id="map" class="relative z-10">
        <p class="text-sm font-bold uppercase tracking-[0.32em] text-[#7d39eb] md:text-base">
          Mapa interactivo
        </p>
        <h1 class="titulo-portada mt-4 text-6xl  leading-none text-white md:text-8xl">
          Explora los artistas
        </h1>

        <div class="mt-12">
          <ArtistMap />
        </div>
      </section>
    </main>
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

.home-geist {
  font-family: 'Neue Montreal', sans-serif;
}

.titulo-portada {
  font-family: 'Impact', 'Unbounded', sans-serif;
}

.habilidades {
  font-family: 'Unbounded', sans-serif;
}

</style>