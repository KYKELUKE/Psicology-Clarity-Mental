// Mostrar el modal de confirmación cuando se haga clic en "Ingresar"
document.getElementById("ingresarBtn").addEventListener("click", function () {
  // Mostrar el modal de confirmación
  document.getElementById("confirmationModal").style.display = "block";
});

// Cerrar el modal al hacer clic en la "X"
document.getElementById("closeModal").onclick = function () {
  document.getElementById("confirmationModal").style.display = "none";
};

// Lógica para continuar con la cita
document.getElementById("continueToCita").onclick = function () {
  // Primero cerramos el modal
  document.getElementById("confirmationModal").style.display = "none";

  // Mostrar el loader después de cerrar el modal
  document.getElementById("loader").style.display = "flex";

  // Simular un retraso para mostrar el loader (esto puede ser reemplazado por un proceso real)
  setTimeout(function () {
    // Redirigir al usuario a la página de servicio (puedes cambiar la URL según tu estructura)
    window.location.href = "/paquetes.html";
  }, 2000); // El tiempo de espera (en milisegundos) antes de redirigir, ajustable
};

// Lógica para ir al Dashboard
document.getElementById("goToDashboard").onclick = function () {
  // Redirige al usuario al dashboard
  window.location.href = "/MainPrincipa.html";
};

// Cerrar el modal si el usuario hace clic fuera del modal
window.onclick = function (event) {
  if (event.target == document.getElementById("confirmationModal")) {
    document.getElementById("confirmationModal").style.display = "none";
  }
};
