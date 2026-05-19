<script setup lang="ts">
import Footer from '@/components/ui/Footer.vue'
import { Button } from '@/components/ui/button';
import NavigatorPrimarius from '@/components/ui/Navegador.vue'

const festivalDays = ['Viernes 23', 'Sabado 24', 'Domingo 25']
</script>

<template>
  <div class="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-black font-sans text-white">
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_12%_18%,rgba(28,255,47,0.55)_0_1px,transparent_2px),radial-gradient(circle_at_82%_28%,rgba(28,255,47,0.42)_0_1px,transparent_2px),radial-gradient(circle_at_35%_78%,rgba(28,255,47,0.5)_0_1px,transparent_2px)] bg-[length:84px_84px,132px_132px,108px_108px] opacity-75"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(28,255,47,0.16),transparent_34%),linear-gradient(145deg,rgba(28,255,47,0.11),transparent_30%,rgba(28,255,47,0.08)_58%,transparent_84%)]"
    />

    <NavigatorPrimarius class="relative z-10 mb-20"/>
    <div class="relative z-10 flex flex-col items-center">
      <section class="w-full flex flex-col items-center justify-center gap-10 mb-20 z-10">
        <h1 class="text-center text-6xl md:text-9xl font-bold mb- text-white titulo-portada">
          Programacion
        </h1>
        <p class="mt- max-w-3xl text-base font-medium leading-relaxed text-white/85 md:text-xl lg:text-2xl">
          Estate atento a nuestro eventos y actividades durante todo el festival
        </p>
      </section>

      <section class="w-full max-w-384 px-4 pb-20 pt-8 md:px-8">
        <div class="grid w-full grid-cols-3 gap-3 md:gap-8">
          <article
            v-for="day in festivalDays"
            :key="day"
            class="flex min-w-0 flex-col items-center gap-4"
          >
            <Button
              variant="outline"
              class="h-auto w-full rounded-none border-2 border-[#1cff2f] bg-transparent px-2 py-3 text-center text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[5px_5px_0_#1cff2f] hover:-translate-y-1 hover:border-[#1cff2f] hover:bg-transparent hover:text-[#1cff2f] hover:shadow-[5px_5px_0_#1cff2f] md:px-5 md:py-4 md:text-2xl"
            >
              {{ day }}
            </Button>

            <img
              src="/Imagines/ESCLAT/DIA1.jpg"
              :alt="`Programacion ${day}`"
              class="aspect-3/4 w-full border-2 border-[#1cff2f] object-cover shadow-[8px_8px_0_rgba(28,255,47,0.65)]"
            >
          </article>
        </div>
      </section>
    </div>

    <Footer class="relative z-10 w-full mt-auto"/>
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
  font-family: 'Geist', sans-serif;
}

.titulo-portada {
  font-family: 'Anton', sans-serif; 
}

.habilidades {
  font-family: 'Unbounded', sans-serif; 
}

</style>
