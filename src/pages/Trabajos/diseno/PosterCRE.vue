<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="bg-[#850000] min-h-screen w-full flex flex-col gap-12 font-sans text-[#ffeeca]">
    <div class="flex flex-col items-center gap-10 px-5 md:flex-row md:items-start md:px-20">
      <div class="mt-20 flex w-full flex-col max-w-175 md:w-1/2">
        <img
          class="w-full max-w-175 object-contain duration-300 ease-out hover:-translate-y-2 hover:rotate-1 hover:shadow-xl"
          src="/Imagines/Diseño/Poster_1.png"
          alt="Poster 1"
        >
        <Button class="mt-6 rounded-3xl border-4 border-[#ffeeca] bg-[#850000] text-[#ffeeca]  transition-all hover:scale-110 hover:bg-[#ffeeca] hover:text-[#850000] md:px-10 md:py-6 md:text-2xl">
          <a >Descárgalo como pdf</a>
        </Button>
      </div>

      <div class="my-8 w-full md:w-1/2">
        <h1 class="text-7xl px-6 font-bold md:my-20 border-[#ffeeca] text-[#ffeeca] border-l-6">
          Poster CREFAD
        </h1>

        <div class="border-l-4 px-4 border-[#ffeeca]">
        <p class="text-2xl mt-10 md:text-4xl mb-5 text-[#ffeeca]">
            Este proyecto consistió en el diseño del cartel para el Congreso Iberoamericano de Creación y Fabricación Digital. Tal como sugiere el propio nombre del evento, decidí orientar la estética del cartel hacia un estilo de carácter tecnológico, utilizando para ello tanto las formas gráficas como la tipografía.
        </p>

         <p class="text-2xl md:text-4xl mb-5 text-[#ffeeca] ">
          En este trabajo tuve una mayor libertad para experimentar con la retícula y la disposición del texto. Esto me permitió explorar diferentes posibilidades compositivas y adoptar un enfoque más creativo en la organización de los elementos del cartel. Como resultado, se obtuvo un diseño más innovador y poco convencional, con el objetivo de captar la atención del espectador.
        </p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>>
