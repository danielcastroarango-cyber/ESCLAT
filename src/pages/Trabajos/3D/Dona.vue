<script setup lang="ts">
import { computed, ref } from "vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dona } from "./Dona.ts";

const indiceActual = ref(0);
const pasoVacio = {
  nomen: "",
  imago: "",
  descriptione: "",
};
const pasoActual = computed(() => Dona[indiceActual.value] ?? pasoVacio);

const siguientePaso = () => {
  indiceActual.value = (indiceActual.value + 1) % Dona.length;
};
</script>

<template>
  <div class="min-h-screen bg-[#850000] px-4 py-12 text-white md:px-8">
    <section class="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
      <h1 class="titulo-portada text-center text-6xl font-bold text-[#ffeeca] md:text-9xl">
        Dona Blender
      </h1>

      <Card class="w-full  max-w-9xl border-b-6 border-t-0 border-r-0 border-l-0 border-[#e17100] bg-[#ffeeca] text-white shadow-xl">
        <CardHeader>
          <CardTitle class="text-center text-2xl text-[#850000] md:text-3xl titulo-portada">
            {{ pasoActual.nomen }}
          </CardTitle>
        </CardHeader>

        <CardContent class="grid grid-cols-1 items-center gap-8 p-6 md:grid-cols-1">
          <img
            :src="`/Imagines/DonaProc/${pasoActual.imago}`"
            :alt="pasoActual.nomen"
            class="h-full w-full  cursor-pointer rounded-lg border border-none object-cover transition-transform hover:scale-[1.02]"
            @click="siguientePaso"
          />

          <div class="space-y-4">
            <p class="text-lg leading-relaxed md:text-xl text-[#850000]">
              {{ pasoActual.descriptione }}
            </p>
            <p class="text-sm text-[rgb(180,83,18)]">
              Haz clic en la imagen para ver el siguiente paso.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
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