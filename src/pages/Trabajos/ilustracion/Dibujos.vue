<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Card, CardContent } from '@/components/ui/card';
import { ilustraciones, type Ilustracion } from './libro';

const inPagina = 3

const nuncPagina = ref(1)

const route = useRoute()

const ilustracion = computed<Ilustracion | undefined>(() =>
  ilustraciones.find((ilus) => ilus.id === Number(route.params.id))
)

const galeriaActual = computed<string[]>(() => ilustracion.value?.galeria ?? [])

const totalPaginae = computed(() =>
  Math.max(1, Math.ceil(galeriaActual.value.length / inPagina))
)

const listaGaleriaPaginada = computed(() => {
  const inicio = (nuncPagina.value - 1) * inPagina
  const fin = inicio + inPagina
  return galeriaActual.value.slice(inicio, fin)
})

const ireAdPagina = (pagina: number) => {
        if (pagina >= 1 && pagina <= totalPaginae.value) {
            nuncPagina.value = pagina
        }
    }

const paginaNumeri = computed<number[]>(() =>
  [...Array(totalPaginae.value)].map((_, i) => i + 1)
)

watch(
  ilustracion,
  () => {
    nuncPagina.value = 1
  },
  { immediate: true }
)



</script>

<template>
  <div class="min-h-screen">
    <div class="flex items-center justify-center  ">
      <div v-if="ilustracion" class="flex flex-col bg-[#850000]  rounded-xl mt-5 justify-center   border-b-6 border-l-0 border-r-0 border-t-0  border-[#e17100] items-center lg:flex-row   w-full max-w-350 md: py-8  px-5 md:px-20">

      <figure class="figure-quote">
  <img 
  class="border-l-4 px-4  border-none"
  :src="`/Imagines/Ilsutracion/${ilustracion.imago}`" alt="" />
</figure>  
        
        <div>


	        <h1 class="titulus-quote text-[#ffeeca]!"> 
		        {{ ilustracion.nomen }}
	        </h1>

	        <div class="info-quote">
		        <p class="descriptione text-[#ffeeca]!">
                 {{ ilustracion.descriptione }}
		        </p>
	                
		      
	        </div>
         

        </div>

        
    </div>
    </div>

     <section id="Libro" class="mt-50 z-10 w-full px-5 md:px-10">
            <h1 class="titulo-portada text-center text-3xl md:text-5xl font-bold mb-10 text-[#850000]">
                Ilustraciones
            </h1>
          
             <div class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            <Card 
                class="w-full cursor-pointer bg-[#850000] border-b-6 border-l-0 border-r-0 border-t-0  border-[#e17100] hover:border-[#850000] hover:bg-[#e17100] text-white hover:text-white transition-colors transform-gpu  duration-300 ease-out "
                v-for="imagen in listaGaleriaPaginada"
                :key="imagen"
                >
                <CardContent
                 class="flex h-130 flex-col items-center gap-1 w-full px-0"
                 
                 >
                    <img 
                    :src="`/Imagines/ImagenesCAR/${imagen}`" 
                    alt=""
                    class="mt-2 w-90 h-full md:w-90 md:h-full object-contain object-top"
                    > 
                </CardContent>
            </Card>
        </div>
        

         <div class="flex items-center justify-center gap-2 mt-4">
        <button
            @click="ireAdPagina(nuncPagina-1)"
            :disabled="nuncPagina === 1"
            :class="['boton px-4 py-2 rounded-md font-medium transition-colors',
                nuncPagina === 1 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#850000] text-[#ffeeca] hover:bg-[#e17100] hover:text-white'
            ]"
        >
            Anterior
        </button>

        <button
            v-for="pagina in paginaNumeri"
            @click="ireAdPagina(pagina)"
            :class="['boton w-10 h-10 rounded-md font-medium transition-colors', 
                nuncPagina === pagina 
                    ? 'bg-[#850000] text-[#ffeeca]' 
                    : 'bg-[#ffeeca] hover:bg-[#f18d30] text-[#850000] hover:text-white'
            ]"
        >
         {{ pagina }}
        </button>

        <button
            :class="[' boton px-4 py-2 rounded-md font-medium transition-colors',
                nuncPagina === totalPaginae 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#850000] text-[#ffeeca] hover:bg-[#e17100] hover:text-white'
            ]"
            @click="ireAdPagina(nuncPagina+1)"
            :disabled="nuncPagina === totalPaginae"
            
        >
         Siguiente
        </button>
       </div>
        </section>


 
  </div>
</template>



<style scoped>

 
  .titulus-quote {
    color: white;
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 1.25rem;
    font-family: 'Unbounded', sans-serif; 
}

.titulo-portada {
  font-family: 'Unbounded', sans-serif; 
}

@media (min-width: 1024px) {
  .titulus-quote {
    font-size: 3rem;
    line-height: 1;
  }
}

.boton {
  font-family: 'Geist', sans-serif
}


 
.quote {
  color: white;
  text-align: center;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 2.2rem;
  margin-bottom: 1.25rem;
  font-family: 'Geist', sans-serif 
}
 
@media (min-width: 1024px) {
  .quote {
    font-size: 2.2rem;
    line-height: 2.5rem;
  }
}
 
.descriptione {
  color: white;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  max-width: 48rem;
}
 
@media (min-width: 1024px) {
  .descriptione {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
 
@media (min-width: 1024px) {
  .info-quote {
    max-width: 48rem;
  }
}

.figure-quote {
  display: flex;
  justify-content: center;
  min-width: min-content;
}

.figure-quote > img {
  object-fit: contain;
  width: 100%;
  max-width: 400px;
}

</style>
