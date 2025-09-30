<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold text-primary">Página de Proyecto</h1>
    <p class="text-textmain mt-4">Aquí mostraremos el detalle de un proyecto.</p>
  </div>
</template>

<script>
export default {
  name: "Proyecto",
  props: ["id"], // opcional, por si luego pasamos /proyectos/:id
}
</script>
