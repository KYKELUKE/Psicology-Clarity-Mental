document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, idx) => {
      testimonial.classList.remove("active-testimonial");
      if (idx === index) {
        testimonial.classList.add("active-testimonial");
      }
    });
  }

  nextBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Evitar interferencias con otros carruseles
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  prevBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Evitar interferencias con otros carruseles
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  // Inicializamos el primer testimonio como activo
  showTestimonial(currentIndex);
});
