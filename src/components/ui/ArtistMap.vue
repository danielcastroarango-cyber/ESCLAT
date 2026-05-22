<script setup lang="ts">
import { computed, ref } from 'vue'
import { lineup as artists } from '@/components/data/lineup'

const activeArtistId = ref<number | null>(null)

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
</script>

<template>
  <div class="relative min-h-[75vh] w-full overflow-visible border-2 border-[#1cff2f] bg-transparent shadow-[6px_6px_0_#1cff2f]">
    <button
      v-for="artist in artists"
      :key="artist.id"
      type="button"
      class="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer appearance-none border-0 bg-transparent p-0 transition-all group-hover:z-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1cff2f]"
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
        class="h-17 w-17 rounded-full border-2 border-[#1cff2f] object-cover shadow-[4px_4px_0_#1cff2f] transition-transform duration-300 group-hover:-translate-y-1 md:h-28 md:w-28 "
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

.group:hover {
  z-index: 9999 !important;
}

.artist-card {
  position: absolute;
  inset-inline: 0.75rem;
  bottom: 0.75rem;
  z-index: 60;
  max-height: min(44vh, 21rem);
  overflow-y: auto;
  border: 2px solid #1cff2f;
  background: #000;
  padding: clamp(0.75rem, 3vw, 1rem);
  color: #fff;
  box-shadow: 4px 4px 0 #1cff2f;
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
  color: #1cff2f;
}

.artist-card__bio {
  margin-top: 0.75rem;
  font-size: clamp(0.82rem, 3.4vw, 1rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.85);
}

@media (min-width: 768px) {
  .artist-card {
    inset-inline: auto;
    bottom: auto;
    left: var(--artist-card-x);
    top: var(--artist-card-y);
    width: min(20rem, calc(100vw - 3rem));
    max-height: min(22rem, calc(100vh - 5rem));
    padding: 1rem;
    transform: translateX(-50%);
  }

  .artist-card--above {
    transform: translate(-50%, -100%);
  }
}
</style>
