import Home from "@/pages/home/Home.vue";


import Tickets from "@/pages/Trabajos/ilustracion/tickets.vue";
import Modelado from "@/pages/Trabajos/3D/Modelado.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import Dona from "@/pages/Trabajos/3D/Dona.vue";


import Camaleon from "@/pages/Trabajos/3D/Camaleon.vue";
import Info from "@/pages/Trabajos/diseno/Info.vue";
import Lineup from "@/pages/Trabajos/Lineup/lineup.vue";


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
      path: "/3D",
      children: [
        {
          path: "",
          name: "3D",
          component: Modelado,
        },
        {
          path: "Dona",
          component: Dona
        },
        {path: "Camaleon",
        component: Camaleon
        }
      ]
    },
    {
      path: "/lineup",
      name: "Lineup",
      alias: ["/Lineup"],
      component: Lineup,
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
