document.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos necesarios
  const continuarBtn = document.getElementById("continuar-btn");
  const dateBtns = document.querySelectorAll(".date-btn");
  const hourBtns = document.querySelectorAll(".hour-btn");

  // Variables para almacenar las selecciones
  let selectedDate = null;
  let selectedHour = null;

  // Función para verificar si se habilita el botón de continuar
  function checkIfCanContinue() {
    if (selectedDate && selectedHour) {
      continuarBtn.style.display = "inline-block"; // Mostrar el botón de continuar
    } else {
      continuarBtn.style.display = "none"; // Ocultar el botón de continuar
    }
  }

  // Función para gestionar la selección de fecha
  dateBtns.forEach((button) => {
    button.addEventListener("click", function () {
      // Desmarcar otros botones
      dateBtns.forEach((btn) => btn.classList.remove("selected"));
      this.classList.add("selected"); // Agregar la clase 'selected' al botón clickeado

      selectedDate = this.getAttribute("data-date");
      checkIfCanContinue(); // Verificar si se habilita el botón
    });
  });

  // Función para gestionar la selección de hora
  hourBtns.forEach((button) => {
    button.addEventListener("click", function () {
      // Desmarcar otros botones
      hourBtns.forEach((btn) => btn.classList.remove("selected"));
      this.classList.add("selected"); // Agregar la clase 'selected' al botón clickeado

      selectedHour = this.innerText;
      checkIfCanContinue(); // Verificar si se habilita el botón
    });
  });

  // Redirigir al usuario a la página de Motivo de Consulta con animación
  continuarBtn.addEventListener("click", function () {
    // Aplicar la animación de desplazamiento a la derecha
    document.body.classList.add("slide-out-right");

    // Esperar que termine la animación y luego redirigir
    setTimeout(function () {
      window.location.href = "/motivo-consulta.html"; // Redirección al HTML de motivo de consulta
    }, 500); // La duración de la animación coincide con este tiempo (500ms)
  });

  // Mostrar la fecha actual con nombre del día y fecha numérica
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const todayDate = today.toLocaleDateString("es-ES", options);
  document.getElementById("today-date").innerText = todayDate;

  // Mostrar más horarios y alternar con "Ver menos"
  const showMoreButton = document.getElementById("verMas");
  const moreHoursContainer = document.getElementById("more-hours-container");

  showMoreButton.addEventListener("click", () => {
    if (moreHoursContainer.innerHTML === "") {
      // Si no hay horarios adicionales, mostrar más horarios
      moreHoursContainer.innerHTML = ` 
          <p><strong>Más horarios disponibles:</strong></p>
          <div class="hours-selection">
            <button class="hour-btn">6:00 PM</button>
            <button class="hour-btn">8:00 PM</button>
            <button class="hour-btn">10:00 PM</button>
          </div>
        `;
      showMoreButton.textContent = "Ver menos horarios";
    } else {
      // Si ya hay horarios adicionales, ocultar y volver al estado inicial
      moreHoursContainer.innerHTML = "";
      showMoreButton.textContent = "Ver más horarios";
    }
  });
});
