<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import Banner from '@/components/ui/Banner.vue'

const artistStories = [
  {
    src: '/Imagines/ESCLAT/ESCLAT_INSTAGRAM_STORY.jpg',
    alt: 'ESCLAT Instagram story 1',
    title: 'ONLY NUMBERS',
    subtitle: 'HARD TECHNO',
    description: 'DJ y productor nacido en Francia y afincado en Chequia: hard techno euforico, percusivo y directo, con energia de rave contemporanea.',
  },
  {
    src: '/Imagines/ESCLAT/ESCLAT_INSTAGRAM_STORY_2.jpg',
    alt: 'ESCLAT Instagram story 2',
    title: 'MOCHAKK',
    subtitle: 'HOUSE',
    description: 'Pedro Maia, DJ y productor brasileño, lleva el house y el tech house a un terreno fisico, groovero y muy expresivo.',
  },
  {
    src: '/Imagines/ESCLAT/ESCLAT_INSTAGRAM_STORY_3.jpg',
    alt: 'ESCLAT Instagram story 3',
    title: 'SARA LANDRY',
    subtitle: 'HARD TECHNO',
    description: 'DJ, productora y fundadora de sello estadounidense: hard techno oscuro, industrial y contundente, construido desde una vision propia.',
  },
  {
    src: '/Imagines/ESCLAT/ESCLAT_INSTAGRAM_STORY_4.jpg',
    alt: 'ESCLAT Instagram story 4',
    title: 'KOBOSIL',
    subtitle: 'INDUSTRIAL TECHNO',
    description: 'Productor y DJ aleman criado en Berlin-Neukolln; techno profundo, rapido y agresivo atravesado por EBM, ruido e industrial.',
  },
  {
    src: '/Imagines/ESCLAT/ESCLAT_INSTAGRAM_STORY_5.jpg',
    alt: 'ESCLAT Instagram story 5',
    title: 'CHARLIE SPARKS',
    subtitle: 'ACID TECHNO',
    description: 'DJ y productor britanico de alto voltaje: mezcla acid, industrial, rave y grooves de psytrance en techno frontal y acelerado.',
  },
   {
    src: '/Imagines/ESCLAT/ESCLAT_INSTAGRAM_STORY_6.jpg',
    alt: 'ESCLAT Instagram story 6',
    title: 'FUNKY TRIBU',
    subtitle: 'NU-TRANCE',
    description: 'Productor y DJ colombiano afincado en Berlin, figura del nu-trance: grooves hipnoticos y energia club retrofuturista.',
  },
  {
    src: '/Imagines/ESCLAT/ESCLAT_INSTAGRAM_STORY_7.jpg',
    alt: 'ESCLAT Instagram story 7',
    title: 'AMELIE LENS',
    subtitle: 'TECHNO MINIMAL',
    description: 'DJ y productora belga de Amberes, al frente de Lenske y EXHALE: techno hipnotico y atmosferico con energia rave y alcance global.',
  },
]

const marqueeStories = [...artistStories, ...artistStories]
const isRevealed = ref(false)
const isHoverEnabled = ref(false)
let hoverEnableTimeout: ReturnType<typeof window.setTimeout> | undefined

const revealPage = () => {
  if (isRevealed.value) {
    return
  }

  isRevealed.value = true
  hoverEnableTimeout = window.setTimeout(() => {
    isHoverEnabled.value = true
  }, 1150)
}

onUnmounted(() => {
  window.clearTimeout(hoverEnableTimeout)
})
</script>

