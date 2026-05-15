<script setup lang="ts">
    import { Card, CardContent, } from '@/components/ui/card'
    import {
        Carousel,
        CarouselContent,
        CarouselItem,
       /*  CarouselNext,
        CarouselPrevious, */
    } from '@/components/ui/carousel'
    import Autoplay from 'embla-carousel-autoplay'

    interface Props {
        photos: string[]
        basePath: string
        autoPlayDelay?: number
        loop?: boolean
        dragFree?: boolean
        sizeClass?: string
    }

     const props = withDefaults(defineProps<Props>(), {
        autoPlayDelay: 2000,
        loop: true,
        dragFree: true,
        sizeClass: 'max-w-md md:max-w-2xl lg:max-w-4xl'
      })

    const buildSrc = (photo: string): string => {
      const photoHasExtension = /\.(png|jpe?g|webp|gif|svg|avif)$/i.test(photo)
      const normalizedBasePath = props.basePath.replace(/\/$/, '')
      return photoHasExtension
        ? `${normalizedBasePath}/${photo}`
        : `${normalizedBasePath}/${photo}.jpg`
    }

</script>

<template>
 <Carousel 
  :class="['w-full ', props.sizeClass]"
  :opts="{
    dragFree: props.dragFree,
    loop: props.loop
  
  }"
  :plugins="[Autoplay({
    delay: props.autoPlayDelay,
  })]">
    <CarouselContent>
      <CarouselItem v-for="(photo, index) in props.photos" :key="index">
        <div class="p-1">
          <Card class=" bg-[#ffeeca] border-[#850000] border-double border-10">
            <CardContent class="  bg-[#ffeeca] border-[#850000] flex aspect-6/4 items-center justify-center p-6">
              <img :src="buildSrc(photo)" 
              :alt="`Imagen ${index + 1}`"
              class="w-full h-full object-cover rounded-md">
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
   <!--  <CarouselPrevious class=" bg-white border-[rgb(180,83,18)] text-[rgb(180,83,18)] hover:bg-[rgb(180,83,18)] hidden md:flex justify-center items-center" />
    <CarouselNext class="  bg-white border-[rgb(180,83,18)] text-[rgb(180,83,18)] hover:bg-[rgb(180,83,18)] hidden md:flex justify-center items-center" /> -->

  </Carousel>
</template>



<style scoped>

</style>


