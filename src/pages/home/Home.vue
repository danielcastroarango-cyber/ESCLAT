<script setup lang="ts">
import { Button } from '@/components/ui/button'
import Banner from '@/components/ui/Banner.vue'
import CountdownPopup from '@/components/ui/CountdownPopup.vue'
import Footer from '@/components/ui/Footer.vue'
import NavigatorPrimarius from '@/components/ui/Navegador.vue'
</script>

<template>
  <div class="home-geist  min-h-screen w-full flex flex-col items-center justify-center bg-black text-white">
  
   <!-- <NavigatorPrimarius /> -->
    <Banner />
   <CountdownPopup class="z-51" />
    
    <!-- <img class="absolute opacity-20" src="/imagines/tonitrui.png" alt=""> -->
    <section
      id="home"
      class="relative flex min-h-[78vh] w-full items-center bg-white justify-center overflow-visible px-4 pb-40 pt-20 text-white md:min-h-[86vh] md:pb-48 lg:min-h-screen"
    >
      <img
        src="/Imagines/ESCLAT/Header_Portada_2.1.png"
        alt=""
        class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover md:object-contain"
      >

     

    </section>

    <section id="tickets" class="flex w-full items-center justify-center bg-black">
      <Button
        as-child
        variant="outline"
        size="lg"
        class="group h-auto min-h-[clamp(3.75rem,8vw,8.5rem)] w-full overflow-hidden rounded-none border-2 border-[#c6ff33] bg-[#c6ff33] px-[clamp(0.5rem,2vw,2rem)] py-[clamp(0.75rem,2.2vw,1.75rem)] text-white hover:-translate-y-1 hover:border-[#c6ff33] hover:bg-black hover:text-[#c6ff33] hover:shadow-[6px_6px_0_#c6ff33]"
      >
        <RouterLink to="/tickets" aria-label="Tickets festival">
          <span
            class=" titulo-portada font-black block text-center text-[clamp(1.75rem,8vw,7.5rem)] uppercase leading-[0.95] tracking-[0.1em] [text-shadow:0_0_12px_rgba(255,255,255,0.55)] group-hover:[text-shadow:0_0_10px_rgba(0,0,0,0.3)] sm:tracking-[0.14em] lg:tracking-[0.18em]"
          >
            Tickets festival 
          </span>
        </RouterLink>
      </Button>
    </section>
<section id="lineup" class="relative w-full overflow-hidden bg-black px-4 py-24 text-white md:px-10 lg:px-14">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_18%,rgba(198,255,51,0.55)_0_1px,transparent_2px),radial-gradient(circle_at_82%_28%,rgba(198,255,51,0.42)_0_1px,transparent_2px),radial-gradient(circle_at_35%_78%,rgba(198,255,51,0.5)_0_1px,transparent_2px)] bg-[length:84px_84px,132px_132px,108px_108px] opacity-75"
      />

      <div class="relative z-10">
        <p class="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-[#c6ff33] md:text-base">
          Lineup
        </p>
        <h2 class="titulo-portada  font-black text-6xl  leading-none md:text-8xl">
          Artistas confirmados
        </h2>

        <div class="mt-12 grid w-full grid-cols-1 gap-5 md:grid-cols-4">
          <Button
            v-for="artist in ['Luna Void', 'Noir System', 'Marea Roja', 'Próximamente']"
            :key="artist"
            as-child
            variant="outline"
            class="h-auto rounded-none border-2 border-[#c6ff33] bg-transparent px-5 py-6 text-xl font-bold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_#c6ff33] hover:-translate-y-1 hover:border-[#c6ff33] hover:bg-[#c6ff33] hover:text-black hover:shadow-[6px_6px_0_#fff] md:text-2xl"
          >
            <RouterLink to="/lineup">
              {{ artist }}
            </RouterLink>
          </Button>
        </div>
      </div>
    </section>

    <section id="video" class="relative -mb-12 flex min-h-[80vh] w-full items-center justify-center overflow-hidden py-10 lg:min-h-screen"> 
      <img
        src="/Imagines/ESCLAT/Festival%202.webp"
        alt=""
        class="absolute inset-0 z-0 h-full w-full object-cover"
      >
      <div class="relative z-10 flex w-full flex-col items-center justify-center px-6 text-center">
        
        <p class="w-[92vw] max-w-none text-center text-2xl font-medium leading-relaxed text-white md:text-4xl lg:w-[94vw] lg:text-5xl">
          Un lugar donde la noche no exige máscaras, donde cada cuerpo, cada look y cada forma de sentir tiene cabida. Aquí no existe el juicio: existe la LIBERTAD. La estética mezcla la energía de los 90, el imaginario industrial berlinés y la irreverencia valenciana.
        </p>
      </div>
    </section>

    <section id="fecha" class=" mt-5 z-50 flex min-h-[32vh] w-full flex-col  text-center md:min-h-[36vh]">
      <div class="grid min-h-[32vh] w-full grid-cols-1 md:min-h-[36vh] md:grid-cols-2">
        <div class="flex h-full flex-col items-center bg-[#c6ff33] md:border-r-5 border-white justify-center  px-4 py-6 ">
          <span class="text-base font-bold uppercase tracking-[0.2em] text-black md:text-xl">Fecha</span>
          <h1 class="titulo-portada font-bold mt-3 text-5xl text-black leading-none  md:text-6xl lg:text-7xl">
            23 al 25 de octubre
          </h1>
        </div>

        <div class="flex h-full flex-col items-center bg-white justify-center md:border-l-5 border-[#c6ff33]   px-4 py-6 ">
          <span class="text-base font-bold uppercase tracking-[0.2em] text-black md:text-xl">Lugar</span>
          <h1 class="titulo-portada font-bold mt-3 text-5xl text-black leading-none  md:text-6xl lg:text-7xl">
            Las Naves, Valencia
          </h1>
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
  font-family: 'Neue Montreal', 'Unbounded', sans-serif;
}

.habilidades {
  font-family: 'Unbounded', sans-serif;
}


 
 
  </style>
