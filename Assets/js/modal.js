document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.querySelector(".slider-track");
  const dots = document.querySelectorAll(".dot");

  const images = [
    "Assets/img/Black and Green Typographical Green Energy Logo.png",
    "Assets/img/2.png",
    "Assets/img/uBOb7vMM_400x400.jpg",
    "Assets/img/AUNA_0-min.jpeg",
    "Assets/img/1.png",
    "Assets/img/Black White Minimal Simple Modern Creative Studio Ego Logo.png",
    "Assets/img/Pink and Black Illustrative Nail Art Studio Logo.png",
    "Assets/img/Yellow and Green Modern Logo.png",
    "Assets/img/Foundation.png",
    "Assets/img/Borcelle.png",
    "Assets/img/Creative.png",
    "Assets/img/estelle.png",
    "Assets/img/Surfing.png",
    "Assets/img/palm.png",
    "Assets/img/nature.png",
    "Assets/img/organic.png",
  ];

  const imagesPerSlide = 4; // Número de imágenes visibles
  let currentIndex = 0;

  const updateSlider = () => {
    sliderTrack.innerHTML = "";

    for (let i = currentIndex; i < currentIndex + imagesPerSlide; i++) {
      const imgElement = document.createElement("img");
      imgElement.src = images[i % images.length];
      imgElement.alt = `Imagen ${i + 1}`;
      sliderTrack.appendChild(imgElement);
    }

    dots.forEach((dot) => dot.classList.remove("active-slider"));
    dots[Math.floor(currentIndex / imagesPerSlide) % dots.length].classList.add(
      "active-slider"
    );
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", (event) => {
      event.stopPropagation(); // Evitar interferencias
      currentIndex = parseInt(dot.getAttribute("data-index")) * imagesPerSlide;
      updateSlider();
    });
  });

  updateSlider(); // Inicializar el carrusel
});

// Selección de elementos
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");
const dropdown = document.querySelectorAll(".dropdown");

// Evento para el menú hamburguesa
menuToggle.addEventListener("click", (event) => {
  // Togglear el estado del menú
  nav.classList.toggle("active");
  event.stopPropagation(); // Evitar que el clic se propague al dropdown
});

// Cerrar el menú hamburguesa si se hace clic fuera de él
document.addEventListener("click", (event) => {
  // Si el clic está fuera del menú y el botón de hamburguesa
  if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
    nav.classList.remove("active"); // Cerrar el menú
  }
});

// Impedir que el clic en el dropdown cierre el menú hamburguesa
dropdown.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevenir que el clic en el dropdown cierre el menú hamburguesa
  });
});

// Manejar el dropdown en dispositivos de escritorio (cuando no hay hamburguesa)
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    const parent = toggle.parentElement;
    parent.classList.toggle("show");
  });
});

// Función para mostrar el loader
function showLoader() {
  const loaderContainer = document.getElementById("loader-container");
  loaderContainer.style.display = "flex"; // Mostrar el loader

  // Esperar 2 segundos y luego redirigir a la página de inicio de sesión
  setTimeout(function () {
    window.location.href = "iniciarsesion.html"; // Redirige a la página de inicio de sesión
  }, 2000); // 2000 milisegundos = 2 segundos
}

// Añadir el evento al botón para mostrar el loader y redirigir
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".init");
  if (button) {
    button.addEventListener("click", showLoader);
  }
});
