<script setup lang="ts">
import {  X,  Instagram, MessageCircle } from 'lucide-vue-next'



</script>

<template>
    <div>
        <footer class="w-full border-t-5 border-[#c6ff33] bg-black text-center text-white py-8 px-5">

        
         <img
            src="/Imagines/ESCLAT/Diputació de València.png"
            alt="Diputació de València"
            class="mx-8 mb-1 inline-block h-48 w-48 object-contain align-middle md:mx-12 md:mb-5 md:h-64 md:w-64"
         />
         <img
            src="/Imagines/ESCLAT/LOGO_LN.png"
            alt="Logo LN"
            class="mx-8 mb-1 inline-block h-80 w-80 object-contain align-middle md:mx-12 md:mb-5 md:h-[28rem] md:w-[28rem]"
         />
         <img
            src="/Imagines/ESCLAT/Cerveza-turia.png"
            alt="Cerveza Turia"
            class="mx-8 mb-5 inline-block h-40 w-40 object-contain align-middle md:mx-12 md:h-52 md:w-52"
         />
         <img
            src="/Imagines/ESCLAT/Coca-cola.png"
            alt="Coca-Cola"
            class="mx-8 mb-5 inline-block h-48 w-48 object-contain align-middle md:mx-12 md:h-64 md:w-64"
         />

         
            <h1 class="titulo-portada text-left text-6xl font-bold mb-10  transform-gpu text-[#c6ff33] duration-300 ease-out">Contácto</h1>
    

            <div class="grid w-full min-w-0 grid-cols-1 gap-8 text-left md:grid-cols-[minmax(0,1fr)_minmax(12rem,18rem)] md:items-start">

                

            <div class="min-w-0 space-y-4 text-left">

                

                <h3 class="text-xl font-bold text-white/75">Información de Contacto</h3>
                    
                <div class="space-y-2">
                    <p class=" titulo-portada mb-6 max-w-full break-words text-left text-4xl font-bold leading-tight transform-gpu text-white duration-300 ease-out md:text-5xl">
                   

                    info@esclatfestival.com

                    </p>
                  
                
                </div>
                </div>

                <!-- Redes sociales -->
                <div class="min-w-0 space-y-4 text-white/75">
                <h3 class="text-xl font-bold ">Sígue nuestras redes</h3>
                <div class="flex flex-wrap gap-8 text-[#c6ff33]">
                
                    <X class="  w-10 h-10 hover:scale-125 transition-colors" />       
                    
                    <Instagram class="w-10 h-10 hover:scale-125 transition-colors" />
                    <MessageCircle class="w-10 h-10 hover:scale-125 transition-colors" />
                        
                </div>
            </div>
            </div>
        </footer>
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
  font-family: 'Impact', sans-serif;
  font-weight: 400;
}

</style>

