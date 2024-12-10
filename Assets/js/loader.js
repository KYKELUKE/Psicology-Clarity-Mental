function showLoader(action) {
  // Mostrar el loader
  document.querySelector(".loader-container").style.display = "flex";

  // Ocultar los botones mientras carga
  document.querySelector(".nav-buttons").style.display = "none";

  // Simular una acción (puedes cambiarlo a una redirección real)
  setTimeout(() => {
    if (action === "login") {
      alert("Redirigiendo a Iniciar Sesión...");
      // window.location.href = '/login.html'; // Redirige a la página de inicio de sesión
    } else if (action === "register") {
      alert("Redirigiendo a Registrarse...");
      // window.location.href = '/register.html'; // Redirige a la página de registro
    }
    // Restaurar botones (solo para simular)
    document.querySelector(".loader-container").style.display = "none";
    document.querySelector(".nav-buttons").style.display = "flex";
  }, 2000); // Tiempo de simulación (2 segundos)
}
