<template>
  <section id="proyectos" class="w-full bg-[#9d9d9d] py-16">
    <h2 class="text-3xl font-bold text-[#5a504f] text-center mb-8">Nuestros Proyectos</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
      <div v-for="p in proyectos" :key="p.id" 
           class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
        <h3 class="text-xl font-bold text-[#fbba16]">{{ p.titulo }}</h3>
        <p class="text-[#5a504f] mt-2">{{ p.descripcion }}</p>
        <router-link :to="`/proyectos/${p.id}`" 
                     class="text-[#5a504f] font-semibold mt-4 block">
          Ver más
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Proyectos",
  data() {
    return {
      proyectos: [
        { id: "construccion", titulo: "Construcción", descripcion: "Obra gruesa y civil" },
        { id: "electricidad", titulo: "Electricidad", descripcion: "Instalaciones eléctricas" },
        { id: "plomeria", titulo: "Plomería", descripcion: "Agua y gas" },
        { id: "obra-fina", titulo: "Obra Fina", descripcion: "Detalles y terminaciones" },
        { id: "seguridad", titulo: "Seguridad", descripcion: "Cámaras y sistemas" },
      ],
    }
  }
}
</script>
