<template>
  <section id="servicios" class="w-full bg-[#9d9d9d]/20 py-20">
    <!-- SI NO HAY SERVICIO SELECCIONADO -->
    <div v-if="!selectedService" class="px-0 lg:px-0">
      <h2 class="text-4xl font-extrabold text-[#5a504f] text-center mb-6">
        Servicios
      </h2>
      <p class="text-center text-[#5a504f] max-w-3xl mx-auto mb-16">
        Ofrecemos soluciones integrales en construcción, obra fina, mantenimiento, electricidad, plomería y sistemas de
        seguridad.
      </p>

      <!-- GRID FULL WIDTH -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="service in services" :key="service.id"
          class="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl w-full h-[420px]"
          @click="verDetalles(service.id)">
          <!-- Imagen -->
          <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            :style="{ backgroundImage: `url(${service.image})` }"></div>

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500">
          </div>

          <!-- Contenido -->
          <div class="absolute inset-0 flex flex-col justify-end p-10 text-white z-10">
            <h3 class="text-3xl font-bold mb-3">{{ service.title }}</h3>
            <p class="text-gray-200 text-base mb-6 max-w-xl line-clamp-3">
              {{ service.description }}
            </p>

            <div class="flex justify-between items-center">
              <a href="#contacto"
                class="bg-[#fbba16] text-[#5a504f] font-semibold px-5 py-3 rounded-md shadow hover:opacity-90 transition"
                @click.stop>
                Solicitar presupuesto
              </a>

              <span class="text-white/80 group-hover:text-[#fbba16] transition-colors text-base font-medium">
                Ver detalles →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SI SE SELECCIONA "CONSTRUCCION" -->
    <div v-else-if="selectedService === 'construccion'" class="px-6 lg:px-12">
      <button class="mb-8 flex items-center gap-2 text-[#5a504f] hover:text-[#fbba16] font-semibold transition"
        @click="selectedService = null">
        ← Volver a servicios
      </button>

      <h2 id="titulo-construccion" class="text-4xl font-extrabold text-[#5a504f] text-center mb-6">
        Construcción Civil y Obra Gruesa
      </h2>

      <p class="text-center text-[#5a504f] max-w-3xl mx-auto mb-16">
        Algunos de nuestros trabajos destacados en obra civil, estructuras, muros y construcción integral.
      </p>

      <!-- GALERÍA -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="(proyecto, index) in proyectosConstruccion" :key="index"
          class="relative group overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer"
          @click="abrirModal(proyecto)">
          <!-- Imagen -->
          <div class="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            :style="{ backgroundImage: `url(${proyecto.image})` }"></div>

          <!-- Contenido -->
          <div class="p-5 text-[#5a504f]">
            <h3 class="text-2xl font-bold mb-2">{{ proyecto.titulo }}</h3>
            <p class="text-gray-600 text-sm">{{ proyecto.descripcion }}</p>
          </div>

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span class="text-[#fbba16] font-semibold text-lg">Ver más</span>
          </div>
        </div>
      </div>

      <!-- MODAL -->
      <transition name="fade">
        <div v-if="modalAbierto" class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          @click.self="cerrarModal">
          <div class="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-xl">
            <img :src="proyectoSeleccionado.image" class="w-full h-[400px] object-cover" />
            <div class="p-6 text-[#5a504f]">
              <h3 class="text-2xl font-bold mb-3">{{ proyectoSeleccionado.titulo }}</h3>
              <p class="text-gray-700 leading-relaxed">{{ proyectoSeleccionado.descripcionLarga }}</p>

              <div class="mt-6 text-right">
                <button @click="cerrarModal"
                  class="bg-[#fbba16] text-[#5a504f] font-semibold px-6 py-2 rounded-md hover:opacity-90 transition">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'


const selectedService = ref(null)
const modalAbierto = ref(false)
const proyectoSeleccionado = ref({})

function verDetalles(id) {
  selectedService.value = id

  // Esperar a que la vista se renderice y luego hacer scroll al título
  nextTick(() => {
    const target = document.querySelector('#titulo-construccion')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}
// --- modal handlers ---
function abrirModal(proyecto) {
  proyectoSeleccionado.value = proyecto
  modalAbierto.value = true
}

function cerrarModal() {
  modalAbierto.value = false
}

// 🟢 ESTA FUNCIÓN FALTABA
function handleGoInicio() {
  selectedService.value = null
}

onMounted(() => {
  window.addEventListener('app-go-inicio', handleGoInicio)
})

onUnmounted(() => {
  window.removeEventListener('app-go-inicio', handleGoInicio)
})

// Lista de servicios principal
const services = [
  {
    id: 'construccion',
    title: 'Construcción civil',
    description: 'Obra gruesa, estructuras, cimientos y supervisión integral de proyectos.',
    image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062602/Construcci%C3%B3n_Civil_uor8m0.jpg',
  },
  {
    id: 'electricidad',
    title: 'Servicios eléctricos',
    description: 'Instalaciones, tableros, cableado, reparación y mantenimiento eléctrico.',
    image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062602/Servicios_El%C3%A9ctricos_x6iivv.jpg',
  },
  {
    id: 'plomeria',
    title: 'Plomería',
    description: 'Instalación y reparación de agua, desagües, gas y sistemas sanitarios.',
    image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062602/Plomer%C3%ADa_mqhbli.jpg',
  },
  {
    id: 'obra-fina',
    title: 'Obra fina',
    description: 'Enlucidos, pintura, pisos, cielos falsos y terminaciones impecables.',
    image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/Obra_Fina_snvyjl.jpg',
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento y refacción',
    description: 'Reparaciones, refacciones y mantenimiento preventivo general.',
    image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/Mentenimiento_y_refacciones_zdw1zp.jpg',
  },
  {
    id: 'seguridad',
    title: 'Cámaras de seguridad',
    description: 'Instalación profesional de CCTV, alarmas y sistemas de monitoreo.',
    image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062602/Instalacion_de_c%C3%A1maras_dzxbqa.jpg',
  },
]

// Proyectos para la vista de construcción
const proyectosConstruccion = [
  {
    titulo: 'Construcción de muro perimetral',
    descripcion: 'Muro de ladrillo prensado con columnas y viga de coronación.',
    descripcionLarga:
      'Construcción completa de muro perimetral de 80 metros lineales, con cimentación de hormigón armado, columnas reforzadas y acabado con revoque fino. Incluye portón metálico y pintura exterior.',
    image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/muro_perimetral.jpg',
  },
  {
    titulo: 'Vaciado de pisos industriales',
    descripcion: 'Hormigón nivelado con acabado liso mecánico.',
    descripcionLarga:
      'Vaciado y nivelación de piso industrial de 200 m² con hormigón de alta resistencia, malla electrosoldada y curado especial para durabilidad.',
    image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/vaciado_pisos.jpg',
  },
  {
    titulo: 'Construcción de vivienda unifamiliar',
    descripcion: 'Obra gruesa y acabados estructurales.',
    descripcionLarga:
      'Ejecución de estructura completa: cimientos, muros, losa y techo inclinado. Supervisión técnica, control de materiales y ejecución de obra bajo normas locales.',
    image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/casa_construccion.jpg',
  },
  {
    titulo: 'Aceras y accesos',
    descripcion: 'Construcción de aceras, rampas y accesos peatonales.',
    descripcionLarga:
      'Realización de aceras y rampas con acabado fino, cunetas y bordillos de hormigón, garantizando accesibilidad y durabilidad.',
    image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/aceras_accesos.jpg',
  },
]

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
