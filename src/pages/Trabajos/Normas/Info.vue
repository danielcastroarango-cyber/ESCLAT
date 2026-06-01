<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Footer from '@/components/ui/Footer.vue'
import NavigatorPrimarius from '@/components/ui/Navegador.vue'
import Banner from '@/components/ui/Banner.vue'

const rules = [
  {
    title: '01 - Respeto',
    text: 'No se tolerara ningun tipo de violencia, acoso, discriminacion o comportamiento invasivo.',
  },
  {
    title: '02 - Entrada',
    text: 'Sera obligatorio presentar la entrada valida y un documento de identidad que acredite mayoria de edad si se solicita.',
  },
  {
    title: '03 - Espacio',
    text: 'Cuida las instalaciones, las obras, el sonido, el equipo tecnico y el entorno.',
  },
  {
    title: '04 - Sustancias',
    text: 'No esta permitido entrar con bebidas, objetos peligrosos o sustancias ilegales.',
  },
  {
    title: '05 - Fotos y video',
    text: 'Esta permitido grabar contenido, siempre respetando la privacidad de otras personas.',
  },
  {
    title: '06 - Comunidad',
    text: 'ESCLAT es un espacio seguro, experimental y colectivo. Ven con energia, pero tambien con cuidado.',
  },
]

const faqs = [
  {
    question: 'Puedo entrar y salir del recinto?',
    answer: 'La salida y reentrada dependera del tipo de entrada y del aforo del momento. Conserva siempre tu pulsera o acreditacion.',
  },
  {
    question: 'Hay guardarropa?',
    answer: 'Si, el festival contara con una zona de guardarropa. Te recomendamos no traer objetos de valor innecesarios.',
  },
  {
    question: 'Puedo llevar comida o bebida?',
    answer: 'No esta permitido acceder con comida o bebida del exterior. Dentro del recinto habra puntos habilitados.',
  },
  {
    question: 'El espacio es accesible?',
    answer: 'Las Naves cuenta con accesos adaptados. Si necesitas asistencia concreta, contacta con la organizacion antes del evento.',
  },
  {
    question: 'Que pasa si llego tarde?',
    answer: 'Podras acceder mientras el recinto siga abierto y el aforo lo permita. Consulta la programacion para no perderte actuaciones concretas.',
  },
]
</script>

<template class="">
  <div class="min-h-screen w-full flex flex-col items-center justify-center font-sans">
    <NavigatorPrimarius />
    <Banner />
    <main class="flex w-full flex-1 flex-col items-center justify-center gap-12 bg-black text-white">
    <div class="flex w-full flex-col gap-15 justify-center items-start">
      <div class="my-8 w-full max-w-350 px-4 text-left md:px-10 lg:px-14">
        <h1 class="titulo-portada text-7xl md:text-9xl  text-left md:my-20 mb-10 ">
          Normas
        </h1>
        <p class="text-left text-xl md:text-3xl text-white">
          Cosas que deberias saber antes de entrar
        </p>
      </div>
    </div>

    <section id="Normas" class="w-full px-4 pb-20 md:px-10 lg:px-14">
      <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="rule in rules"
          :key="rule.title"
          class="h-full rounded-none border-2 border-[#7d39eb] bg-black text-white shadow-[6px_6px_0_#7d39eb] "
        >
          <CardHeader class="px-5 pb-0">
            <CardTitle class="titulo-portada  text-[#c6ff33] text-3xl font-normal leading-none md:text-4xl">
              {{ rule.title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="px-5 text-base leading-relaxed  md:text-lg">
            <p>{{ rule.text }}</p>
          </CardContent>
        </Card>
      </div>
    </section>



    <section id="mapa" class="grid min-h-screen w-full grid-cols-1 overflow-hidden bg-black text-white lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.65fr)]">
      <iframe
        title="Mapa de Las Naves, Valencia"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2599.603068669508!2d-0.34166637408784967!3d39.4591461749516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048f63da49ce1%3A0x37b1bcba9ad9547a!2sLas%20Naves%20%7C%20Centro%20de%20innovaci%C3%B3n%20social%20y%20urbana!5e1!3m2!1ses-419!2ses!4v1778776187665!5m2!1ses-419!2ses" 
        class="h-[65vh] w-full border-0 lg:h-screen"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />

      <div class="flex min-h-[35vh] flex-col justify-center  border-[#7d39eb] px-6 py-12 text-left lg:min-h-screen lg:border-l-5 lg:border-t-0 lg:px-12">
        <h2 class="titulo-portada text-5xl font-bold leading-none text-[#c6ff33] md:text-7xl lg:text-8xl">
          Donde nos ubicamos
        </h2>
        <p class="mt-8 max-w-xl text-xl font-medium leading-relaxed text-white md:text-3xl">
          C/ de Joan Verdeguer, 16, Poblats Marítims, 46024 València, Valencia
        </p>
      </div>
    </section>

    <section id="faqs" class="w-full bg-black px-4 py-20  md:px-10 lg:px-14">
      <div class="w-full max-w-9xl">
        <h2 class="titulo-portada mb-10 text-left text-[#c6ff33] text-6xl font-bold leading-none md:text-8xl">
          FAQ´S
        </h2>

        <Accordion type="single" collapsible class="w-full border-t-2 border-[#7d39eb]">
          <AccordionItem
            v-for="faq in faqs"
            :key="faq.question"
            :value="faq.question"
            class="border-b-2 border-[#7d39eb]"
          >
            <AccordionTrigger class="py-6 text-left text-xl font-bold uppercase tracking-[0.08em] text-white hover:no-underline md:text-2xl">
              {{ faq.question }}
            </AccordionTrigger>
            <AccordionContent class="pb-6 text-lg leading-relaxed text-white/80 md:text-xl">
              {{ faq.answer }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    </main>

    <Footer class="w-full" />
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

.home-geist {
  font-family: 'Neue Montreal', sans-serif;
}

.titulo-portada {
  font-family: 'Impact', sans-serif;
}

.habilidades {
  font-family: 'Unbounded', sans-serif;
}
</style>
