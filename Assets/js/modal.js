document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("openModal"); // Botón para abrir el modal desde la sección de marketing
  const registerModal = document.getElementById("registerModal"); // Modal de registro
  const closeModalBtn = document.getElementById("closeModal"); // Botón para cerrar el modal
  const registerForm = document.getElementById("registerForm"); // Formulario de registro
  const registerNavBtn = document.querySelector(".Register"); // Botón "Registrarse" en la barra de navegación

  // Mostrar el modal al hacer clic en "¡Agenda tu Cita Ahora!"
  openModalBtn.addEventListener("click", () => {
    registerModal.style.display = "flex"; // Mostrar el modal
  });

  // Mostrar el modal al hacer clic en "Registrarse" desde la barra de navegación
  registerNavBtn.addEventListener("click", () => {
    registerModal.style.display = "flex"; // Mostrar el modal
  });

  // Cerrar el modal al hacer clic en la "X"
  closeModalBtn.addEventListener("click", () => {
    registerModal.style.display = "none"; // Ocultar el modal
  });

  // Cerrar el modal al hacer clic fuera del contenido
  window.addEventListener("click", (event) => {
    if (event.target === registerModal) {
      registerModal.style.display = "none"; // Ocultar el modal
    }
  });

  // Redirigir al archivo evaluacion.html al enviar el formulario
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el comportamiento estándar del formulario
    window.location.href = "evaluacion.html"; // Redirigir a evaluacion.html
  });
});

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

  const updateImages = () => {
    sliderTrack.innerHTML = "";

    for (let i = currentIndex; i < currentIndex + imagesPerSlide; i++) {
      const imageSrc = images[i % images.length];
      const imgElement = document.createElement("img");
      imgElement.src = imageSrc;
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
      event.stopPropagation(); // Evitar interferencias con otros carruseles
      currentIndex = parseInt(dot.getAttribute("data-index")) * imagesPerSlide;
      updateImages();
    });
  });

  // Inicializar el carrusel
  updateImages();
});
