<script setup lang="ts">
import { computed, ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { festivalDays } from '@/components/data/Organizacion'
import Footer from '@/components/ui/Footer.vue'
import NavigatorPrimarius from '@/components/ui/Navegador.vue'
import Banner from '@/components/ui/Banner.vue'

type ActiveLevel = 'level1' | 'level2'

const activeDayIndex = ref(0)
const activeZoneLabel = ref<string | null>(null)
const activeLevel = ref<ActiveLevel | null>(null)
const firstFestivalDay = festivalDays[0]!

const activeDay = computed(() => festivalDays[activeDayIndex.value] ?? firstFestivalDay)

const activeZone = computed(() => {
  return activeDay.value.zones.find((zone) => zone.label === activeZoneLabel.value) ?? null
})

const showZone = (label: string, level: ActiveLevel) => {
  activeZoneLabel.value = label
  activeLevel.value = level
}

const hideZone = () => {
  activeZoneLabel.value = null
  activeLevel.value = null
}

const setActiveDay = (index: number) => {
  activeDayIndex.value = (index + festivalDays.length) % festivalDays.length
  hideZone()
}

const showPreviousDay = () => {
  setActiveDay(activeDayIndex.value - 1)
}

const showNextDay = () => {
  setActiveDay(activeDayIndex.value + 1)
}
</script>

<template>
  <div class="organizacion-page relative isolate flex min-h-screen w-full flex-col overflow-x-hidden bg-white text-black">
    <NavigatorPrimarius class="relative z-10" />
    <Banner />

    <main class="relative z-10 flex flex-1 flex-col items-center justify-center px-2 py-10 md:px-6 lg:px-8">
      <section class="mb-8 w-full max-w-384 self-start px-2 text-left">
        <p class="text-sm font-bold uppercase tracking-[0.32em] text-[#c6ff33] md:text-base">
          Mapa eventos
        </p>
        <h1 class="titulo-portada font-black mt-4 text-6xl  leading-none text-black md:text-8xl">
          Programacion
        </h1>
      </section>

      <section class="mb-10 mt-20 flex w-full max-w-384 items-center justify-center gap-3 px-2 md:gap-5">
        <button
          type="button"
          class="grid size-11 shrink-0 place-items-center border-2 border-[#c6ff33] bg-white text-black  shadow-[4px_4px_0_#c6ff33] transition hover:-translate-y-0.5 hover:bg-[#c6ff33] hover:shadow-[4px_4px_0_#fff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6ff33] md:size-14"
          aria-label="Dia anterior"
          @click="showPreviousDay"
        >
          <ChevronLeft class="size-6" aria-hidden="true" />
        </button>

        <div class="grid min-w-0 flex-1 grid-cols-3 gap-2 md:gap-4">
          <button
            v-for="(day, index) in festivalDays"
            :key="day.id"
            type="button"
            class="min-h-13 border-2 px-2 py-3 text-center text-xs font-black uppercase tracking-[0.14em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6ff33] md:min-h-16 md:text-xl"
            :class="index === activeDayIndex
              ? 'border-[#c6ff33] bg-[#c6ff33] text-black '
              : 'border-[#c6ff33] bg-white text-black hover:border-[#c6ff33] hover:text-[#c6ff33]'"
            :aria-pressed="index === activeDayIndex"
            @click="setActiveDay(index)"
          >
            {{ day.label }}
          </button>
        </div>

        <button
          type="button"
          class="grid size-11 shrink-0 place-items-center border-2 border-[#c6ff33] bg-white text-black  shadow-[4px_4px_0_#c6ff33] transition hover:-translate-y-0.5 hover:bg-[#c6ff33] hover:shadow-[4px_4px_0_#fff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6ff33] md:size-14"
          aria-label="Dia siguiente"
          @click="showNextDay"
        >
          <ChevronRight class="size-6" aria-hidden="true" />
        </button>
      </section>

      <h2 class="titulo-portada font-black text-center text-3xl  leading-none text-black md:text-5xl">
        Nivel 1
      </h2>

      <section
        class="mt-8 grid w-full max-w-440 items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] xl:grid-cols-[24rem_minmax(0,1fr)]"
        @mouseleave="hideZone"
      >
        <aside
          class="order-2 min-h-72 border-2 border-[#c6ff33] bg-black p-5 text-white transition-opacity duration-200 lg:order-1 xl:min-h-96 xl:p-7"
          :class="activeZone && activeLevel === 'level1' ? 'block opacity-100' : 'hidden pointer-events-none opacity-0 lg:block'"
          aria-live="polite"
        >
          <template v-if="activeZone && activeLevel === 'level1'">
            <p class="mb-3 text-base font-bold uppercase tracking-[0.28em] text-[#c6ff33]">
              {{ activeZone.eyebrow }}
            </p>
            <h2 class="titulo-portada font-black text-4xl leading-none md:text-5xl xl:text-6xl">
              {{ activeZone.title }}
            </h2>
            <p class="mt-5 text-base font-medium leading-relaxed text-white/80 xl:text-lg">
              {{ activeZone.copy }}
            </p>
            <ul class="mt-5 grid gap-2 text-sm font-bold text-white xl:text-base">
              <li
                v-for="detail in activeZone.details"
                :key="detail"
                class="border-l-3 border-[#c6ff33] pl-3"
              >
                {{ detail }}
              </li>
            </ul>
          </template>
        </aside>

        <div class="relative order-1 w-full lg:order-2">
          <img
            src="/Imagines/ESCLAT/Nvel1_nave.png"
            alt="Nivel 1 de Las Naves"
            class="w-full object-contain"
          >

          <button
            type="button"
            class="absolute left-[65.78%] top-[22.19%] h-[52.01%] w-[33.11%] cursor-pointer appearance-none border-0 bg-transparent p-0 outline-none"
            aria-label="Ver informacion de la zona 01"
            @mouseenter="showZone('01', 'level1')"
            @focus="showZone('01', 'level1')"
            @click="showZone('01', 'level1')"
          />
          <button
            type="button"
            class="absolute left-[88.18%] top-[74.2%] h-[7.35%] w-[10.71%] cursor-pointer appearance-none border-0 bg-transparent p-0 outline-none"
            aria-label="Ver informacion de la zona 01"
            @mouseenter="showZone('01', 'level1')"
            @focus="showZone('01', 'level1')"
            @click="showZone('01', 'level1')"
          />
          <button
            type="button"
            class="absolute left-[65.78%] top-[74.28%] h-[11.38%] w-[22.39%] cursor-pointer appearance-none border-0 bg-transparent p-0 outline-none"
            aria-label="Ver informacion de la zona 02"
            @mouseenter="showZone('02', 'level1')"
            @focus="showZone('02', 'level1')"
            @click="showZone('02', 'level1')"
          />
          <button
            type="button"
            class="absolute left-[80.12%] top-[85.58%] h-[13.29%] w-[8.06%] cursor-pointer appearance-none border-0 bg-transparent p-0 outline-none"
            aria-label="Ver informacion de la zona 02"
            @mouseenter="showZone('02', 'level1')"
            @focus="showZone('02', 'level1')"
            @click="showZone('02', 'level1')"
          />
          <button
            type="button"
            class="absolute left-[35.96%] top-[22.19%] h-[52.3%] w-[19.55%] cursor-pointer appearance-none border-0 bg-transparent p-0 outline-none"
            aria-label="Ver informacion de la zona 05"
            @mouseenter="showZone('05', 'level1')"
            @focus="showZone('05', 'level1')"
            @click="showZone('05', 'level1')"
          />
          <button
            type="button"
            class="absolute left-[55.5%] top-[2.12%] h-[96.75%] w-[10.28%] cursor-pointer appearance-none border-0 bg-transparent p-0 outline-none"
            aria-label="Ver informacion de la zona 06"
            @mouseenter="showZone('06', 'level1')"
            @focus="showZone('06', 'level1')"
            @click="showZone('06', 'level1')"
          />
          <button
            type="button"
            class="absolute left-[0.68%] top-[2.12%] h-[96.75%] w-[21.38%] cursor-pointer appearance-none border-0 bg-transparent p-0 outline-none"
            aria-label="Ver informacion de la zona 07"
            @mouseenter="showZone('07', 'level1')"
            @focus="showZone('07', 'level1')"
            @click="showZone('07', 'level1')"
          />
        </div>
      </section>

      <h2 class="titulo-portada font-black mt-20 text-center text-3xl  leading-none text-black md:text-5xl">
        Nivel 2
      </h2>

      <section
        class="mt-8 grid w-full max-w-440 items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] xl:grid-cols-[24rem_minmax(0,1fr)]"
        @mouseleave="hideZone"
      >
        <aside
          class="order-2 min-h-72 border-2 border-[#c6ff33] bg-black p-5 text-white transition-opacity duration-200 lg:order-1 xl:min-h-96 xl:p-7"
          :class="activeZone && activeLevel === 'level2' ? 'block opacity-100' : 'hidden pointer-events-none opacity-0 lg:block'"
          aria-live="polite"
        >
          <template v-if="activeZone && activeLevel === 'level2'">
            <p class="mb-3 text-base font-bold uppercase tracking-[0.28em] text-[#c6ff33]">
              {{ activeZone.eyebrow }}
            </p>
            <h2 class="titulo-portada font-black text-4xl leading-none md:text-5xl xl:text-6xl">
              {{ activeZone.title }}
            </h2>
            <p class="mt-5 text-base font-medium leading-relaxed text-white/80 xl:text-lg">
              {{ activeZone.copy }}
            </p>
            <ul class="mt-5 grid gap-2 text-sm font-bold text-white xl:text-base">
              <li
                v-for="detail in activeZone.details"
                :key="detail"
                class="border-l-3 border-[#c6ff33] pl-3"
              >
                {{ detail }}
              </li>
            </ul>
          </template>
        </aside>

        <div class="relative order-1 w-full lg:order-2">
          <img
            src="/Imagines/ESCLAT/Nivel2_nave.png"
            alt="Nivel 2 de Las Naves"
            class="w-full object-contain"
          >

          <button
            type="button"
            class="absolute left-[56.93%] top-[61.57%] h-[36.97%] w-[13.0%] cursor-pointer appearance-none border-0 bg-transparent p-0 outline-none"
            aria-label="Ver informacion de la zona 03"
            @mouseenter="showZone('03', 'level2')"
            @focus="showZone('03', 'level2')"
            @click="showZone('03', 'level2')"
          />
          <button
            type="button"
            class="absolute left-[56.93%] top-[28.65%] h-[31.5%] w-[13.0%] cursor-pointer appearance-none border-0 bg-transparent p-0 outline-none"
            aria-label="Ver informacion de la zona 04"
            @mouseenter="showZone('04', 'level2')"
            @focus="showZone('04', 'level2')"
            @click="showZone('04', 'level2')"
          />
        </div>
      </section>
    </main>

    <Footer class="relative z-10 w-full" />
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
  font-family: 'Neue Montreal', 'Unbounded', sans-serif;
}

.habilidades {
  font-family: 'Unbounded', sans-serif;
}
</style>
