// Obtener los elementos
const agendarCitaBtn = document.querySelector(".agendarCitaBtn");
const loginModal = document.querySelector(".loginModal");
const cerrarModalBtn = document.querySelector(".cerrarModalBtn");
const registrarseBtn = document.querySelector(".registrarseBtn");
const iniciarSesionBtn = document.querySelector(".iniciarSesionBtn");

// Mostrar el modal cuando se hace clic en "Agendar cita"
agendarCitaBtn.addEventListener("click", function () {
  loginModal.style.display = "flex";
});

// Cerrar el modal
cerrarModalBtn.addEventListener("click", function () {
  loginModal.style.display = "none";
});

// Redirigir al registro o inicio de sesión
registrarseBtn.addEventListener("click", function () {
  window.location.href = "registro.html"; // Cambia a tu página de registro
});

iniciarSesionBtn.addEventListener("click", function () {
  window.location.href = "/iniciarsesion.html"; // Cambia a tu página de inicio de sesión
});
