<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Button } from '@/components/ui/button'
import Banner from '@/components/ui/Banner.vue'
import CountdownPopup from '@/components/ui/CountdownPopup.vue'
import Footer from '@/components/ui/Footer.vue'

type LineupPreviewItem = {
  name: string
  image?: string
  display?: string
}

const lineupPreviewItems: LineupPreviewItem[] = [
  {
    name: 'Funk Tribu',
    image: '/Imagines/ESCLAT/Funky.png',
  },
  {
    name: 'Sara Landry',
    image: '/Imagines/ESCLAT/SARALANDRY.png',
  },
  {
    name: 'Mochakk',
    image: '/Imagines/ESCLAT/MOCHAKK.png',
  },
  {
    name: 'Onlynumbers',
    image: '/Imagines/ESCLAT/ONLYNUMBERS.png',
  },
  {
    name: 'Próximamente',
    display: '?',
  },
]

const homeHeroImages = [
  '/Imagines/ESCLAT/Header_Portada.png',
  '/Imagines/ESCLAT/Header_Portada_2.png',
  '/Imagines/ESCLAT/Header_Portada_3.png',
  '/Imagines/ESCLAT/Header_Portada_4.png',
  '/Imagines/ESCLAT/Header_Portada_5.png',
]

const currentHomeHeroImageIndex = ref(0)
const backgroundVideo = ref<HTMLVideoElement | null>(null)
const videoSection = ref<HTMLElement | null>(null)
let homeHeroImageInterval: number | undefined
let resumeVideoTimeout: number | undefined
let videoWatchdogInterval: number | undefined
let videoVisibilityObserver: IntersectionObserver | undefined
let isVideoSectionVisible = true
let lastVideoTime = 0
let stuckCheckCount = 0

function changeHomeHeroImage() {
  currentHomeHeroImageIndex.value = (currentHomeHeroImageIndex.value + 1) % homeHeroImages.length
}

function queueBackgroundVideoPlay(delay = 250, shouldReload = false) {
  if (resumeVideoTimeout !== undefined) {
    window.clearTimeout(resumeVideoTimeout)
  }

  resumeVideoTimeout = window.setTimeout(() => {
    resumeVideoTimeout = undefined
    playBackgroundVideo(shouldReload)
  }, delay)
}

function resetBackgroundVideoMonitor() {
  const video = backgroundVideo.value

  lastVideoTime = video?.currentTime ?? 0
  stuckCheckCount = 0
}

function playBackgroundVideo(shouldReload = false) {
  const video = backgroundVideo.value

  if (!video || document.hidden || !isVideoSectionVisible) return

  video.muted = true
  video.defaultMuted = true
  video.playsInline = true

  if (shouldReload && video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
    video.load()
  }

  if (video.ended || (Number.isFinite(video.duration) && video.duration - video.currentTime < 0.2)) {
    video.currentTime = 0
  }

  video
    .play()
    .then(resetBackgroundVideoMonitor)
    .catch(() => {
      queueBackgroundVideoPlay(1000)
    })
}

function checkBackgroundVideoState() {
  const video = backgroundVideo.value

  if (!video || document.hidden || !isVideoSectionVisible) return

  if (video.paused || video.ended) {
    queueBackgroundVideoPlay()
    return
  }

  if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
    queueBackgroundVideoPlay(500, true)
    return
  }

  if (Number.isFinite(video.duration) && video.duration - video.currentTime < 0.2) {
    video.currentTime = 0
    queueBackgroundVideoPlay()
    return
  }

  if (Math.abs(video.currentTime - lastVideoTime) < 0.01) {
    stuckCheckCount += 1
  } else {
    stuckCheckCount = 0
  }

  lastVideoTime = video.currentTime

  if (stuckCheckCount >= 3) {
    stuckCheckCount = 0

    try {
      video.currentTime = Number.isFinite(video.duration) && video.currentTime < video.duration - 0.2
        ? video.currentTime + 0.05
        : 0
    } catch {
      video.load()
    }

    queueBackgroundVideoPlay()
  }
}

function handleBackgroundVideoPause() {
  if (!document.hidden && isVideoSectionVisible) {
    queueBackgroundVideoPlay()
  }
}

