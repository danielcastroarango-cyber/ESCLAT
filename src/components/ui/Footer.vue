<script setup lang="ts">
import { Phone, Mail,  X, Linkedin, Instagram, MessageCircle } from 'lucide-vue-next'



</script>

<template>
    <div>
        <footer class="w-full border-t-5 border-[#1cff2f] bg-black text-white py-12 px-6">

        
         <img
            src="/Imagines/ESCLAT/LOGO_LN.png"
            alt="Logo LN"
            class="mx-auto mb-6 h-24 w-auto"
         />

         
            <h1 class="titulo-portada text-left text-6xl font-bold mb-10  transform-gpu text-[#1cff2f] duration-300 ease-out">Contácto</h1>
    

            <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-3">

                

            <div class="space-y-4 text-left">

                

                <h3 class="text-xl font-bold text-white/75">Información de Contacto</h3>
                    
                <div class="space-y-2">
                    <p class=" titulo-portada text-left text-5xl font-bold mb-10  transform-gpu text-white duration-300 ease-out">
                   

                    info@esclatfestival.com

                    </p>
                  
                
                </div>
                </div>

                <!-- Redes sociales -->
                <div class="space-y-4   text-white/75">
                <h3 class="text-xl font-bold ">Sígue nuestras redes</h3>
                <div class="flex gap-8  text-[#1cff2f]">
                
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
  font-family: 'Anton', sans-serif;
  font-weight: 400;
}

</style>

