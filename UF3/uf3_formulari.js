// Espera fins que el document estigui carregat completament
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el formulari de contacte
  const contactForm = document.getElementById("contact-form");
  // Selecciona els inputs i els elements d'error
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  // Afegeix un esdeveniment de submissió al formulari de contacte
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulari es presenti
    validateForm(); // Valida el formulari
  });

  // Afegeix esdeveniments d'entrada als inputs per validar en temps real
  nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() === "") {
      nameError.style.display = "block"; // Mostra el missatge d'error
    } else {
      nameError.style.display = "none"; // Amaga el missatge d'error
    }
  });

  emailInput.addEventListener("input", function () {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = "block"; // Mostra el missatge d'error
    } else {
      emailError.style.display = "none"; // Amaga el missatge d'error
    }
  });

  messageInput.addEventListener("input", function () {
    if (messageInput.value.trim() === "") {
      messageError.style.display = "block"; // Mostra el missatge d'error
    } else {
      messageError.style.display = "none"; // Amaga el missatge d'error
    }
  });

  // Funció per validar el formulari
  function validateForm() {
    if (nameInput.value.trim() === "") {
      nameError.style.display = "block"; // Mostra el missatge d'error
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = "block"; // Mostra el missatge d'error
    }

    if (messageInput.value.trim() === "") {
      messageError.style.display = "block"; // Mostra el missatge d'error
    }
  }
});