<template>
  <div
    class="artistas-page min-h-screen w-full overflow-hidden bg-black text-white"
    @click="revealPage"
  >
    <Banner />

    <main
      class="relative flex min-h-[calc(100vh-5rem)] w-full items-center overflow-hidden px-4 py-16 md:px-10 lg:px-14"
      :class="{ 'artists-hover-ready': isHoverEnabled }"
    >
      <div
        aria-hidden="true"
        class="absolute inset-0 z-0 overflow-hidden"
      >
        <div class="story-marquee flex h-full w-max">
          <div
            v-for="(story, index) in marqueeStories"
            :key="`${story.src}-${index}`"
            class="story-slide"
          >
            <img
              :src="story.src"
              alt=""
              class="h-full w-full object-cover"
            >
            <div class="story-info">
              <h2 class="story-title">
                {{ story.title }}
              </h2>
              <p class="story-subtitle">
                {{ story.subtitle }}
              </p>
              <p class="story-description">
                {{ story.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        class="artistas-filter pointer-events-none absolute inset-0 z-1 bg-black/45"
        :class="{ 'artistas-filter-hidden': isRevealed }"
      />
      <div
        aria-hidden="true"
        class="artistas-filter pointer-events-none absolute inset-x-0 bottom-0 z-1 h-2/3 bg-linear-to-t from-black via-black/55 to-transparent"
        :class="{ 'artistas-filter-hidden': isRevealed }"
      />

      <section
        class="headline-block relative z-10 w-full max-w-6xl"
        :class="{ 'headline-block-hidden': isRevealed }"
      >
        <div class="w-full text-left">
          <p class="text-sm font-bold uppercase tracking-[0.32em] text-[#c6ff33] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] md:text-base">
            Lineup
          </p>
          <h1 class="titulo-portada mt-4 text-6xl font-black leading-none text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)] md:text-8xl">
            Artistas
          </h1>
        </div>
      </section>
    </main>
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

.artistas-page {
  font-family: 'Neue Montreal', sans-serif;
}

.titulo-portada {
  font-family: 'Neue Montreal', 'Unbounded', sans-serif;
}

.story-marquee {
  min-height: 100%;
  animation: artists-marquee 56s linear infinite;
  will-change: transform;
}

.story-slide {
  position: relative;
  flex: 0 0 auto;
  height: 100%;
  width: min(26vw, 56.25vh);
  overflow: hidden;
}

.story-slide::after {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: #c6ff33;
  content: '';
  opacity: 0;
  transition: opacity 260ms ease;
}

.artists-hover-ready .story-slide:hover::after {
  opacity: 0.8;
}

.story-info {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: clamp(0.45rem, 1vw, 0.75rem);
  padding: clamp(1.15rem, 2.6vw, 2.1rem);
  color: #000000;
  opacity: 0;
  pointer-events: none;
  transform: translateY(1.25rem);
  transition:
    opacity 260ms ease,
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}

.artists-hover-ready .story-slide:hover .story-info {
  opacity: 1;
  transform: translateY(0);
}

.story-title {
  max-width: 10ch;
  font-family: 'Neue Montreal', 'Unbounded', sans-serif;
  font-size: clamp(2.5rem, 5vw, 5.6rem);
  font-weight: 900;
  line-height: 0.88;
  text-transform: uppercase;
}

.story-subtitle {
  max-width: 22rem;
  font-size: clamp(0.8rem, 1.1vw, 1rem);
  font-weight: 900;
  letter-spacing: 0.18em;
  line-height: 1;
  text-transform: uppercase;
}

.story-description {
  max-width: min(22rem, 100%);
  font-size: clamp(0.9rem, 1.15vw, 1.05rem);
  font-weight: 700;
  line-height: 1.18;
}

.artistas-filter {
  opacity: 1;
  transition: opacity 900ms ease;
}

.artistas-filter-hidden {
  opacity: 0;
}

.headline-block {
  opacity: 1;
  transform: translateY(0);
  transition:
    transform 1100ms cubic-bezier(0.77, 0, 0.18, 1),
    opacity 650ms ease 180ms;
  will-change: transform, opacity;
}

.headline-block-hidden {
  opacity: 0;
  transform: translateY(-115vh);
}

@keyframes artists-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 640px) {
  .story-slide {
    width: min(82vw, 56.25vh);
  }

  .story-title {
    max-width: 9ch;
  }
}

@media (prefers-reduced-motion: reduce) {
  .story-marquee {
    animation-duration: 140s;
  }

  .artistas-filter,
  .headline-block,
  .story-info {
    transition-duration: 1ms;
  }
}
</style>
