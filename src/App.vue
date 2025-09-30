<template>
  <div class="min-h-screen flex flex-col bg-background text-textmain">
    <header class="bg-primary text-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 class="text-lg font-bold">Hombres Trabajando</h1>
        <nav class="flex items-center gap-4">
          <router-link to="/" class="hover:opacity-90">Inicio</router-link>
          <a href="#servicios" class="hover:opacity-90">Servicios</a>
          <a href="#proyectos" class="hover:opacity-90">Proyectos</a>
          <a href="#contacto" class="hover:opacity-90">Contacto</a>
          <a href="#contacto" class="ml-4">
            <button class="bg-accent text-white px-4 py-2 rounded-md font-semibold shadow-md hover:opacity-95">
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