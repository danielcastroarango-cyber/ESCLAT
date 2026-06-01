<template>
  <div
    class="relative z-[60] w-full overflow-hidden border-b-2 border-black bg-[#c6ff33] py-2 text-black"
    aria-label="ULTIMAS EARLYBIRDS"
  >
    <div class="flex w-max whitespace-nowrap animate-[earlybirds-marquee_16s_linear_infinite]">
      <div class="flex shrink-0 items-center">
        <span
          v-for="item in 8"
          :key="`earlybirds-a-${item}`"
          class="px-5 titulo-portada text-sm  uppercase tracking-[0.28em] sm:px-8 sm:text-base md:text-xl"
        >
          ULTIMAS EARLYBIRDS
        </span>
      </div>
      <div class="flex shrink-0 items-center" aria-hidden="true">
        <span
          v-for="item in 8"
          :key="`earlybirds-b-${item}`"
          class="px-5 titulo-portada text-sm  uppercase tracking-[0.28em] sm:px-8 sm:text-base md:text-xl"
        >
          ULTIMAS EARLYBIRDS
        </span>
      </div>
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

.home-geist {
  font-family: 'Neue Montreal', sans-serif;
}

.titulo-portada {
  font-family: 'Impact', sans-serif;
  font-weight: 400;
}

.habilidades {
  font-family: 'Unbounded', sans-serif; 
}
</style>

<style>
@keyframes earlybirds-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
