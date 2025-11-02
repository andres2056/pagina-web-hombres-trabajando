<template>
    <section class="w-full bg-[#9d9d9d]/20 py-20 px-6 lg:px-12">
        <!-- 🔙 BOTÓN VOLVER A INICIO -->
        <button @click="irInicio"
            class="mb-10 flex items-center gap-2 text-[#5a504f] hover:text-[#fbba16] font-semibold transition">
            ← Volver al inicio
        </button>

        <!-- TÍTULO -->
        <h2 class="text-4xl font-extrabold text-[#5a504f] text-center mb-6">
            Servicios de Plomería
        </h2>

        <p class="text-center text-[#5a504f] max-w-3xl mx-auto mb-16">
            Desde la instalación de nuevos sistemas hasta el mantenimiento y la reparación urgente de averías.
        </p>

        <!-- GALERÍA DE PROYECTOS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="(proyecto, index) in proyectosConstruccion" :key="index"
                class="relative group overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
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
                    <!-- Imagen -->
                    <img :src="proyectoSeleccionado.image" class="w-full h-[400px] object-cover" />
                    <!-- Contenido -->
                    <div class="p-6 text-[#5a504f]">
                        <h3 class="text-2xl font-bold mb-3">
                            {{ proyectoSeleccionado.titulo }}
                        </h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            {{ proyectoSeleccionado.descripcionLarga }}
                        </p>

                        <!-- ENLACE A FACEBOOK -->
                        <a :href="proyectoSeleccionado.facebook" target="_blank"
                            class="inline-block bg-[#4267B2] text-white font-semibold px-5 py-3 rounded-md shadow hover:opacity-90 transition">
                            Ver galería completa en Facebook →
                        </a>

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
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const modalAbierto = ref(false)
const proyectoSeleccionado = ref({})

// 🔙 Navegar a inicio
function irInicio() {
    router.push('/')
}

// 🔍 Modal
function abrirModal(proyecto) {
    proyectoSeleccionado.value = proyecto
    modalAbierto.value = true
}

function cerrarModal() {
    modalAbierto.value = false
}

// 🧱 Lista de proyectos de construcción
const proyectosConstruccion = [
    {
        titulo: 'Instalación de Sistemas Sanitarios',
        descripcion: 'Sistemas de agua y desagüe nuevos, a medida para tu proyecto.',
        descripcionLarga:
            'Realizamos la instalación completa de redes de agua fría, caliente y desagüe, ya sea para una construcción desde cero o para ampliaciones en viviendas existentes. Incluye colocación de tuberías, conexiones a red principal y montaje de grifería.',
        image:
            'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/muro_perimetral.jpg',
        facebook: 'https://www.facebook.com/hombrestrabajando',
    },
    {
        titulo: 'Mantenimiento Preventivo',
        descripcion: 'Evita emergencias y gastos mayores con revisiones periódicas.',
        descripcionLarga:
            'Realizamos inspecciones y limpiezas programadas de tus sistemas de tuberías, desagües y aparatos sanitarios. Este servicio preventivo identifica y soluciona pequeños problemas a tiempo, asegurando el óptimo funcionamiento y evitando reparaciones costosas futuras.',
        image:
            'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/vaciado_pisos.jpg',
        facebook: 'https://www.facebook.com/hombrestrabajando',
    },
    {
        titulo: 'Servicio Técnico de Reparaciones',
        descripcion: 'Diagnóstico profesional y reparación de sistemas hidrosanitarios.',
        descripcionLarga:
            'Realizamos un diagnóstico preciso para identificar la causa de la falla en tus sistemas de agua potable o alcantarillado. Ofrecemos soluciones definitivas que incluyen la reparación de tuberías, reemplazo de componentes dañados y la puesta a punto del sistema, asegurando su óptimo funcionamiento.',
        image:
            'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/casa_construccion.jpg',
        facebook: 'https://www.facebook.com/hombrestrabajando',
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
