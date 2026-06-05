import Home from "@/pages/home/Home.vue";


import Tickets from "@/pages/Trabajos/Entradas/tickets.vue";

import { createRouter, createWebHashHistory } from "vue-router";





import Info from "@/pages/Trabajos/Normas/Info.vue";
import Programacion from "@/pages/Trabajos/programacion/Programacion.vue";
import Artistas from "@/pages/Trabajos/Lineup/Artistas.vue";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/info",
      children: [
        {
          path: "",
          name: "info",
          component: Info,
        },
        
        
      ]
    },
    {
      path: "/tickets",
      children: [
        {
          path: "",
          name: "tickets",
          component: Tickets,
        },
       
      ]
    },
    {
      path: "/programacion",
      children: [
        {
          path: "",
          name: "programacion",
          component: Programacion,
        },
        {
          path: "Organizacion",
          component: Programacion
        },
       
      ]
    },
    {
      path: "/Artistas",
      name: "Artistas",
      alias: ["/artistas"],
      component: Artistas,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
    scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
});
