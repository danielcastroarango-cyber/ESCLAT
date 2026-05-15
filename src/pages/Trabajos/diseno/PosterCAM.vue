<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="bg-[#e17100] min-h-screen w-full flex gap-12 font-sans text-white">
    <div class="flex flex-col items-center gap-10 px-5 md:flex-col md:items-start md:px-20  lg:px-8">
       <div class="mt-20 flex w-full max-w-7xl  flex-col gap-8 md:w-full md:flex-col  lg:flex-row lg:flex-nowrap lg:items-start lg:gap-3 ">
        <img
          class="w-full max-w-175 h-auto object-contain  md:w-1/3 2xl:w-3/4 2xl:mx-10 duration-300 ease-out hover:-translate-y-2 hover:rotate-1 hover:shadow-xl "
          src="/Imagines/Diseño/Poster_Rosario_FinalPS.png"
          alt="Poster 1"
        >

         <img
          class="w-full max-w-175 h-auto object-contain  md:w-1/3 2xl:w-3/4 2xl:mx-10 duration-300 ease-out hover:-translate-y-2 hover:rotate-1 hover:shadow-xl "
          src="/Imagines/Diseño/Poster_Disco_FinalPS.png"
          alt="Poster 1"
        >

        <img
          class="w-full max-w-175 h-auto object-contain md:w-1/3 2xl:w-3/4 2xl:mx-10 duration-300 ease-out hover:-translate-y-2 hover:rotate-1 hover:shadow-xl"
          src="/Imagines/Diseño/Poster_libro_FinalPS.png"
          alt="Poster 1"
        >

        </div>

        <Button class="mt-6 flex justify-center items-center rounded-3xl border-4 border-white bg-[#e17100] text-white transition-all hover:scale-110 hover:bg-white hover:text-[#e17100] md:px-10 md:py-6 md:text-2xl">
          <a >Descárgalos como pdf</a>
        </Button>
      
      <div class="my-8 w-full md:w-1/2">
        <h1 class="text-7xl px-6 font-bold md:my-20 text-white  border-l-6 border-white">
          Poster Campaña 
        </h1>

        <div class="border-l-4 px-4 border-white">
          <p class="text-2xl mt-10 md:text-4xl mb-5 text-white">
            Este proyecto consistió en el desarrollo de una campaña intergeneracional orientada a fomentar una mayor conexión entre las generaciones jóvenes y las personas de mayor edad. El objetivo principal de la campaña era evidenciar que, a pesar de la diferencia de edad, existen numerosos puntos en común que pueden servir como puente para acercar ambas realidades y cuestionar ciertos prejuicios asociados a cada generación.
          </p>

            <p class="text-2xl mt-10 md:text-4xl mb-5 text-white">
            Para alcanzar este objetivo, junto a mi equipo decidimos centrar el concepto de la campaña en la identificación de elementos culturales compartidos. A partir de esta idea, desarrollamos diversos recursos gráficos, entre los que destacan estos tres carteles. En ellos se representan objetos tradicionalmente asociados a generaciones mayores, pero que en los últimos años han vuelto a adquirir popularidad entre el público joven. Cada pieza incorpora una pregunta dirigida al espectador, diseñada para invitar a la reflexión y cuestionar los estereotipos existentes. Esta reflexión culmina con la aparición destacada del eslogan de la campaña, que actúa como mensaje principal y refuerza la intención de desmontar dichos prejuicios.
          </p>

          <p class="text-2xl mt-10 md:text-4xl mb-5 text-white">
            En cuanto al planteamiento estético, optamos por un diseño visual cercano y accesible, con el propósito de facilitar la identificación del público con el mensaje de la campaña. La paleta cromática, compuesta principalmente por tonos pastel, contribuye a generar una atmósfera amable y acogedora. Asimismo, se incorporó una textura de grano y desgaste que remite a la estética gráfica de los carteles del siglo pasado, estableciendo así un diálogo visual entre pasado y presente que refuerza conceptualmente el carácter intergeneracional del proyecto.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