function handleBackgroundVideoCanPlay() {
  playBackgroundVideo()
}

function handleBackgroundVideoEnded() {
  const video = backgroundVideo.value

  if (video) {
    video.currentTime = 0
  }

  queueBackgroundVideoPlay(0)
}

function handleBackgroundVideoStall() {
  queueBackgroundVideoPlay(600)
}

function handleBackgroundVideoError() {
  queueBackgroundVideoPlay(1200, true)
}

function handlePageVisibilityChange() {
  if (!document.hidden) {
    resetBackgroundVideoMonitor()
    queueBackgroundVideoPlay()
  }
}

onMounted(() => {
  if ('IntersectionObserver' in window && videoSection.value) {
    videoVisibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVideoSectionVisible = entry?.isIntersecting ?? true

        if (isVideoSectionVisible) {
          resetBackgroundVideoMonitor()
          queueBackgroundVideoPlay()
        }
      },
      { threshold: 0.01 },
    )

    videoVisibilityObserver.observe(videoSection.value)
  }

  queueBackgroundVideoPlay()
  homeHeroImageInterval = window.setInterval(changeHomeHeroImage, 5000)
  videoWatchdogInterval = window.setInterval(checkBackgroundVideoState, 1500)
  document.addEventListener('visibilitychange', handlePageVisibilityChange)
  window.addEventListener('pageshow', handlePageVisibilityChange)
  window.addEventListener('focus', handlePageVisibilityChange)
})

onBeforeUnmount(() => {
  if (resumeVideoTimeout !== undefined) {
    window.clearTimeout(resumeVideoTimeout)
  }

  if (homeHeroImageInterval !== undefined) {
    window.clearInterval(homeHeroImageInterval)
  }

  if (videoWatchdogInterval !== undefined) {
    window.clearInterval(videoWatchdogInterval)
  }

  videoVisibilityObserver?.disconnect()
  document.removeEventListener('visibilitychange', handlePageVisibilityChange)
  window.removeEventListener('pageshow', handlePageVisibilityChange)
  window.removeEventListener('focus', handlePageVisibilityChange)
})
</script>

<template>
  <div class="home-geist  min-h-screen w-full flex flex-col items-center justify-center bg-black text-white">
  
   <!-- <NavigatorPrimarius /> -->
    <Banner />
   <CountdownPopup class="z-51" />
    
    <!-- <img class="absolute opacity-20" src="/imagines/tonitrui.png" alt=""> -->
    <section
      id="home"
      class="relative flex min-h-[78vh] w-full items-center bg-white justify-center overflow-visible px-4 pb-40 pt-20 text-white md:min-h-[86vh] md:pb-48 lg:min-h-screen"
      >
      <img
        :src="homeHeroImages[currentHomeHeroImageIndex]"
        alt=""
        class="pointer-events-none absolute inset-0 z-0 h-full w-full  md:object-contain"
      >



    </section>

    <section id="tickets" class="flex w-full items-center justify-center bg-black">
      <Button
        as-child
        variant="outline"
        size="lg"
        class="group h-auto min-h-[clamp(3.75rem,8vw,8.5rem)] w-full overflow-hidden rounded-none border-2 border-[#c6ff33] bg-[#c6ff33] px-[clamp(0.5rem,2vw,2rem)] py-[clamp(0.75rem,2.2vw,1.75rem)] text-white hover:-translate-y-1 hover:border-[#c6ff33] hover:bg-black hover:text-[#c6ff33] hover:shadow-[6px_6px_0_#c6ff33]"
      >
        <RouterLink to="/tickets" aria-label="Tickets festival">
          <span
            class=" titulo-portada font-black block text-center text-[clamp(1.75rem,8vw,7.5rem)] uppercase leading-[0.95] tracking-[0.1em] [text-shadow:0_0_12px_rgba(255,255,255,0.55)] group-hover:[text-shadow:0_0_10px_rgba(0,0,0,0.3)] sm:tracking-[0.14em] lg:tracking-[0.18em]"
          >
            Tickets festival 
          </span>
        </RouterLink>
      </Button>
    </section>
