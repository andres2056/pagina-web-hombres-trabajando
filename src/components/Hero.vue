<template>
  <section class="relative w-full h-[90vh] overflow-hidden text-white">
    <!-- Fondo con imágenes que cambian -->
    <div class="absolute inset-0 transition-opacity duration-1000" v-for="(img, index) in images" :key="index"
      :style="{ backgroundImage: `url(${img})` }" :class="[
        'bg-cover bg-center absolute inset-0',
        currentImage === index ? 'opacity-100' : 'opacity-0'
      ]"></div>

    <!-- Capa de oscurecimiento -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Contenido principal -->
    <div class="relative z-10 flex flex-col justify-center items-center text-center px-6 h-full">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
        Construcción y <br />
        <span class="text-[#fbba16]">Servicios Técnicos de Calidad</span>
      </h1>

      <p class="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
        Expertos en construcción civil, mantenimiento, electricidad, plomería y
        cámaras de seguridad.
        <br />
        <span class="font-semibold text-[#fbba16]">Tu tranquilidad es nuestra prioridad.</span>
      </p>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">
        <div>
          <p class="text-4xl font-bold text-[#fbba16]">15+</p>
          <p>Años de Experiencia</p>
        </div>
        <div>
          <p class="text-4xl font-bold text-[#fbba16]">200+</p>
          <p>Proyectos Completados</p>
        </div>
        <div>
          <p class="text-4xl font-bold text-[#fbba16]">100%</p>
          <p>Garantía de Calidad</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const images = [
  'https://res.cloudinary.com/dughcx6qb/image/upload/v1760052224/WP_20170414_037_mtgjxt.jpg',
  'https://res.cloudinary.com/dughcx6qb/image/upload/v1760052218/IMG-20180217-WA0015_j18a90.jpg ',
  'https://res.cloudinary.com/dughcx6qb/image/upload/v1760052225/WP_20170920_007_ub8z4i.jpg'
  
  
] // 👉 Coloca tus imágenes en public/img/

const currentImage = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.length
  }, 5000) // cambia cada 5 segundos
})

onBeforeUnmount(() => clearInterval(interval))
</script>

<style scoped>
section {
  transition: all 0.5s ease-in-out;
}
</style>
