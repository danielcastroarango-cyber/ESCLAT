<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Footer from '@/components/ui/Footer.vue'
import NavigatorPrimarius from '@/components/ui/Navegador.vue'
import Banner from '@/components/ui/Banner.vue'

const asciiStar = String.raw`       *
    *  |  *
 * ----+---- *
     \ | /
  -----+-----
     / | \
 * ----+---- *
    *  |  *
       *`

const tickets = [
  {
    title: 'Early Bird',
    price: '25 EUR',
    text: 'Entrada anticipada antes de la subida de precio.',
  },
  {
    title: 'General Pass',
    price: '40 EUR',
    text: 'Acceso completo a musica, instalaciones, visuales y performances.',
  },
  {
    title: 'Backstage',
    price: '75 EUR',
    text: 'Incluye zonas exclusivas, charlas con artistas y merch limitada.',
  },
]

const eventDetails = [
  {
    title: 'Hora de apertura',
    value: '18:00 h',
    text: 'Apertura de puertas y acceso al recinto.',
  },
  {
    title: 'Edad minima',
    value: '+18',
    text: 'Sera necesario presentar un documento de identidad valido.',
  },
  {
    title: 'Vestimenta',
    value: 'Libre',
    text: 'Looks underground, industriales, noventeros o lo que te haga sentir tuyo.',
  },
]
</script>

<template>
  <div class="home-geist flex min-h-screen w-full flex-col items-center text-white">
    <NavigatorPrimarius />
    <Banner />

    <main class="relative flex w-full flex-1 flex-col items-center overflow-visible bg-black text-white">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_18%,rgba(198,255,51,0.55)_0_1px,transparent_2px),radial-gradient(circle_at_82%_28%,rgba(198,255,51,0.42)_0_1px,transparent_2px),radial-gradient(circle_at_35%_78%,rgba(198,255,51,0.5)_0_1px,transparent_2px)] bg-[length:84px_84px,132px_132px,108px_108px] opacity-75"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(198,255,51,0.16),transparent_34%),linear-gradient(145deg,rgba(198,255,51,0.11),transparent_30%,rgba(198,255,51,0.08)_58%,transparent_84%)]"
      />

      <section
        id="home"
        class="relative z-10 flex min-h-[58vh] w-full items-center justify-center overflow-visible px-4 py-20 text-white md:min-h-[64vh] lg:min-h-[70vh]"
      >
        <div class="mx-auto flex w-full max-w-384 flex-col items-center px-2 text-center">
          <div class="flex max-w-full items-center justify-center gap-2 overflow-visible p-8 sm:gap-5 md:gap-8 lg:gap-10 xl:gap-12">
            <img
              src="/Imagines/ESCLAT/ESCLATLOGO_Verde.png"
              alt="ESCLAT"
              class="h-auto w-[min(88vw,64rem)] shrink-0 drop-shadow-[0_0_22px_rgba(198,255,51,0.55)]"
            >
            
          </div>
        </div>
      </section>

      <section id="tickets" class="relative z-10 w-full px-4 pb-24 md:px-10 lg:px-14">
        <div class="mb-10 w-full text-left">
          <p class="text-sm font-bold uppercase tracking-[0.32em] text-[#C6FF33] md:text-base">
            Entradas
          </p>
          <h2 class="titulo-portada mt-4 text-6xl  leading-none text-white md:text-8xl">
            Acceso al sistema
          </h2>
        </div>

        <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          <Card
            v-for="ticket in tickets"
            :key="ticket.title"
            class="h-full rounded-none border-2 border-[#C6FF33] bg-transparent text-[#C6FF33] shadow-[6px_6px_0_#C6FF33] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#C6FF33] hover:text-black"
          >
            <CardHeader class="px-5 pb-0">
              <CardTitle class="titulo-portada text-4xl font-normal leading-none md:text-5xl">
                {{ ticket.title }}
              </CardTitle>
            </CardHeader>
            <CardContent class="px-5 text-base leading-relaxed md:text-lg">
              <p class="titulo-portada mb-5 text-5xl leading-none md:text-6xl">
                {{ ticket.price }}
              </p>
              <p>{{ ticket.text }}</p>
            </CardContent>
          </Card>
        </div>
      </section>

       <section id="about" class="relative z-10 w-full px-4 pb-28 pt-8 text-left md:px-10 lg:px-14 mt-20">
     <p class="text-sm font-bold uppercase tracking-[0.32em] mb-5 text-[#C6FF33] md:text-base">
            sobre esclat
          </p>
      <h2 class="titulo-portada  text-6xl font-normal leading-none text-white md:text-7xl lg:text-6xl">Una noche de ruptura</h2>

      <p class="mt-10 max-w-8xl text-2xl font-normal leading-relaxed text-white/85 ">
       ESCLAT se transforma en un refugio para quienes buscan desaparecer de las normas y encontrarse de verdad. Un lugar donde la noche no exige máscaras, donde cada cuerpo, cada look y cada forma de sentir tiene cabida. Aquí no existe el juicio: existe la LIBERTAD. La estética mezcla la energía de los 90, el imaginario industrial berlinés y la irreverencia valenciana. Luces frías, neón, metal, humo, trance y caos bonito. Un universo donde lo underground se convierte en hogar y donde lo diferente no solo se acepta: se celebra. ESCLAT no es solo un festival sino un espacio de liberación colectiva. Un punto de encuentro para almas intensas y auténticas. Durante unas horas, todo explota: la música, la identidad y el deseo de expresarse sin filtros. Las actividades interactivas y  las conversaciones hacen de este festival un lugar mágico 
