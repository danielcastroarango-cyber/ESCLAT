<script setup lang="ts">
import { Phone, Mail,  X, Linkedin, Instagram, MessageCircle } from 'lucide-vue-next'



</script>

<template>
    <div>
        <footer class="w-full border-t-5 border-[#1cff2f] bg-black text-white py-12">
        
         <RouterLink :to="{ path: '/', hash: '#contactus' }">
            <h1 class="flex flex-col items-center text-4xl font-bold mb-10 hover:scale-120 transform-gpu text-[#1cff2f] duration-300 ease-out">Contáctanos</h1>
         </RouterLink>

            <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

                

            <div class="space-y-4 text-center md:text-left">

                

                <h3 class="text-xl font-bold text-[#1cff2f]">Información de Contacto</h3>
                    
                <div class="space-y-2">
                    <p class="flex items-center gap-2 justify-center md:justify-start">
                    <Phone class=" text-[#1cff2f] w-5 h-5" />

                    +1 (555) 123-4567

                    </p>
                    <p class="flex items-center gap-2 justify-center md:justify-start">
                    <Mail class=" text-[#1cff2f] w-5 h-5" />
                    correo@gmail.com

                    </p>
                
                </div>
                </div>

                <!-- Redes sociales -->
                <div class="space-y-4 text-center md:text-left text-[#1cff2f]">
                <h3 class="text-xl font-bold ">Síguenos</h3>
                <div class="flex gap-8 justify-center">
                
                    <X class="  w-10 h-10 hover:scale-125 transition-colors" />       
                    <Linkedin class="w-10 h-10 hover:scale-125 transition-colors" />
                    <Instagram class="w-10 h-10 hover:scale-125 transition-colors" />
                    <MessageCircle class="w-10 h-10 hover:scale-125 transition-colors" />
                        
                </div>
            </div>
            </div>
        </footer>
    </div>
</template>



<style scoped>

</style>

