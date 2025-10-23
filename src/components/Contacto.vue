<template>
  <section id="contacto" class="w-full bg-[#9d9d9d] py-20">
    <div class="w-full mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#5a504f] mb-6">Contáctanos</h2>
        <p class="text-xl text-[#5a504f] max-w-3xl mx-auto leading-relaxed">
          Solicita tu presupuesto sin compromiso o consulta sobre nuestros servicios.
          Estamos aquí para hacer realidad tu proyecto.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <!-- Información de contacto -->
        <div class="bg-white rounded-2xl p-8 shadow-xl">
          <h3 class="text-2xl font-bold text-[#5a504f] mb-8">Información de contacto</h3>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-[#fbba16]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-[#fbba16]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#5a504f] text-lg">Dirección</h4>
                <p class="text-[#5a504f] mt-1">Av. Principal 123, Ciudad</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-[#fbba16]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-[#fbba16]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#5a504f] text-lg">Teléfono</h4>
                <p class="text-[#5a504f] mt-1">+1 (555) 123-4567</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-[#fbba16]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-[#fbba16]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#5a504f] text-lg">Email</h4>
                <p class="text-[#5a504f] mt-1">info@hombrestrabajando.com</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-[#fbba16]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-[#fbba16]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#5a504f] text-lg">Horario</h4>
                <p class="text-[#5a504f] mt-1">Lun - Vie: 8:00 - 18:00</p>
                <p class="text-[#5a504f]">Sáb: 8:00 - 13:00</p>
              </div>
            </div>
          </div>

          <!-- Redes sociales -->
          <div class="mt-8 pt-8 border-t border-gray-200">
            <h4 class="font-semibold text-[#5a504f] text-lg mb-4">Síguenos en redes</h4>
            <div class="flex gap-4">
              <a href="#"
                class="w-10 h-10 bg-[#fbba16] text-white rounded-full flex items-center justify-center hover:bg-[#e6a914] transition-colors">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#"
                class="w-10 h-10 bg-[#fbba16] text-white rounded-full flex items-center justify-center hover:bg-[#e6a914] transition-colors">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#"
                class="w-10 h-10 bg-[#fbba16] text-white rounded-full flex items-center justify-center hover:bg-[#e6a914] transition-colors">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Formulario -->
        <div class="bg-white rounded-2xl p-8 shadow-xl">
          <h3 class="text-2xl font-bold text-[#5a504f] mb-8">Envíanos un mensaje</h3>

          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-lg font-medium text-[#5a504f] mb-2">Nombre *</label>
                <input id="name" type="text" required
                  class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#fbba16] focus:ring-2 focus:ring-[#fbba16]/20 transition-all"
                  placeholder="Tu nombre completo" />
              </div>

              <div>
                <label for="email" class="block text-lg font-medium text-[#5a504f] mb-2">Correo *</label>
                <input id="email" type="email" required
                  class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#fbba16] focus:ring-2 focus:ring-[#fbba16]/20 transition-all"
                  placeholder="tunombre@correo.com" />
              </div>
            </div>

            <div>
              <label for="phone" class="block text-lg font-medium text-[#5a504f] mb-2">Teléfono</label>
              <input id="phone" type="tel"
                class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#fbba16] focus:ring-2 focus:ring-[#fbba16]/20 transition-all"
                placeholder="+1 (555) 123-4567" />
            </div>

            <div>
              <label for="service" class="block text-lg font-medium text-[#5a504f] mb-2">Servicio de interés</label>
              <select id="service"
                class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#fbba16] focus:ring-2 focus:ring-[#fbba16]/20 transition-all">
                <option value="">Selecciona un servicio</option>
                <option value="construccion">Construcción civil</option>
                <option value="electricidad">Servicios eléctricos</option>
                <option value="plomeria">Plomería</option>
                <option value="obra-fina">Obra fina</option>
                <option value="mantenimiento">Mantenimiento y refacción</option>
                <option value="seguridad">Instalación de cámaras</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-lg font-medium text-[#5a504f] mb-2">Mensaje *</label>
              <textarea id="message" rows="5" required
                class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#fbba16] focus:ring-2 focus:ring-[#fbba16]/20 transition-all resize-none"
                placeholder="Describe tu proyecto o consulta..."></textarea>
            </div>

            <button type="submit"
              class="w-full bg-[#fbba16] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#e6a914] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Lógica del formulario se puede agregar posteriormente
</script>