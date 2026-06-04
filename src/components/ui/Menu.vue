<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { Instagram, MessageCircle, X } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

type NavigationItem = {
  label: string
  to: string | { path: string; hash?: string }
}

const navigationItems: NavigationItem[] = [
  {
    label: 'INFO',
    to: '/info',
  },
  {
    label: 'PROGRAMACION',
    to: '/programacion',
  },
  {
    label: 'LINEUP',
    to: '/Artistas',
  },
]

const route = useRoute()
const isOpen = ref(false)
const menuRoot = ref<HTMLElement | null>(null)
let previousBodyOverflow = ''
let bannerResizeObserver: ResizeObserver | null = null

const isActiveItem = (item: NavigationItem) => {
  if (typeof item.to === 'string') {
    return route.path === item.to || route.path.startsWith(`${item.to}/`)
  }

  return route.path === item.to.path && route.hash === item.to.hash
}

const openMenu = () => {
  isOpen.value = true
}

const closeMenu = () => {
  isOpen.value = false
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

const setBannerOffset = () => {
  const banner = document.querySelector<HTMLElement>('[data-site-banner]')
  const bannerHeight = banner?.getBoundingClientRect().height ?? 0

  menuRoot.value?.style.setProperty('--site-banner-height', `${bannerHeight}px`)
}

const observeBanner = () => {
  bannerResizeObserver?.disconnect()

  const banner = document.querySelector<HTMLElement>('[data-site-banner]')

  if (banner && 'ResizeObserver' in window) {
    bannerResizeObserver = new ResizeObserver(setBannerOffset)
    bannerResizeObserver.observe(banner)
  }

  setBannerOffset()
}

watch(isOpen, (open) => {
  if (open) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return
  }

  document.body.style.overflow = previousBodyOverflow
})

watch(
  () => route.fullPath,
  () => {
    closeMenu()
    nextTick(observeBanner)
  },
)

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
  window.addEventListener('resize', setBannerOffset)
  nextTick(observeBanner)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
  window.removeEventListener('resize', setBannerOffset)
  bannerResizeObserver?.disconnect()
  document.body.style.overflow = previousBodyOverflow
})
</script>

<template>
  <div ref="menuRoot">
    <button
      type="button"
      class="menu-trigger"
      aria-label="Abrir menu de navegacion"
      :aria-expanded="isOpen"
      aria-controls="site-navigation-menu"
      @click="openMenu"
    >
      <img
        src="/Imagines/ESCLAT/esclat_simple.png"
        alt=""
        class="menu-trigger-image"
      >
    </button>

    <Transition name="menu-backdrop">
      <button
        v-if="isOpen"
        type="button"
        class="menu-backdrop"
        aria-label="Cerrar menu de navegacion"
        @click="closeMenu"
      />
    </Transition>

    <Transition name="menu-panel">
      <aside
        v-if="isOpen"
        id="site-navigation-menu"
        class="menu-panel"
        aria-label="Menu principal"
      >
        <div class="menu-panel-header">
          <RouterLink
            to="/"
            class="menu-brand"
            aria-label="Ir a inicio"
            @click="closeMenu"
          >
            <img
              src="/Imagines/ESCLAT/esclat_simple.png"
              alt=""
              class="menu-brand-image"
            >
            <span class="menu-brand-label">ES/EN</span>
          </RouterLink>

          <button
            type="button"
            class="menu-close"
            aria-label="Cerrar menu de navegacion"
            @click="closeMenu"
          >
            <X class="size-7" aria-hidden="true" />
          </button>
        </div>

        <nav class="menu-nav" aria-label="Navegacion principal">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.label"
            :to="item.to"
            class="menu-link"
            :class="{ 'menu-link-active': isActiveItem(item) }"
            @click="closeMenu"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <section class="menu-contact" aria-label="Contacto y redes sociales">
          <a
            href="mailto:info@esclatfestival.com"
            class="menu-contact-email"
          >
            info@esclatfestival.com
          </a>

          <div class="menu-social-list" aria-label="Redes sociales">
            <X class="menu-social-icon" aria-hidden="true" />
            <Instagram class="menu-social-icon" aria-hidden="true" />
            <MessageCircle class="menu-social-icon" aria-hidden="true" />
          </div>
        </section>
      </aside>
    </Transition>
  </div>
</template>

<style scoped>
.menu-trigger {
  position: fixed;
  top: calc(var(--site-banner-height, 2.75rem) + clamp(0.25rem, 0.8vw, 0.5rem));
  right: clamp(0.75rem, 1.8vw, 1.5rem);
  z-index: 80;
  display: grid;
  width: clamp(4rem, 5vw, 5rem);
  height: clamp(4rem, 5vw, 5rem);
  place-items: center;
  border: 0;
  background: transparent;
  padding: 0;
}

.menu-trigger:hover {
  background: transparent;
}

.menu-trigger:focus-visible,
.menu-close:focus-visible,
.menu-link:focus-visible,
.menu-brand:focus-visible {
  outline: 2px solid #c6ff33;
  outline-offset: 4px;
}

