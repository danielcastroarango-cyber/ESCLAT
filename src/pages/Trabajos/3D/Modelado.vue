<script setup lang="ts">
import Carrusel from '@/components/ui/Carrusel.vue';
import { ref } from 'vue';
import Footer from '@/components/ui/Footer.vue'
import { Button } from '@/components/ui/button';
import NavigatorPrimarius from '@/components/ui/Navegador.vue'

    const imagoCirca = ref<string>('DonaFondo.png')

const photos = [
  "3D/Dona.png",
  "3D/Camaleon1.jpeg",
  "3D/Dona1.png",
  "3D/Camaleon.jpeg",
  "3D/Dona3.png",
  ]

</script>

<template>
  <div class="w-full min-h-screen  text-white font-sans flex flex-col">
    <NavigatorPrimarius class="mb-20"/>
    <div class="flex flex-col items-center">
      <section class="w-full flex flex-col items-center justify-center gap-10 mt-20 z-10">
        <h1 class="text-center text-6xl md:text-9xl font-bold mb-10 text-[#850000] titulo-portada">
          Modelado 3D
        </h1>
      </section>

      <Carrusel
        class="w-full"
        :photos="photos"
        basePath="/Imagines"
        sizeClass="max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-[90rem]"
        :autoPlayDelay="2000"
      />

      <div class="flex flex-col  bg-[#e17100] border-b-6 border-r-0 border-l-0 border-t-0 border-[#850000] rounded-xl py-5 lg:flex-row lg:justify-between md:items-center w-full max-w-350 mx-auto my-8 gap-8 px-5 md:px-20">
        <figure class=" flex justify-between min-w-min order-2 lg:order-1 h-100 lg:h-125">
          <img
            class="object-contain h-full w-auto"
            :src="`/Imagines/3D/${imagoCirca}`"
            alt=""
            @mouseenter="imagoCirca='CamaleonFondo.png'"
            @mouseleave="imagoCirca='DonaFondo.png'"
          >
        </figure>
        <div class="flex flex-col gap-4 order-1 text-center lg:text-left text-[#ffeeca] ">
          <h1 class="font-bold text-xl lg:text-5xl mb-5 titulo-portada">
            Objetos en 3D
          </h1>

          <div class="lg:max-w-3xl">
            <p class="mb-5">
              En esta sección se presentan los distintos trabajos de objetos tridimensionales que he realizado, tanto en formato digital como mediante técnicas manuales.
            </p>

            <p class="mb-5">
              Cada página está dedicada a un objeto específico y recoge el proceso completo de su desarrollo, desde las primeras fases de conceptualización hasta el resultado final.
            </p>

            <p class="mb-5">
              Si deseas realizar alguna consulta sobre los modelos presentados o estás interesado en solicitar una comisión, no dudes en ponerte en contacto conmigo.
            </p>
          </div>
        </div>
      </div>

      <div class=" flex mt-10 mb-10 items-center gap-8 md:gap-50">
        <RouterLink to="/3D/Camaleon">
          <Button class="rounded-xl md:rounded-3xl border-4 border-[#e17100] bg-[#ffeeca] text-[#e17100] transition-all hover:scale-130 hover:bg-[#e17100] hover:text-white text-xl px-15 py-5 md:px-20 md:py-5 md:text-2xl transform-gpu  duration-300 ease-out hover:-translate-y-2 hover:shadow-[rgb(241,130,38)] hover:shadow-md">
          
            <p> Camaleón</p>
            
          </Button>
        </RouterLink>

        <RouterLink to="/3D/Dona">
          <Button class="rounded-xl md:rounded-3xl border-4 border-[#e17100] bg-[#ffeeca] text-[#e17100] transition-all hover:scale-130 hover:bg-[#e17100] hover:text-white text-xl px-15 py-5 md:px-20 md:py-5 md:text-2xl transform-gpu  duration-300 ease-out hover:-translate-y-2 hover:shadow-[rgb(241,130,38)] hover:shadow-md">
            
              <p> Dona</p>
            
          </Button>
        </RouterLink>
      </div>
    </div>

    <Footer class="w-full mt-auto"/>
  </div>
</template>



<style scoped>
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
  font-family: 'Unbounded', sans-serif; 
}

.habilidades {
  font-family: 'Unbounded', sans-serif; 
}

</style>
