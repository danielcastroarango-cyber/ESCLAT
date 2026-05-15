<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class=" min-h-screen w-full flex flex-col gap-12 font-sans text-white">
    <div class="flex flex-col items-center gap-10 px-5 md:flex-row md:items-start md:px-20">
      <div class="mt-20 flex w-full flex-col max-w-175 md:w-1/2">
        <img
          class="w-full max-w-175 object-contain duration-300 ease-out hover:-translate-y-2 hover:rotate-1 hover:shadow-xl"
          src="/Imagines/Diseño/Poster_2.jpg"
          alt="Poster 1"
        >
        <Button class="mt-6 rounded-3xl border-4 border-[#850000] bg-[#ffeeca] text-[#850000] transition-all hover:scale-110 hover:bg-[#850000] hover:text-white md:px-10 md:py-6 md:text-2xl">
          <a >Descárgalo como pdf</a>
        </Button>
      </div>

      <div class="my-8 w-full md:w-1/2 ">
        <h1 class="text-7xl px-6 font-bold md:my-20 text-[#850000] border-l-6 border-[#850000]">
          Poster Seven: IRA
        </h1>
        <div class="border-l-4 px-4 border-[#850000]">
        <p class="text-2xl mt-10 md:text-4xl mb-5 text-[#850000]">
          Este trabajo consistió en el diseño de un póster para una obra de teatro basada en la historia de Seven, cuyo eje temático son los siete pecados capitales. En mi caso, se me asignó la realización del cartel centrado en el pecado de la ira.
         </p>

         <p class="text-2xl md:text-4xl mb-5 text-[#850000]">
          Durante el desarrollo del proyecto, el objetivo principal fue explorar distintas formas de representar visualmente la emoción de la ira. Para ello, elaboré varias propuestas iniciales utilizando diferentes recursos gráficos: una basada en el uso de imágenes, otra centrada en la aplicación de texturas y una tercera construida a partir de formas geométricas.
          </p>

          <p class="text-2xl md:text-4xl mb-5 text-[#850000]">
          Tras analizar los resultados obtenidos en cada una de las pruebas, opté finalmente por la propuesta geométrica, ya que ofrecía una mayor flexibilidad para organizar y manipular los elementos dentro de la retícula, facilitando así una composición más controlada y coherente.
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
