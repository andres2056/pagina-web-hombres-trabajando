<template>
    <section class="w-full bg-[#9d9d9d]/20 py-20 px-6 lg:px-12">
        <!-- 🔙 BOTÓN VOLVER A INICIO -->
        <button @click="irInicio"
            class="mb-10 flex items-center gap-2 text-[#5a504f] hover:text-[#fbba16] font-semibold transition">
            ← Volver al inicio
        </button>

        <!-- TÍTULO -->
        <h2 class="text-4xl font-extrabold text-[#5a504f] text-center mb-6">
            Cursos
        </h2>

        <p class="text-center text-[#5a504f] max-w-3xl mx-auto mb-16">
            Cursos de construcción, electricidad, plomería, cámaras de seguridad y mantenimiento.
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
        titulo: 'Curso de Construcción Civil',
        descripcion: 'Aprende con expertos y lleva tus proyectos al siguiente nivel.',
        descripcionLarga: 'Formación práctica en construcción civil donde desarrollarás habilidades reales mediante casos de estudio y ejercicios simulados. Cubrimos: planificación de obras, control de costos, técnicas constructivas eficientes, seguridad industrial y solución de problemas comunes en obra.',
        image:
            'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/muro_perimetral.jpg',
        facebook: 'https://www.facebook.com/hombrestrabajando',
    },
    {
        titulo: 'Curso de Electricidad domiciliaria y comercial',
        descripcion: 'Soluciones técnicas para estabilizar y prolongar la vida de tu edificio.',
        descripcionLarga:
            'Intervenimos en los elementos estructurales críticos de tu propiedad. Especialistas en reparar y sellar grietas estructurales, recuperar juntas de dilatación dañadas y reforzar cimientos afectados, devolviendo la capacidad portante y asegurando la durabilidad de la construcción.',
        image:
            'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/vaciado_pisos.jpg',
        facebook: 'https://www.facebook.com/hombrestrabajando',
    },
    {
        titulo: 'Curso de Plomería',
        descripcion: 'Domina instalaciones hidrosanitarias y sistemas de tuberías para hogares y edificios.',
        descripcionLarga: 'Curso completo de plomería que abarca desde conceptos básicos hasta instalaciones avanzadas en sistemas residenciales y comerciales. Aprenderás instalación de tuberías, conexiones sanitarias, sistemas de drenaje, reparación de fugas, normativas de construcción y solución de problemas comunes.',
        image:
            'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/casa_construccion.jpg',
        facebook: 'https://www.facebook.com/hombrestrabajando',
    },
    {
        titulo: 'Curso de obra fina',
        descripcion: 'Domina las técnicas de acabados y terminaciones profesionales en construcción.',
        descripcionLarga: 'Curso especializado en obra fina que te enseñará las mejores técnicas de acabados en construcción. Aprenderás aplicaciones de revoques, colocación de cerámicos, instalación de cielorrasos, trabajos en drywall, pintura profesional, colocación de pisos y todos los detalles que hacen la diferencia en la calidad final de una obra.',
        image:
            'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/casa_construccion.jpg',
        facebook: 'https://www.facebook.com/hombrestrabajando',
    },
    {
        titulo: 'Curso de camaras de seguridad',
        descripcion: 'Conviértete en especialista en sistemas de videovigilancia residencial y comercial.',
        descripcionLarga: 'Programa técnico especializado en sistemas de seguridad electrónica. Aprenderás instalación de cámaras análogas e IP, configuración de sistemas de grabación, transmisión de video en red, integración con alarmas, normativas de privacidad y mantenimiento preventivo. Certificación incluida para trabajar profesionalmente.',
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