.menu-trigger-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 180ms ease;
}

.menu-trigger:hover .menu-trigger-image {
  transform: scale(1.12);
}

.menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  border: 0;
  background: rgba(0, 0, 0, 0.72);
}

.menu-panel {
  position: fixed;
  inset: 0 0 0 auto;
  z-index: 100;
  display: flex;
  width: 100%;
  min-height: 100dvh;
  flex-direction: column;
  border-left: 6px solid #c6ff33;
  background: #c6ff33;
  color: #ffffff;
  font-family: 'Neue Montreal', ui-sans-serif, system-ui, sans-serif;
  box-shadow: -10px 0 0 #c6ff33;
  overflow-y: auto;
}

.menu-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 5px solid #c6ff33;
  background: #c6ff33;
  padding: 0.75rem 1rem;
}

.menu-brand {
  display: inline-flex;
  min-height: 4.25rem;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border-radius: 9999px;
  background: #c6ff33;
  padding: 0.25rem 1rem 0.25rem 0.5rem;
  text-decoration: none;
}

.menu-brand-image {
  width: clamp(3.25rem, 5.5vw, 4.75rem);
  height: clamp(3.25rem, 5.5vw, 4.75rem);
  object-fit: contain;
}

.menu-brand-label {
  color: #000000;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

.menu-close {
  display: grid;
  width: 3rem;
  height: 3rem;
  place-items: center;
  border: 2px solid #000000;
  border-radius: 0;
  background: #c6ff33;
  color: #000000;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    color 180ms ease;
}

.menu-close:hover {
  transform: translateY(-0.15rem);
  background: #000000;
  color: #c6ff33;
}

.menu-nav {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  padding: clamp(1.5rem, 4vw, 3rem);
}

.menu-link {
  display: flex;
  min-height: 5.5rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 2px solid #c6ff33;
  background: #c6ff33;
  color: #000000;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease,
    box-shadow 180ms ease;
}

.menu-link:hover,
.menu-link-active {
  transform: translateY(-0.25rem);
  border-color: #c6ff33;
  background: #c6ff33;
  color: #ffffff;
 
}

.menu-contact {
  margin-top: auto;
  display: grid;
  gap: 1.25rem;
  justify-items: center;
  border-top: 5px solid #c6ff33;
  background: #c6ff33;
  padding: 1.5rem 1.5rem 3rem;
  color: #000000;
  text-align: center;
}

.menu-contact-email {
  display: inline-block;
  max-width: 100%;
  overflow-wrap: anywhere;
  color: #000000;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 900;
  line-height: 1;
  transition:
    color 180ms ease,
    transform 180ms ease;
}

.menu-contact-email:hover {
  color: #ffffff;
  transform: translateY(-0.15rem);
}

.menu-social-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  color: #000000;
}

.menu-social-icon {
  width: 2.5rem;
  height: 2.5rem;
  transition: transform 180ms ease;
}

.menu-social-icon:hover {
  transform: scale(1.25);
}

.menu-backdrop-enter-active,
.menu-backdrop-leave-active {
  transition: opacity 180ms ease;
}

.menu-backdrop-enter-from,
.menu-backdrop-leave-to {
  opacity: 0;
}

.menu-panel-enter-active,
.menu-panel-leave-active {
  transition: transform 220ms ease;
}

.menu-panel-enter-from,
.menu-panel-leave-to {
  transform: translateX(105%);
}

@media (min-width: 768px) {
  .menu-panel {
    width: 25%;
  }

  .menu-panel-header {
    padding: 0.75rem 1.5rem;
  }

  .menu-nav {
    gap: 1.35rem;
    padding: 1rem;
  }

  .menu-link {
    min-height: 4.75rem;
    padding: 0.85rem 0.5rem;
    font-size: 1.08rem;
  }

  .menu-contact {
    padding: 1.25rem 1.25rem 3rem;
  }

  .menu-contact-email {
    font-size: 1rem;
  }

  .menu-social-list {
    gap: 1rem;
  }

  .menu-social-icon {
    width: 2rem;
    height: 2rem;
  }
}

@media (min-width: 1024px) {
  .menu-nav {
    gap: 1.6rem;
    padding: 1.5rem;
  }

  .menu-link {
    min-height: 5.25rem;
    font-size: 1.32rem;
  }

  .menu-contact-email {
    font-size: 1.1rem;
  }
}

@media (min-width: 1280px) {
  .menu-link {
    min-height: 5.75rem;
    font-size: 1.72rem;
  }

  .menu-contact {
    padding: 1.5rem 1.5rem 3.5rem;
  }

  .menu-contact-email {
    font-size: 1.25rem;
  }
}

@media (min-width: 1536px) {
  .menu-nav {
    gap: 2rem;
  }

  .menu-link {
    min-height: 6.25rem;
    font-size: 2.18rem;
  }
}
</style>
