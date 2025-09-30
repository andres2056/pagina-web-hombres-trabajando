<template>
  <div>
    <section id="inicio" class="min-h-screen flex items-center justify-center bg-background">
      <Hero />
    </section>

    <section id="servicios" class="py-16 bg-gray-100">
      <Servicios />
    </section>

    <section id="proyectos" class="py-16 bg-gray-100">
      <Proyectos />
    </section>

    <section id="contacto" class="py-16 bg-gray-100">
      <Contacto />
    </section>

    <section id="footer" class="py-16 bg-gray-100">
      <Footer />
    </section>
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import Servicios from '../components/Servicios.vue'

import Proyectos from '../components/Proyectos.vue';
import Contacto from '../components/Contacto.vue';


import Footer from '../components/Footer.vue';
</script>
