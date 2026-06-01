<script setup lang="ts">
import { computed, ref } from 'vue'
import { lineup as artists } from '@/components/data/lineup'

const activeArtistId = ref<number | null>(null)
const mapWindow = ref<HTMLElement | null>(null)
const isPanning = ref(false)

let panStartX = 0
let panStartY = 0
let panStartScrollLeft = 0
let panStartScrollTop = 0

const activeArtist = computed(() => {
  return artists.find((artist) => artist.id === activeArtistId.value) ?? null
})

const activeCardStyle = computed<Record<string, string>>(() => {
  if (!activeArtist.value) return {} as Record<string, string>

  const x = Math.min(82, Math.max(18, activeArtist.value.x))
  const y = activeArtist.value.y > 62
    ? Math.max(8, activeArtist.value.y - 10)
    : Math.min(86, activeArtist.value.y + 12)

  return {
    '--artist-card-x': `${x}%`,
    '--artist-card-y': `${y}%`,
  }
})

const showArtist = (id: number) => {
  activeArtistId.value = id
}

const hideArtist = () => {
  activeArtistId.value = null
}

const canStartPan = (target: EventTarget | null) => {
  return target instanceof HTMLElement
    && !target.closest('button, a, input, textarea, select, .artist-card')
}

const startPan = (event: PointerEvent) => {
  if (event.pointerType !== 'mouse' || event.button !== 0 || !canStartPan(event.target)) return

  const windowElement = mapWindow.value
  if (!windowElement) return

  isPanning.value = true
  panStartX = event.clientX
  panStartY = event.clientY
  panStartScrollLeft = windowElement.scrollLeft
  panStartScrollTop = windowElement.scrollTop
  windowElement.setPointerCapture(event.pointerId)
}

const panMap = (event: PointerEvent) => {
  const windowElement = mapWindow.value
  if (!isPanning.value || !windowElement) return

  event.preventDefault()
  windowElement.scrollLeft = panStartScrollLeft - (event.clientX - panStartX)
  windowElement.scrollTop = panStartScrollTop - (event.clientY - panStartY)
}

const stopPan = (event: PointerEvent) => {
  const windowElement = mapWindow.value
  if (!isPanning.value || !windowElement) return

  if (windowElement.hasPointerCapture(event.pointerId)) {
    windowElement.releasePointerCapture(event.pointerId)
  }

  isPanning.value = false
}
</script>

<template>
  <div
    ref="mapWindow"
    class="artist-map relative h-[75vh] min-h-[30rem] w-full overflow-auto border-2 border-[#7d39eb] bg-transparent shadow-[6px_6px_0_#7d39eb] focus:outline-none"
    :class="{ 'artist-map--panning': isPanning }"
    tabindex="0"
    aria-label="Mapa desplazable de artistas"
    @pointerdown="startPan"
    @pointermove="panMap"
    @pointerup="stopPan"
    @pointercancel="stopPan"
  >
    <div class="artist-map__canvas">
      <button
        v-for="artist in artists"
        :key="artist.id"
        type="button"
        class="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer appearance-none border-0 bg-transparent p-0 transition-all group-hover:z-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6ff33]"
        :style="{ left: artist.x + '%', top: artist.y + '%' }"
        :aria-label="`Ver informacion de ${artist.name}`"
        @mouseenter="showArtist(artist.id)"
        @mouseleave="hideArtist"
        @focus="showArtist(artist.id)"
        @blur="hideArtist"
        @click="showArtist(artist.id)"
      >
        <img
          :src="artist.image"
          :alt="artist.name"
          class="h-17 w-17 rounded-full border-2 border-[#c6ff33] object-cover shadow-[4px_4px_0_#c6ff33] transition-transform duration-300 group-hover:-translate-y-1 md:h-28 md:w-28 "
        >
      </button>

      <aside
        v-if="activeArtist"
        class="artist-card"
        :class="{ 'artist-card--above': activeArtist.y > 62 }"
        :style="activeCardStyle"
        aria-live="polite"
      >
        <h3 class="artist-card__title">
          {{ activeArtist.name }}
        </h3>
        <p class="artist-card__genre">
          {{ activeArtist.genre }}
        </p>
        <p class="artist-card__bio">
          {{ activeArtist.bio }}
        </p>
      </aside>
    </div>
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

.group:hover {
  z-index: 9999 !important;
}

.artist-map {
  cursor: grab;
  overscroll-behavior: contain;
  scrollbar-color: #c6ff33 #000;
  scrollbar-width: thin;
  touch-action: pan-x pan-y;
}

.artist-map:focus-visible {
  outline: 2px solid #c6ff33;
  outline-offset: 0.35rem;
}

.artist-map--panning {
  cursor: grabbing;
  user-select: none;
}

.artist-map::-webkit-scrollbar {
  width: 0.75rem;
  height: 0.75rem;
}

.artist-map::-webkit-scrollbar-track {
  background: #000;
}

.artist-map::-webkit-scrollbar-thumb {
  border: 3px solid #000;
  background: #c6ff33;
}

.artist-map__canvas {
  position: relative;
  width: max(48rem, 145%);
  height: max(38rem, 125%);
}

.artist-card {
  position: absolute;
  left: var(--artist-card-x);
  top: var(--artist-card-y);
  z-index: 60;
  width: min(18rem, calc(100vw - 3rem));
  max-height: min(44vh, 21rem);
  overflow-y: auto;
  border: 2px solid #c6ff33;
  background: #000;
  padding: clamp(0.75rem, 3vw, 1rem);
  color: #fff;
  box-shadow: 4px 4px 0 #c6ff33;
  transform: translateX(-50%);
}

.artist-card--above {
  transform: translate(-50%, -100%);
}

.artist-card__title {
  overflow-wrap: anywhere;
  font-size: clamp(1rem, 4.5vw, 1.25rem);
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.artist-card__genre {
  margin-top: 0.5rem;
  font-size: clamp(0.7rem, 3vw, 0.875rem);
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #7d39eb;
}

.artist-card__bio {
  margin-top: 0.75rem;
  font-size: clamp(0.82rem, 3.4vw, 1rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.85);
}

@media (min-width: 768px) {
  .artist-map__canvas {
    width: max(72rem, 135%);
    height: max(46rem, 125%);
  }

  .artist-card {
    width: min(20rem, calc(100vw - 3rem));
    max-height: min(22rem, calc(100vh - 5rem));
    padding: 1rem;
  }
}
</style>
