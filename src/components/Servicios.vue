<template>
  <section id="servicios" class="w-full bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-primary text-center mb-4">Servicios</h2>
      <p class="text-center text-textmain max-w-2xl mx-auto mb-10">
        Ofrecemos soluciones integrales: obra gruesa, obra fina, mantenimiento y refacción,
        instalaciones eléctricas, plomería y sistemas de seguridad.
      </p>

      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.id"
          class="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 flex flex-col"
          :aria-labelledby="`svc-${service.id}-title`"
        >
          <div class="flex items-center gap-4">
            <div class="flex-shrink-0 w-14 h-14 rounded-md bg-secondary/10 flex items-center justify-center">
              <!-- Icon -->
              <div class="w-8 h-8" v-html="service.icon" aria-hidden="true"></div>
            </div>

            <h3 :id="`svc-${service.id}-title`" class="text-xl font-semibold text-primary">
              {{ service.title }}
            </h3>
          </div>

          <p class="mt-4 text-textmain flex-1">
            {{ service.description }}
          </p>

          <div class="mt-6 flex gap-3">
            <a
              href="#contacto"
              class="inline-block bg-accent text-white px-4 py-2 rounded-md font-semibold hover:opacity-95"
            >
              Solicitar presupuesto
            </a>

            <button
              @click="handleDetails(service.id)"
              class="inline-block border border-secondary text-secondary px-3 py-2 rounded-md hover:bg-secondary/5"
              :aria-label="`Ver más sobre ${service.title}`"
            >
              Ver más
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const services = [
  {
    id: 'construccion',
    title: 'Construcción civil',
    description: 'Obra gruesa, cimientos, estructura y supervisión de obra.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21v-6l9-4 9 4v6" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7V3h6v4" />
    </svg>`
  },
  {
    id: 'electricidad',
    title: 'Servicios eléctricos',
    description: 'Instalaciones, tableros, reparación y mantenimiento eléctrico.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>`
  },
  {
    id: 'plomeria',
    title: 'Plomería',
    description: 'Instalación y reparación de agua, desagües y soluciones sanitarias.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21v-2a4 4 0 014-4h2a4 4 0 004-4V7" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h4v4H3z" />
    </svg>`
  },
  {
    id: 'obra-fina',
    title: 'Obra fina',
    description: 'Terminaciones, enlucidos, pintura y detalles para dejar todo impecable.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7l7-4 11 6v8l-7 4-11-6V7z" />
    </svg>`
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento y refacción',
    description: 'Reparaciones generales, refacciones y mantenimiento preventivo.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 1v4" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 11l7 7 7-7"/>
    </svg>`
  },
  {
    id: 'seguridad',
    title: 'Instalación de cámaras',
    description: 'Diseño e instalación de sistemas de CCTV y alarmas para su seguridad.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z"/>
      <circle cx="12" cy="12" r="3" stroke-width="1.2"/>
    </svg>`
  },
]

/**
 * handleDetails:
 * - Si existe una ruta /proyectos/:id la usará.
 * - Si no, hace scroll a la sección contacto como fallback seguro.
 */
function handleDetails(id) {
  const targetPath = `/proyectos/${id}`
  const routeExists = router.getRoutes().some(r => r.path === targetPath || r.name === 'Proyecto')

  if (routeExists) {
    router.push({ path: targetPath }).catch(() => {})
  } else {
    const el = document.getElementById('contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else {
      // si tampoco existe #contacto, vuelve al home (seguro)
      router.push({ path: '/' }).catch(() => {})
    }
  }
}
</script>
