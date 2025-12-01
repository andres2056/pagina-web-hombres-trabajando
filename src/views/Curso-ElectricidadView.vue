<template>
    <section class="w-full bg-[#9d9d9d]/20 py-20 px-6 lg:px-12">
        <!-- 🔙 BOTÓN VOLVER A INICIO -->
        <button @click="irInicio"
            class="mb-10 flex items-center gap-2 text-[#5a504f] hover:text-[#fbba16] font-semibold transition">
            ← Volver al inicio
        </button>

        <!-- TÍTULO -->
        <h2 class="text-4xl font-extrabold text-[#5a504f] text-center mb-6">
            Servicios Eléctricos
        </h2>

        <p class="text-center text-[#5a504f] max-w-3xl mx-auto mb-16">
            Instalación, reparación domiciliaria e industrial, y medición de consumo para optimizar tu energía.
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
        titulo: 'Instalación Domiciliaria',
        descripcion: 'Instalación de sistemas de iluminación, enchufes y aparatos.',
        descripcionLarga:
            'Realizamos la instalación eléctrica domiciliaria completa con materiales de primera calidad y estrictas normas de seguridad. Servicio incluye cableado estructurado, colocación de interruptores, enchufes, iluminación interior/exterior y actualización de tableros eléctricos.',
        image:
            'https://res.cloudinary.com/dughcx6qb/image/upload/v1762904813/Instalacion_Domiciliaria_nhhupv.jpg',
        facebook: 'https://www.facebook.com/hombrestrabajando',
    },
    {
        titulo: 'Instalación a Talleres, Oficinas y Comercios',
        descripcion: 'Soluciones eléctricas personalizadas para las demandas de tu empresa.',
        descripcionLarga:
            'Diseñamos e implementamos instalaciones eléctricas a medida para comercios, oficinas y talleres. Nos especializamos en la correcta distribución de circuitos para equipos de alto consumo, sistemas de iluminación LED de larga duración y la optimización del cableado para máxima seguridad y eficiencia.',
        image:
            'https://res.cloudinary.com/dughcx6qb/image/upload/v1762904817/instalacion-electricas-comercial_cf1tgu.png',
        facebook: 'https://www.facebook.com/hombrestrabajando',
    },
    {
        titulo: 'Reparación de averías y fallos eléctricos',
        descripcion: 'Diagnóstico profesional y solución de problemas eléctricos.',
        descripcionLarga:
            'Identificamos y reparamos de manera eficiente cualquier falla en tu instalación eléctrica, desde cortocircuitos y sobrecargas hasta daños en tableros, cableado, enchufes e interruptores. Restauramos la energía y seguridad de tu hogar o negocio con materiales de calidad.',
        image:
            'https://res.cloudinary.com/dughcx6qb/image/upload/v1762904815/Reparaciones_nvemtx.png',
        facebook: 'https://www.facebook.com/hombrestrabajando',
    },
    {
        titulo: 'Control de Gasto Eléctrico',
        descripcion: '¿Sospechas que pagas de más? Te ayudamos a comprobarlo.',
        descripcionLarga:
            'Diagnosticamos la causa de tu factura de luz elevada. Localizamos si se debe a una mala instalación, un electrodoméstico defectuoso o un contrato inadecuado con la compañía eléctrica. Obtén claridad y control sobre tus gastos de energía.',
        image:
            'https://res.cloudinary.com/dughcx6qb/image/upload/v1762904816/Control_de_gastos_hft9e8.jpg',
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
