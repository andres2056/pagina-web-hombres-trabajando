<template>
  <div class="min-h-screen flex flex-col bg-white text-[#5a504f]">
    <header class="bg-[#5a504f] text-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Cambié el h1 por un botón que también va a inicio -->
        <button @click="goInicio" class="flex items-center gap-2 hover:opacity-90">
          <img src="https://res.cloudinary.com/dughcx6qb/image/upload/v1764555794/Logo-HT-removebg-preview_xpohhw.png" alt="Logo"
            class="w-10 h-10 object-contain" />
          <span class="text-xl font-bold">Hombres Trabajando</span>
        </button>

        <nav class="flex items-center gap-6">
          <!-- Enlace de Inicio -->
          <a href="#" @click.prevent="goInicio" class="hover:opacity-90 text-lg">Inicio</a>

          <!-- BOTÓN DEL MENÚ SERVICIOS -->
          <div class="relative group">
            <a href="#servicios" class="hover:opacity-90 text-lg">Servicios ▼</a>

            <div class="group">
              <!-- MENÚ SERVICIOS -->
              <div
                class="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">

                <RouterLink to="/servicios/construccion" class="block px-4 py-2 text-[#5a504f] hover:bg-gray-100">
                  Construcción Civil
                </RouterLink>

                <RouterLink to="/servicios/electricidad" class="block px-4 py-2 text-[#5a504f] hover:bg-gray-100">
                  Servicios Eléctricos
                </RouterLink>

                <RouterLink to="/servicios/plomeria" class="block px-4 py-2 text-[#5a504f] hover:bg-gray-100">
                  Plomería
                </RouterLink>

                <RouterLink to="/servicios/obra-fina" class="block px-4 py-2 text-[#5a504f] hover:bg-gray-100">
                  Obra Fina
                </RouterLink>

                <RouterLink to="/servicios/seguridad" class="block px-4 py-2 text-[#5a504f] hover:bg-gray-100">
                  Cámaras de Seguridad
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- BOTÓN DEL MENÚ CURSOS -->
          <div class="relative group">
            <a href="#cursos" class="hover:opacity-90 text-lg">Cursos ▼</a>

            <div class="group">
              <!-- MENÚ CURSOS -->
              <div
                class="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">

                <RouterLink to="/cursos/construccion" class="block px-4 py-2 text-[#5a504f] hover:bg-gray-100">
                  Curso de Construcción Civil
                </RouterLink>

                <RouterLink to="/cursos/electricidad" class="block px-4 py-2 text-[#5a504f] hover:bg-gray-100">
                  Curso de Electricidad
                </RouterLink>

                <RouterLink to="/cursos/plomeria" class="block px-4 py-2 text-[#5a504f] hover:bg-gray-100">
                  Curso de Plomería
                </RouterLink>

                <RouterLink to="/cursos/obra-fina" class="block px-4 py-2 text-[#5a504f] hover:bg-gray-100">
                  Curso de Obra Fina
                </RouterLink>

                <RouterLink to="/cursos/camaras-seguridad" class="block px-4 py-2 text-[#5a504f] hover:bg-gray-100">
                  Curso de Cámaras de Seguridad
                </RouterLink>
              </div>
            </div>
          </div>

          <a href="#contacto" class="hover:opacity-90 text-lg">Contacto</a>

          <a href="#contacto" class="ml-4">
            <button
              class="bg-[#fbba16] text-white px-5 py-3 rounded-md font-semibold shadow-md hover:opacity-95 text-lg">
              Solicitar Presupuesto
            </button>
          </a>
        </nav>
      </div>
    </header>

    <main class="flex-1 pt-0">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goInicio() {
  // 1) Navegar a la ruta de inicio usando Vue Router
  if (router.currentRoute.value.path !== '/') {
    router.push('/')
  }

  // 2) Cerrar posibles vistas internas
  window.dispatchEvent(new CustomEvent('app-go-inicio'))

  // 3) Asegurar scroll al inicio
  setTimeout(() => {
    const inicio = document.querySelector('#inicio')
    if (inicio) {
      inicio.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // Si no existe el elemento #inicio, hacer scroll al top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, 100)
}

// También puedes exponer la función globalmente para que otros componentes puedan usarla
window.goInicio = goInicio
</script>