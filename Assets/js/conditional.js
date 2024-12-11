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
    continuarBtn.disabled = false; // Habilitar el botón de continuar
  } else {
    continuarBtn.disabled = true; // Deshabilitar el botón de continuar
  }
}

// Añadir eventos a los botones de fecha
dateBtns.forEach((button) => {
  button.addEventListener("click", function () {
    selectedDate = this.getAttribute("data-date");
    checkIfCanContinue(); // Verificar si se habilita el botón
  });
});

// Añadir eventos a los botones de hora
hourBtns.forEach((button) => {
  button.addEventListener("click", function () {
    selectedHour = this.innerText;
    checkIfCanContinue(); // Verificar si se habilita el botón
  });
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
