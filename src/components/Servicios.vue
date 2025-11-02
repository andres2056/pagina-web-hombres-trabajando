<template>
  <section id="servicios" class="w-full bg-[#9d9d9d]/20 py-20">
    <div class="px-0 lg:px-0">
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
          @click="$router.push(`/servicios/${service.id}`)">
          <!-- Imagen -->
          <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            :style="{ backgroundImage: `url(${service.image})` }"></div>

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

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
  </section>
</template>


<script setup>
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
