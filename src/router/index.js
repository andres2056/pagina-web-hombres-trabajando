import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Proyecto from '../views/Proyecto.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/proyecto', name: 'Proyecto', component: Proyecto },

    // // 🧱 Servicios principales
    // {
    //   path: '/servicios',
    //   name: 'Servicios',
    //   component: () => import('../views/Servicios.vue'),
    // },

    // //Cursos
    // {
    //   path: '/servicios/cursos',
    //   name: 'Cursos',
    //   component: () => import('../views/Cursos.vue'),
    // },


    // 🧰 Rutas específicas por categoría (lazy loading)
    {
      path: '/servicios/construccion',
      name: 'Construccion',
      component: () => import('../views/ConstruccionView.vue'),
    },
    {
      path: '/servicios/electricidad',
      name: 'Electricidad',
      component: () => import('../views/ElectricidadView.vue'),
    },
    {
      path: '/servicios/plomeria',
      name: 'Plomeria',
      component: () => import('../views/PlomeriaView.vue'),
    },
    {
      path: '/servicios/obra-fina',
      name: 'ObraFina',
      component: () => import('../views/ObraFinaView.vue'),
    },
  
    {
      path: '/servicios/seguridad',
      name: 'Seguridad',
      component: () => import('../views/SeguridadView.vue'),
    },
  ],
})

export default router