Porque en ESCLAT nadie viene a encajar la gente viene a ser.
      </p>
      <div id="requerimientos" class="mt-12 grid w-full grid-cols-1 gap-6 border-t-2 border-[#C6FF33] pt-8 text-white/85 md:grid-cols-3">
        <div
          v-for="detail in eventDetails"
          :key="detail.title"
          class="text-left"
        >
          <h3 class="titulo-portada text-3xl font-medium leading-none text-[#C6FF33] md:text-4xl">
            {{ detail.title }}
          </h3>
          <p class="titulo-portada mt-4 text-2xl leading-none text-white md:text-3xl">
            {{ detail.value }}
          </p>
          <p class="mt-5 text-lg font-normal leading-relaxed md:text-xl">
            {{ detail.text }}
          </p>
        </div>
      </div>
    </section>

      
     <section id="mapa" class="relative z-10 w-full px-4 py-20 text-white md:px-10 lg:px-14">
      <div class="grid min-h-[82vh] w-full grid-cols-1 overflow-hidden rounded-none border-2 border-[#C6FF33] bg-transparent text-white shadow-[6px_6px_0_#C6FF33] transition-all duration-300 ease-out hover:-translate-y-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.65fr)]">
      <iframe
        title="Mapa de Las Naves, Valencia"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2599.603068669508!2d-0.34166637408784967!3d39.4591461749516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048f63da49ce1%3A0x37b1bcba9ad9547a!2sLas%20Naves%20%7C%20Centro%20de%20innovaci%C3%B3n%20social%20y%20urbana!5e1!3m2!1ses-419!2ses!4v1778776187665!5m2!1ses-419!2ses" 
        class="h-[65vh] w-full border-0 lg:h-full"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />

      <div class="flex min-h-[35vh] flex-col justify-center border-t-2 border-[#C6FF33] px-6 py-12 text-left lg:min-h-full lg:border-l-2 lg:border-t-0 lg:px-12">
        <h2 class="titulo-portada text-5xl font-bold leading-none text-white md:text-7xl lg:text-8xl">
          Donde nos ubicamos
        </h2>
        <p class="mt-8 max-w-xl text-xl font-medium leading-relaxed text-white/85 md:text-3xl">
          C/ de Joan Verdeguer, 16, Poblats Marítims, 46024 València, Valencia
        </p>
      </div>
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
  font-family: 'Geist', sans-serif;
}

.titulo-portada {
  font-family: 'Anton', 'Unbounded', sans-serif;
}

.habilidades {
  font-family: 'Unbounded', sans-serif;
}
</style>
