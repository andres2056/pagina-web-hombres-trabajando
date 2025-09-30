import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Proyecto from '../views/Proyecto.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/proyecto', name: 'Proyecto', component: Proyecto },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
