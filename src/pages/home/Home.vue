<script setup lang="ts">
import { Button } from '@/components/ui/button'
import Banner from '@/components/ui/Banner.vue'
import CountdownPopup from '@/components/ui/CountdownPopup.vue'
import Footer from '@/components/ui/Footer.vue'
import NavigatorPrimarius from '@/components/ui/Navegador.vue'
</script>

<template>
  <div class="home-geist  min-h-screen w-full flex flex-col items-center justify-center  text-white">
  
   <NavigatorPrimarius />
    <Banner />
   <CountdownPopup class="z-51" />
    
    <!-- <img class="absolute opacity-20" src="/imagines/tonitrui.png" alt=""> -->
    <section
      id="home"
      class="relative flex min-h-[78vh] w-full items-center justify-center overflow-visible bg-black px-4 pb-40 pt-20 text-white md:min-h-[86vh] md:pb-48 lg:min-h-screen"
    >
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

      <div class="relative z-10 mx-auto flex w-full max-w-384 flex-col items-center px-2 text-center">
        <p class="mb-8 text-xs font-bold uppercase tracking-[0.32em] text-[#C6FF33] md:text-sm">
          Música / Arte / Performance
        </p>

        <div class="flex max-w-full items-center justify-center gap-2 overflow-visible px-4 py-4 sm:gap-5 md:gap-8 lg:gap-10 xl:gap-12">
          <img
            src="/Imagines/ESCLAT/ESCLATLOGO.png"
            alt="ESCLAT"
            class="home-logo w-[min(96vw,72rem)] object-contain"
          >
        </div>

        <p class="mt-8 max-w-3xl text-base font-medium leading-relaxed text-white/85 md:text-xl lg:text-2xl">
          Festival de música, arte digital y cultura underground. Un punto de colisión entre sonido,
          visuales, ruido, luz y comunidad.
        </p>
      </div>

      <Button
        as-child
        variant="outline"
        size="lg"
        class="group absolute bottom-[clamp(1.5rem,4vw,2.75rem)] left-1/2 z-20 h-auto min-h-[clamp(4.25rem,8vw,8.5rem)] w-[calc(100vw-1.5rem)] max-w-368 -translate-x-1/2 overflow-hidden rounded-none border-2 border-[#C6FF33] bg-transparent px-[clamp(0.5rem,2vw,2rem)] py-[clamp(0.9rem,2vw,1.75rem)] text-[#C6FF33]  shadow-[8px_8px_0_#C6FF33] hover:-translate-y-1 hover:bg-[#C6FF33] hover:border-[#C6FF33] hover:text-black hover:shadow-[8px_8px_0_#C6FF33] sm:w-[94vw] md:w-[90vw] lg:w-[86vw] xl:w-[82vw] 2xl:w-[78vw]"
      >
        <RouterLink to="/tickets" aria-label="Tickets festival">
          <span
            class=" titulo-portada block text-center text-4xl font-bold uppercase leading-none tracking-[0.18em] [text-shadow:0_0_12px_rgba(198,255,51,0.55)] group-hover:[text-shadow:0_0_10px_rgba(0,0,0,0.3)] sm:text-5xl md:text-7xl lg:text-8xl"
          >
            Tickets festival
          </span>
        </RouterLink>
      </Button>
    </section>

    <section id="video" class="relative -mb-12 flex min-h-[80vh] w-full items-center justify-center overflow-hidden py-10 lg:min-h-screen"> 
      <img
        src="/Imagines/ESCLAT/Festival%202.webp"
        alt=""
        class="absolute inset-0 z-0 h-full w-full object-cover"
      >
      <div class="relative z-10 flex w-full flex-col items-center justify-center px-6 text-center">
        <img
          src="/Imagines/ESCLAT/estrellaaa.png"
          alt=""
          class="mb-12 w-72 object-contain md:w-md lg:w-160"
        >
        <p class="w-[92vw] max-w-none text-center text-2xl font-medium leading-relaxed text-white md:text-4xl lg:w-[94vw] lg:text-5xl">
          Un lugar donde la noche no exige máscaras, donde cada cuerpo, cada look y cada forma de sentir tiene cabida. Aquí no existe el juicio: existe la LIBERTAD. La estética mezcla la energía de los 90, el imaginario industrial berlinés y la irreverencia valenciana.
        </p>
      </div>
    </section>

    <section id="fecha" class=" mt-5 z-50 flex min-h-[32vh] w-full flex-col bg-black text-center md:min-h-[36vh]">
      <div class="grid min-h-[32vh] w-full grid-cols-1 md:min-h-[36vh] md:grid-cols-2">
        <div class="flex h-full flex-col items-center justify-center border-b-5 md:border-r-3 border-[#7d39eb]  px-4 py-6  ">
          <span class="text-base font-bold uppercase tracking-[0.2em] text-[#7d39eb] md:text-xl">Fecha</span>
          <h1 class="titulo-portada mt-3 text-5xl  leading-none  md:text-6xl lg:text-7xl">
            23 al 25 de octubre
          </h1>
        </div>

        <div class="flex h-full flex-col items-center justify-center border-b-5 md:border-l-3 border-[#7d39eb]  px-4 py-6">
          <span class="text-base font-bold uppercase tracking-[0.2em] text-[#7d39eb] md:text-xl">Lugar</span>
          <h1 class="titulo-portada mt-3 text-5xl  leading-none  md:text-6xl lg:text-7xl">
            Las Naves, Valencia
          </h1>
        </div>
      </div>
    </section>

     <section id="lineup" class="relative w-full overflow-hidden bg-black px-4 py-24 text-white md:px-10 lg:px-14">
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

      <div class="relative z-10">
        <p class="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-[#7d39eb] md:text-base">
          Lineup
        </p>
        <h2 class="titulo-portada  text-6xl  leading-none md:text-8xl">
          Artistas confirmados
        </h2>

        <div class="mt-12 grid w-full grid-cols-1 gap-5 md:grid-cols-4">
          <Button
            v-for="artist in ['Luna Void', 'Noir System', 'Marea Roja', 'Próximamente']"
            :key="artist"
            as-child
            variant="outline"
            class="h-auto rounded-none border-2 border-[#C6FF33] bg-transparent px-5 py-6 text-xl font-bold uppercase tracking-[0.12em] text-[#C6FF33] shadow-[6px_6px_0_#C6FF33]] hover:-translate-y-1 hover:border-[#7d39eb] hover:bg-transparent hover:text-[#7d39eb] hover:shadow-[6px_6px_0_#7d39eb] md:text-2xl"
          >
            <RouterLink to="/lineup">
              {{ artist }}
            </RouterLink>
          </Button>
        </div>
      </div>
    </section>



      
        <Footer class="w-full"/>
       
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