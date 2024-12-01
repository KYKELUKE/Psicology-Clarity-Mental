document.addEventListener("DOMContentLoaded", () => {
  function animateLetters(selector) {
    const element = document.querySelector(selector);
    const text = element.innerText; // Obtén el texto original
    element.innerHTML = ""; // Limpia el contenido original

    // Divide el texto en letras y envuelve cada una en un span
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char; // Asigna la letra al span
      span.style.animationDelay = `${index * 0.1}s`; // Retraso animado
      element.appendChild(span); // Agrega cada span al elemento original
    });
  }

  // Aplica la animación al título y al párrafo
  animateLetters("#animated-text");
  animateLetters("#animated-paragraph");
});
