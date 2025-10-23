<template>
  <div class="min-h-screen flex flex-col bg-white text-[#5a504f]">
    <header class="bg-[#5a504f] text-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 class="text-xl font-bold">Hombres Trabajando</h1>
        <nav class="flex items-center gap-6">
          <router-link to="/" class="hover:opacity-90 text-lg">Inicio</router-link>
          <a href="#servicios" class="hover:opacity-90 text-lg">Servicios</a>
          <!-- <a href="#proyectos" class="hover:opacity-90 text-lg">Proyectos</a> -->
          <a href="#contacto" class="hover:opacity-90 text-lg">Contacto</a>
          <a href="#contacto" class="ml-4">
            <button class="bg-[#fbba16] text-white px-5 py-3 rounded-md font-semibold shadow-md hover:opacity-95 text-lg">
              Solicitar Presupuesto
            </button>
          </a>
        </nav>
      </div>
    </header>
    
    <!-- Eliminar padding-top del main y usar mt en el primer elemento -->
    <main class="flex-1 pt-0">
      <router-view />
    </main>
  </div>
</template>