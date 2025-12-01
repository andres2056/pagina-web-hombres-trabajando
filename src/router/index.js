import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Proyecto from '../views/Proyecto.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/proyecto', name: 'Proyecto', component: Proyecto },

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

    // 📚 NUEVAS RUTAS PARA CURSOS
    {
      path: '/cursos/construccion',
      name: 'CursoConstruccion',
      component: () => import('../views/Curso-ConstruccionView.vue'),
    },
    {
      path: '/cursos/electricidad',
      name: 'CursoElectricidad', 
      component: () => import('../views/Curso-ElectricidadView.vue'),
    },
    {
      path: '/cursos/plomeria',
      name: 'CursoPlomeria',
      component: () => import('../views/Curso-PlomeriaView.vue'),
    },
    {
      path: '/cursos/obra-fina',
      name: 'CursoObraFina',
      component: () => import('../views/Curso-Obra-FinaView.vue'),
    },
    {
      path: '/cursos/camaras-seguridad',
      name: 'CursoCamarasSeguridad',
      component: () => import('../views/Curso-Camaras-SeguridadView.vue'),
    },
  ],
})

export default router