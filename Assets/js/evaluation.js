document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("evaluationForm");
  const loader = document.getElementById("loader");
  const modal = document.getElementById("resultsModal");
  const resultsText = document.getElementById("resultsText");
  const closeModal = document.querySelector(".close");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const scheduleAppointmentBtn = document.getElementById(
    "scheduleAppointmentBtn"
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Mostrar el loader mientras se procesan las respuestas
    loader.style.display = "flex";

    // Obtener respuestas
    const formData = new FormData(form);
    const responses = {};
    formData.forEach((value, key) => {
      responses[key] = value;
    });

    // Validar que todas las preguntas estén respondidas
    if (Object.values(responses).includes("")) {
      alert("Por favor, responde todas las preguntas antes de continuar.");
      loader.style.display = "none"; // Ocultar el loader si falta alguna respuesta
      return;
    }

    // Simular el análisis de respuestas
    setTimeout(() => {
      const result = analyzeResponses(responses);

      // Guardar respuestas en localStorage (simula enviar a servidor)
      localStorage.setItem("evaluationResult", JSON.stringify(result));

      // Mostrar resultados en el modal
      resultsText.innerHTML = `

          <p><strong>Síntomas posibles:</strong> <span id="symptoms">${result.symptoms}</span></p>
          <p><strong>Porcentaje estimado de Estrés:</strong> <span id="stressPercentage">${result.stressPercentage}%</span></p>
          <p><strong>Recomendación:</strong> ${result.recommendation}</p>
        `;

      // Mostrar el modal
      modal.style.display = "flex";

      // Ocultar el loader cuando los resultados estén listos
      loader.style.display = "none";
    }, 2000); // Tiempo de simulación para el cálculo (ajustable)
  });

  // Cerrar el modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar el modal con el botón "Cerrar"
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Redirigir a WhatsApp o correo electrónico para agendar una cita
  scheduleAppointmentBtn.addEventListener("click", () => {
    const userChoice = confirm(
      "¿Te gustaría agendar una cita con Clarity Mental?\n\nElige tu opción:"
    );

    if (userChoice) {
      // Redirigir a WhatsApp
      window.open("https://wa.me/11234567890", "_blank"); // Número de WhatsApp de Clarity Mental (actualiza con el número real)
    } else {
      // Redirigir a correo electrónico
      window.location.href =
        "mailto:claritymental@example.com?subject=Solicitud de Cita&body=Hola, me gustaría agendar una cita.";
    }
  });
});

// Función para analizar las respuestas
function analyzeResponses(responses) {
  let depressionScore = 0;
  let anxietyScore = 0;
  let stressScore = 0;

  // Análisis de las respuestas y cálculos de puntajes
  for (const [question, answer] of Object.entries(responses)) {
    if (answer === "siempre" || answer === "si") {
      depressionScore += 2;
      anxietyScore += 2;
      stressScore += 2;
    } else if (answer === "frecuente") {
      depressionScore += 1;
      anxietyScore += 1;
      stressScore += 1;
    }
  }

  const stressPercentage =
    (stressScore / (Object.keys(responses).length * 2)) * 100;

  const symptoms = generateSymptoms(depressionScore, anxietyScore, stressScore);

  return {
    depressionScore,
    anxietyScore,
    stressPercentage: stressPercentage.toFixed(2),
    symptoms,
    recommendation: generateRecommendation(
      depressionScore,
      anxietyScore,
      stressPercentage
    ),
  };
}

// Generar síntomas basados en los puntajes
function generateSymptoms(depressionScore, anxietyScore, stressScore) {
  const symptoms = [];

  // Generamos los síntomas posibles según los puntajes
  if (depressionScore > 6)
    symptoms.push(
      "Posibles síntomas de depresión: fatiga, tristeza, falta de motivación."
    );
  if (anxietyScore > 6)
    symptoms.push(
      "Posibles síntomas de ansiedad: preocupación excesiva, inquietud, insomnio."
    );
  if (stressScore > 6)
    symptoms.push(
      "Posibles síntomas de estrés: irritabilidad, dolores de cabeza, tensión muscular."
    );

  // Retorna los síntomas combinados
  return symptoms.join(" ");
}

// Generar recomendaciones en base a los puntajes
function generateRecommendation(
  depressionScore,
  anxietyScore,
  stressPercentage
) {
  if (depressionScore > 8 || anxietyScore > 8 || stressPercentage > 75) {
    return "Recomendamos una consulta con uno de nuestros especialistas de Clarity Mental lo antes posible.";
  } else if (depressionScore > 4 || anxietyScore > 4 || stressPercentage > 50) {
    return "Es importante monitorear tu bienestar emocional. Te invitamos a agendar una cita con Clarity Mental.";
  } else {
    return "Tu bienestar emocional parece estar dentro de lo normal, pero siempre es bueno buscar apoyo cuando lo necesites.";
  }
}
