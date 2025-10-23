<template>
  <footer class="bg-[#5a504f] text-white pt-12">
    <!-- PRIMERA FILA -->
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 pb-10 border-b border-[#9d9d9d]">
      
      <!-- Columna 1 -->
      <div>
        <h3 class="text-xl font-bold text-white mb-4">Hombres Trabajando</h3>
        <p class="text-sm leading-relaxed">
          Especialistas en construcción civil, mantenimiento y seguridad. 
          Más de 10 años transformando espacios con calidad y profesionalismo.
        </p>
      </div>

      <!-- Columna 2 -->
      <div>
        <h3 class="text-xl font-bold text-white mb-4">Nuestros Servicios</h3>
        <ul class="space-y-2 text-sm">
          <li>Construcción Civil</li>
          <li>Mantenimiento</li>
          <li>Reparaciones</li>
          <li>Instalación de Cámaras</li>
          <li>Consultoría</li>
        </ul>
      </div>

      <!-- Columna 3 -->
      <div>
        <h3 class="text-xl font-bold text-white mb-4">Contacto</h3>
        <p class="text-sm">Av. Principal 123, Ciudad</p>
        <div class="flex space-x-4 my-3">
          <!-- Iconos de redes sociales -->
          <a href="#" class="hover:text-[#fbba16]">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="hover:text-[#fbba16]">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="hover:text-[#fbba16]">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
        <p class="text-sm">+1 (555) 123-4567</p>
        <p class="text-sm">info@hombrestrabajando.com</p>
      </div>
    </div>

    <!-- SEGUNDA FILA -->
    <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-white">
      <p>© 2024 Hombres Trabajando. Todos los derechos reservados.</p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="#" class="hover:text-[#fbba16]">Política de Privacidad</a>
        <a href="#" class="hover:text-[#fbba16]">Términos de Servicio</a>
        <a href="#" class="hover:text-[#fbba16]">Aviso Legal</a>
      </div>
    </div>
  </footer>
</template>
<script setup>
// Si quieres usar Font Awesome para los iconos:
// npm install @fortawesome/fontawesome-free
// y en main.js import: import '@fortawesome/fontawesome-free/css/all.min.css'
</script>
