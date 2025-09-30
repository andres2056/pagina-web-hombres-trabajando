<template>
  <section id="contacto" class="w-full bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-primary text-center mb-6">Contáctanos</h2>
      <p class="text-center text-textmain mb-10 max-w-2xl mx-auto">
        Solicita tu presupuesto sin compromiso o consulta sobre nuestros servicios.
      </p>

      <form class="max-w-xl mx-auto grid gap-4 bg-white p-6 rounded-lg shadow">
        <div>
          <label for="name" class="block text-sm font-medium text-textmain mb-1">Nombre</label>
          <input
            id="name"
            type="text"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-textmain mb-1">Correo</label>
          <input
            id="email"
            type="email"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="tunombre@correo.com"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-textmain mb-1">Mensaje</label>
          <textarea
            id="message"
            rows="4"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Escribe aquí tu consulta..."
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-accent text-white font-semibold px-4 py-2 rounded-md hover:opacity-95"
        >
          Enviar
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
// por ahora no hay lógica, luego podemos conectar con backend o servicio de correo
</script>
