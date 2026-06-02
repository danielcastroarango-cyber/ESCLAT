<script setup lang="ts">
    import {
    NavigationMenu,
    /*  NavigationMenuContent,
    NavigationMenuIndicator, */
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    /* NavigationMenuTrigger, */
    /*  NavigationMenuViewport, */
    } from '@/components/ui/navigation-menu'

    import { ref } from 'vue';
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
            to: '/lineup',
        },
    ]

    const route = useRoute()
    const selectedItem = ref<string | null>(null)
    const videreMenu = ref<boolean>(true)

    const isActiveItem = (item: NavigationItem) => {
        if (typeof item.to === 'string') {
            return route.path === item.to || route.path.startsWith(`${item.to}/`)
        }

        return route.path === item.to.path && route.hash === item.to.hash
    }

    /* const handleResize = () => {
        if (window.innerWidth <= 640) {
             videreMenu.value = false
        } else {
            videreMenu.value = true
        }
    }

    onMounted(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        })

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize)
        }) */


    </script>

<template>
    <div class="navigator-wrapper w-full">
        
        <nav v-if="videreMenu" class="extra-nav">
            <div class="nav-content">
                <RouterLink
                    to="/"
                    class="home-button"
                    aria-label="Ir a inicio"
                    @click="selectedItem = null"
                >
                    <img
                        src="/Imagines/ESCLAT/esclat_simple.png"
                        alt=""
                        class="home-image hover:-translate-y-1 hover:scale-110 transition-transform duration-300 ease-out"
                    >
                    <span class="language-label">ES/EN</span>
                </RouterLink>

        <NavigationMenu class="w-full">
            <NavigationMenuList class="w-full max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-3 min-[641px]:flex-row min-[641px]:items-center min-[641px]:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10">

                 <NavigationMenuItem v-for="item in navigationItems" :key="item.label">
                    <RouterLink
                        :to="item.to"
                        @click="selectedItem = item.label"
                    >
                        <NavigationMenuLink :class="[
                            'inline-flex h-auto min-h-9 w-full min-w-32 items-center justify-center rounded-none border-2 border-black px-4 py-2 text-xs font-bold uppercase tracking-[0.14em]  transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#c6ff33] hover:border-[#c6ff33] hover:text-black focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none md:min-h-10 md:px-5 md:py-2.5 2xl:min-w-44 2xl:px-8',
                            isActiveItem(item) || selectedItem === item.label
                              ? 'bg-[#c6ff33] text-black border-[#c6ff33] '
                              : 'border-[#c6ff33] bg-black text-[#c6ff33] '
                          ]">
                            {{item.label}}
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
            </div>
 </nav>

    </div>
</template>



<style scoped>

    .navigator-wrapper {
    position: relative;
    z-index: 50;
    }

    .menu-toggle {
    position: absolute;
    top: 0.75rem;
    right: 1rem;
    z-index: 60;
    }

    .home-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    min-width: 4.75rem;
    min-height: 4.25rem;
    border-radius: 9999px;
    padding: 0.25rem 1rem 0.25rem 0.5rem;

    background-color: #ffffff;
    flex-shrink: 0;
    }

    .home-image {
    width: clamp(3.25rem, 5.5vw, 4.75rem);
    height: clamp(3.25rem, 5.5vw, 4.75rem);
    object-fit: contain;
    }

    .language-label {
    color: #000000;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
    }

    .extra-nav {
    width: 100%;
    background-color: #ffffff;
    border-bottom: 5px solid #c6ff33;
    }

    .nav-content {
    width: 100%;
    max-width: none;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    }

    @media (max-width: 640px){
    .extra-nav {
        opacity: 1;
        padding: 0.75rem 1rem;
    }
    
    }

    @media (min-width: 768px){
    .extra-nav {
        opacity: 1;
        padding: 0.75rem 1.5rem;
    }
    
    }

    
    @media (min-width: 1024px){
    .extra-nav {
        opacity: 1;
        padding: 0.75rem 2rem;
    }

    }

   

</style>