<section id="lineup" class="relative w-full overflow-hidden bg-black px-4 py-24 text-white md:px-10 lg:px-14">

      <div class="relative z-10">
        <p class="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-[#c6ff33] md:text-base">
          Lineup
        </p>
        <h2 class="titulo-portada  font-black text-6xl  leading-none md:text-8xl">
          Artistas confirmados
        </h2>

        <div class="mt-12 grid w-full grid-cols-1 justify-items-center gap-5 md:grid-cols-3 lg:grid-cols-5">
          <Button
            v-for="artist in lineupPreviewItems"
            :key="artist.name"
            as-child
            variant="outline"
            class="flex h-72 w-full max-w-52 items-center justify-center overflow-hidden rounded-none border-2 border-black  p-0 text-white hover:-translate-y-1 hover:border-[#c6ff33] bg-[#c6ff33] hover:text-black md:h-[28rem] md:max-w-60"
          >
            <RouterLink
              to="/Artistas"
              :aria-label="`Ver ${artist.name} en lineup`"
              class="flex h-full w-full items-center justify-center"
            >
              <img
                v-if="artist.image"
                :src="artist.image"
                :alt="artist.name"
                class="h-full w-full object-cover  transition-transform duration-300 hover:scale-105 "
              >
              <span
                v-else
                class="titulo-portada text-[clamp(5rem,14vw,10rem)] font-black leading-none"
              >
                {{ artist.display }}
              </span>
            </RouterLink>
          </Button>
        </div>
      </div>
    </section>

    <section ref="videoSection" id="video" class="relative -mb-12 flex min-h-[80vh] w-full items-center justify-center overflow-hidden py-10 lg:min-h-screen">
      <video
        ref="backgroundVideo"
        autoplay
        muted
        loop
        playsinline
        webkit-playsinline="true"
        preload="auto"
        poster="/Imagines/ESCLAT/Festival%202.webp"
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        @canplay="handleBackgroundVideoCanPlay"
        @loadeddata="handleBackgroundVideoCanPlay"
        @playing="resetBackgroundVideoMonitor"
        @pause="handleBackgroundVideoPause"
        @ended="handleBackgroundVideoEnded"
        @waiting="handleBackgroundVideoStall"
        @stalled="handleBackgroundVideoStall"
        @error="handleBackgroundVideoError"
      >
        <source src="/Imagines/ESCLAT/VIDEO_WEB.mp4" type="video/mp4">
      </video>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-[1] bg-black/75"
      />
      <div class="relative z-10 flex w-full flex-col items-center justify-center px-6 text-center">
        
        <p class="w-[92vw] max-w-none text-center text-2xl font-bold leading-relaxed text-[#c6ff33]  md:text-4xl lg:w-[94vw] lg:text-5xl">
          Un lugar donde la noche no exige máscaras, donde cada cuerpo, cada look y cada forma de sentir tiene cabida. Aquí no existe el juicio: existe la LIBERTAD. La estética mezcla la energía de los 90, el imaginario industrial berlinés y la irreverencia valenciana.
        </p>
      </div>
    </section>

    <section id="fecha" class=" mt-5 z-50 flex min-h-[32vh] w-full flex-col  text-center md:min-h-[36vh]">
      <div class="grid min-h-[32vh] w-full grid-cols-1 md:min-h-[36vh] md:grid-cols-2">
        <div class="flex h-full flex-col items-center bg-[#c6ff33] md:border-r-5 border-white justify-center  px-4 py-6 ">
          <span class="text-base font-bold uppercase tracking-[0.2em] text-black md:text-xl">Fecha</span>
          <h1 class="titulo-portada font-bold mt-3 text-5xl text-black leading-none  md:text-6xl lg:text-7xl">
            23 al 25 de octubre
          </h1>
        </div>

        <div class="flex h-full flex-col items-center bg-white justify-center md:border-l-5 border-[#c6ff33]   px-4 py-6 ">
          <span class="text-base font-bold uppercase tracking-[0.2em] text-black md:text-xl">Lugar</span>
          <h1 class="titulo-portada font-bold mt-3 text-5xl text-black leading-none  md:text-6xl lg:text-7xl">
            Las Naves, Valencia
          </h1>
        </div>
      </div>
    </section>

     


      
        <Footer class="w-full"/>
       
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
