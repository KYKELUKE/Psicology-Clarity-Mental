document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevButton = document.querySelector(".prev-opinion");
  const nextButton = document.querySelector(".next-opinion");
  let currentIndex = 0;

  const showTestimonial = (index) => {
    testimonials.forEach((testimonial, idx) => {
      testimonial.classList.remove("active-testimonial");
      if (idx === index) {
        testimonial.classList.add("active-testimonial");
      }
    });
  };

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  // Inicializa el primer testimonio como activo
  showTestimonial(currentIndex);
});
