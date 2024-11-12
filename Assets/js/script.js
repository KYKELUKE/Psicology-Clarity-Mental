function toggleMenu() {
  const nav = document.querySelector("header nav");
  const hamburger = document.querySelector(".hamburger");

  // Alternar la clase "menu-active" para mostrar u ocultar el menú
  nav.classList.toggle("menu-active");

  // Alternar la clase "open" para la animación del botón de hamburguesa
  hamburger.classList.toggle("open");
}
