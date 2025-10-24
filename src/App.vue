<template>
  <div class="min-h-screen flex flex-col bg-white text-[#5a504f]">
    <header class="bg-[#5a504f] text-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 class="text-xl font-bold">Hombres Trabajando</h1>
        <nav class="flex items-center gap-6">
          <!-- Cambié router-link por un a que emite evento -->
          <a href="#" @click.prevent="goInicio" class="hover:opacity-90 text-lg">Inicio</a>

          <a href="#servicios" class="hover:opacity-90 text-lg">Servicios</a>
          <a href="#contacto" class="hover:opacity-90 text-lg">Contacto</a>
          <a href="#contacto" class="ml-4">
            <button
              class="bg-[#fbba16] text-white px-5 py-3 rounded-md font-semibold shadow-md hover:opacity-95 text-lg">
              Solicitar Presupuesto
            </button>
          </a>
        </nav>
      </div>
    </header>

    <main class="flex-1 pt-0">
      <router-view />
    </main>
  </div>
</template>

<script setup>
function goInicio() {
  // 1) cerrar posibles vistas internas
  window.dispatchEvent(new CustomEvent('app-go-inicio'))

  // 2) asegurar scroll al inicio (después de que los listeners hagan su trabajo)
  // pequeño timeout para que el listener de Servicios tenga tiempo de cerrar la subvista si corresponde
  setTimeout(() => {
    const inicio = document.querySelector('#inicio')
    if (inicio) inicio.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 100)
}
</script>
