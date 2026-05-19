<script setup lang="ts">
import { computed, ref } from 'vue'
import { mapZones } from '@/components/data/Organizacion'
import Footer from '@/components/ui/Footer.vue'
import NavigatorPrimarius from '@/components/ui/Navegador.vue'

type ActiveLevel = 'level1' | 'level2'

const activeZoneLabel = ref<string | null>(null)
const activeLevel = ref<ActiveLevel | null>(null)

const activeZone = computed(() => {
  return mapZones.find((zone) => zone.label === activeZoneLabel.value) ?? null
})

const showZone = (label: string, level: ActiveLevel) => {
  activeZoneLabel.value = label
  activeLevel.value = level
}

const hideZone = () => {
  activeZoneLabel.value = null
  activeLevel.value = null
}
</script>

<template>
  <div class="organizacion-page relative isolate flex min-h-screen w-full flex-col overflow-x-hidden bg-black text-white">
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_12%_18%,rgba(28,255,47,0.55)_0_1px,transparent_2px),radial-gradient(circle_at_82%_28%,rgba(28,255,47,0.42)_0_1px,transparent_2px),radial-gradient(circle_at_35%_78%,rgba(28,255,47,0.5)_0_1px,transparent_2px)] bg-[length:84px_84px,132px_132px,108px_108px] opacity-75"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(28,255,47,0.16),transparent_34%),linear-gradient(145deg,rgba(28,255,47,0.11),transparent_30%,rgba(28,255,47,0.08)_58%,transparent_84%)]"
    />

    <NavigatorPrimarius class="relative z-10" />

    <main class="relative z-10 flex flex-1 flex-col items-center justify-center px-2 py-10 md:px-6 lg:px-8">
      <h1 class="titulo-portada  text-center text-6xl font-bold leading-none text-white md:text-8xl">
        Nivel 1
      </h1>

      <section
        class="mt-8 grid w-full max-w-440 items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]"
        @mouseleave="hideZone"
      >
        <aside
          class="min-h-72 border-2 border-[#1cff2f] bg-black p-5 text-white transition-opacity duration-200"
          :class="activeZone && activeLevel === 'level1' ? 'opacity-100' : 'pointer-events-none opacity-0'"
          aria-live="polite"
        >
          <template v-if="activeZone && activeLevel === 'level1'">
            <p class="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#1cff2f]">
              {{ activeZone.eyebrow }}
            </p>
            <h2 class="titulo-portada text-5xl leading-none md:text-6xl">
              {{ activeZone.title }}
            </h2>
            <p class="mt-5 text-base font-medium leading-relaxed text-white/80">
              {{ activeZone.copy }}
            </p>
            <ul class="mt-5 grid gap-2 text-sm font-bold text-white">
              <li
                v-for="detail in activeZone.details"
                :key="detail"
                class="border-l-3 border-[#1cff2f] pl-3"
              >
                {{ detail }}
              </li>
            </ul>
          </template>
        </aside>

        <div class="relative w-full">
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

      <h1 class="titulo-portada mt-20 text-center text-6xl font-bold leading-none text-white md:text-8xl">
        Nivel 2
      </h1>

      <section
        class="mt-8 grid w-full max-w-440 items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]"
        @mouseleave="hideZone"
      >
        <aside
          class="min-h-72 border-2 border-[#1cff2f] bg-black p-5 text-white transition-opacity duration-200"
          :class="activeZone && activeLevel === 'level2' ? 'opacity-100' : 'pointer-events-none opacity-0'"
          aria-live="polite"
        >
          <template v-if="activeZone && activeLevel === 'level2'">
            <p class="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#1cff2f]">
              {{ activeZone.eyebrow }}
            </p>
            <h2 class="titulo-portada text-5xl leading-none md:text-6xl">
              {{ activeZone.title }}
            </h2>
            <p class="mt-5 text-base font-medium leading-relaxed text-white/80">
              {{ activeZone.copy }}
            </p>
            <ul class="mt-5 grid gap-2 text-sm font-bold text-white">
              <li
                v-for="detail in activeZone.details"
                :key="detail"
                class="border-l-3 border-[#1cff2f] pl-3"
              >
                {{ detail }}
              </li>
            </ul>
          </template>
        </aside>

        <div class="relative w-full">
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
  font-family: 'Geist', sans-serif;
}

.titulo-portada {
  font-family: 'Anton', 'Unbounded', sans-serif;
}

.habilidades {
  font-family: 'Unbounded', sans-serif;
}
</style>
