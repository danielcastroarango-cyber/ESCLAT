<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ref } from 'vue';

const imagoCirca = ref<string>('Comic.png')

</script>

<template>
  <div class="bg-[#e17100] min-h-screen w-full flex flex-col items-center justify-center gap-12 font-sans text-white">
    <div class="flex  gap-10 px-5 flex-col md:items-start md:px-20">
      <div class=" mt-20 flex w-full flex-col  ">
        <img
          class="w-full max-w-400 border-20 rounded-xl border-[#ffeeca] flex justify-center object-contain"
          :src="`/Imagines/Ilsutracion/${imagoCirca}`"
            alt=""
            @mouseenter="imagoCirca='Comic_Color.png'"
            @mouseleave="imagoCirca='Comic.png'"
        >
        <div class="mt-10 flex w-full flex-col items-center  ">
        <Button class=" mx-auto flex itmes-center text-[#ffeeca] justify-center mt-6 rounded-3xl border-4 border-[#ffeeca] bg-[#e17100]  transition-all hover:scale-110 hover:bg-[#ffeeca] hover:text-[#e17100] md:px-10 md:py-10 md:text-2xl">
          <a >Descárgalo como pdf</a>
        </Button>
        </div>
      </div>

      <div class="mt-10 flex max-w-400 flex-col border-t-10 border-[#ffeeca] border-double ">
        <h1 class="text-7xl font-bold md:my-20 text-center text-[#ffeeca] titulo-portada  mb-10">
          Ilustración cómic
        </h1>

        
        <p class="text-xl  md:text-3xl text-[#ffeeca] mb-5">
          Este trabajo consistió en la creación de un cómic de un máximo de dos páginas basado en una experiencia personal.
        </p>
        
        <p class="text-xl  md:text-3xl text-[#ffeeca] mb-5">
         Para la preparación del proyecto se llevaron a cabo distintas fases de exploración y planificación, tanto a nivel narrativo como visual. Este proceso incluyó la elaboración de una escaleta, la realización de bocetos preliminares de las escenas, así como la organización de las viñetas y el diseño de los personajes. Estas etapas permitieron definir la estructura de la historia y establecer la composición visual antes de abordar la ejecución final.
        </p>

        
        <p class="text-xl  md:text-3xl text-[#ffeeca] mb-5 ">
         En cuanto al proceso de producción, el dibujo y el entintado se realizaron de manera analógica mediante el uso de rotuladores. Posteriormente, el coloreado y la incorporación del texto se llevaron a cabo de forma digital utilizando Adobe Photoshop, combinando así técnicas tradicionales y digitales en el resultado final.
        </p>
       
      </div>
    </div>
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