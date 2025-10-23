<template>
  <div>
    <section id="inicio" class="min-h-screen flex items-center justify-center bg-[#9d9d9d]">
      <Hero />
    </section>

    <section id="servicios" class="py-16 bg-[#9d9d9d]">
      <Servicios />
    </section>

    <!-- <section id="proyectos" class="py-16 bg-[#9d9d9d]">
      <Proyectos />
    </section> -->

    <section id="contacto" class="py-16 bg-[#9d9d9d]">
      <Contacto />
    </section>

    <section id="footer" class="py-16 bg-[#5a504f]">
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
