// Initialize EmailJS
(function () {
  // SUBSTITUA pela sua chave pública do EmailJS
  emailjs.init("s11Bnx4qEbtNFvdXG");
})();

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("form");
  const submitBtn = document.querySelector('button[type="submit"]');

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const now = new Date();
      const formData = {
        from_name: document.getElementById("inputFirstName").value,
        from_lastname: document.getElementById("inputLastName").value,
        from_email: document.getElementById("inputEmail").value,
        from_phone: document.getElementById("inputPhone").value,
        message: document.getElementById("inputMessage").value,
        current_date:
          now.toLocaleDateString("pt-BR") +
          " às " +
          now.toLocaleTimeString("pt-BR"),
      };

      // Validate required fields
      if (!formData.from_name || !formData.from_email || !formData.message) {
        alert(
          "Por favor, preencha todos os campos obrigatórios (Nome, Email e Mensagem)."
        );
        return;
      }

      // Change button text during submission
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Enviando...";
      submitBtn.disabled = true;

      // Send email using EmailJS
      emailjs
        .send("service_hqtg8gp", "template_81rl7np", formData)
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert(
              "Mensagem enviada com sucesso! Entraremos em contato em breve."
            );
            contactForm.reset();
          },
          function (error) {
            console.log("FAILED...", error);
            alert(
              "Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone."
            );
          }
        )
        .finally(function () {
          // Restore button
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }
});

// Form validation feedback
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    "input[required], textarea[required]"
  );

  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value.trim() === "") {
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
      } else {
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
      }
    });

    input.addEventListener("input", function () {
      if (this.value.trim() !== "") {
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
      }
    });
  });

  // Email validation
  const emailInput = document.getElementById("inputEmail");
  if (emailInput) {
    emailInput.addEventListener("blur", function () {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(this.value)) {
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
      } else if (this.value.trim() !== "") {
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
      }
    });
  }
});
