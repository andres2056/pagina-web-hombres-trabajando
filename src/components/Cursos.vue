<template>
    <section class="w-full bg-[#9d9d9b]/20 py-20 px-6 lg:px-12">
        <!-- TÍTULO -->
        <h2 class="text-4xl font-extrabold text-[#5a504f] text-center mb-6">
            Cursos
        </h2>
        <p class="text-center text-[#5a504f] max-w-3xl mx-auto mb-16">
            Cursos de construcción, electricidad, plomería, cámaras de seguridad y mantenimiento.
        </p>

        <!-- GALERÍA DE CURSOS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="(curso, index) in cursos" :key="index"
                class="relative group overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                @click="irACurso(curso.ruta)">
                <!-- Imagen -->
                <div class="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    :style="{ backgroundImage: `url(${curso.image})` }"></div>

                <!-- Contenido -->
                <div class="p-5 text-[#5a504f]">
                    <h3 class="text-2xl font-bold mb-2">{{ curso.titulo }}</h3>
                    <p class="text-gray-600 text-sm">{{ curso.descripcion }}</p>
                </div>

                <!-- Overlay -->
                <div
                    class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span class="text-[#fbba16] font-semibold text-lg">Ver curso</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 🎯 Navegar al curso específico
function irACurso(ruta) {
    router.push(ruta)
}

// 📚 Lista de cursos
const cursos = [
    {
        titulo: 'Curso de Construcción Civil',
        descripcion: 'Aprende con expertos y lleva tus proyectos al siguiente nivel.',
        image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/muro_perimetral.jpg',
        ruta: '/cursos/construccion'
    },
    {
        titulo: 'Curso de Electricidad domiciliaria y comercial',
        descripcion: 'Soluciones técnicas para estabilizar y prolongar la vida de tu edificio.',
        image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/vaciado_pisos.jpg',
        ruta: '/cursos/electricidad'
    },
    {
        titulo: 'Curso de Plomería',
        descripcion: 'Domina instalaciones hidrosanitarias y sistemas de tuberías para hogares y edificios.',
        image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/casa_construccion.jpg',
        ruta: '/cursos/plomeria'
    },
    {
        titulo: 'Curso de obra fina',
        descripcion: 'Domina las técnicas de acabados y terminaciones profesionales en construcción.',
        image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/casa_construccion.jpg',
        ruta: '/cursos/obra-fina'
    },
    {
        titulo: 'Curso de cámaras de seguridad',
        descripcion: 'Conviértete en especialista en sistemas de videovigilancia residencial y comercial.',
        image: 'https://res.cloudinary.com/dughcx6qb/image/upload/v1760062601/casa_construccion.jpg',
        ruta: '/cursos/camaras-seguridad'
    },
]
</script>

<style scoped>
/* Puedes mantener los estilos de transición si los necesitas para otros elementos */
</style>