<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const visible = ref(true)
const now = ref(new Date())
const targetDate = new Date('2026-06-01T00:00:00')

let interval: ReturnType<typeof setInterval>

const remaining = computed(() => {
  const difference = targetDate.getTime() - now.value.getTime()
  return Math.max(0, difference)
})

const days = computed(() => Math.floor(remaining.value / (1000 * 60 * 60 * 24)))
const hours = computed(() => Math.floor((remaining.value / (1000 * 60 * 60)) % 24))
const minutes = computed(() => Math.floor((remaining.value / (1000 * 60)) % 60))
const seconds = computed(() => Math.floor((remaining.value / 1000) % 60))

onMounted(() => {
  interval = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div
    v-if="visible"
    class="fixed bottom-4 right-4 z-50 max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] max-w-xs overflow-y-auto border-2 border-[#7d39eb] bg-black p-3 text-white shadow-[5px_5px_0_#7d39eb] sm:w-72 md:bottom-6 md:right-6"
  >
    <button
      type="button"
      aria-label="Cerrar popup"
      class="absolute right-2 top-2 flex size-7 items-center justify-center border-2 border-[#7d39eb] bg-black text-lg font-bold leading-none text-[#c6ff33] transition-all duration-300 ease-out  hover:border-[#c6ff33] hover:bg-[#c6ff33] hover:text-black "
      @click="visible = false"
    >
      &times;
    </button>

    <p class="pr-8 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#c6ff33]">
      Las entradas suben de precio en
    </p>

    <div class="mt-4 grid grid-cols-4 gap-1.5">
      <div class="border-2 border-[#c6ff33] bg-black px-1.5 py-2 text-center ">
        <strong class="block text-2xl font-black leading-none text-white">{{ days }}</strong>
        <span class="mt-1.5 block text-[0.55rem] font-bold uppercase tracking-[0.12em] text-white/70">Dias</span>
      </div>

      <div class="border-2 border-[#c6ff33] bg-black px-1.5 py-2 text-center ">
        <strong class="block text-2xl font-black leading-none text-white">{{ hours }}</strong>
        <span class="mt-1.5 block text-[0.55rem] font-bold uppercase tracking-[0.12em] text-white/70">Horas</span>
      </div>

      <div class="border-2 border-[#c6ff33] bg-black px-1.5 py-2 text-center ">
        <strong class="block text-2xl font-black leading-none text-white">{{ minutes }}</strong>
        <span class="mt-1.5 block text-[0.55rem] font-bold uppercase tracking-[0.12em] text-white/70">Min</span>
      </div>

      <div class="border-2 border-[#c6ff33] bg-black px-1.5 py-2 text-center ">
        <strong class="block text-2xl font-black leading-none text-[#c6ff33]">{{ seconds }}</strong>
        <span class="mt-1.5 block text-[0.55rem] font-bold uppercase tracking-[0.12em] text-white/70">Seg</span>
      </div>
    </div>

    <a
      href="#tickets"
      class="mt-4 inline-flex w-full items-center justify-center border-2 border-[#c6ff33] bg-[#c6ff33] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-black transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-black hover:text-[#c6ff33]"
    >
      Comprar ahora
    </a>
  </div>
</template>
