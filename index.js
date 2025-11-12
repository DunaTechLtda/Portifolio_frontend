// Animação dos contadores
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 60; // Divisão para controlar a velocidade
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent =
        target + (target === 1200 ? "+" : target === 100 ? "%" : "");
      clearInterval(timer);
    } else {
      element.textContent =
        Math.floor(current) +
        (target === 1200 ? "+" : target === 100 ? "%" : "");
    }
  }, 16);
}

// Observer para iniciar animação quando a seção de stats aparecer
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const text = counter.textContent;
        if (text.includes("1200")) {
          animateCounter(counter, 1200);
        } else if (text.includes("100")) {
          animateCounter(counter, 100);
        }
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar a seção de estatísticas
document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector("#Stats");
  if (statsSection) {
    observer.observe(statsSection);
  }

  // Smooth scroll para links internos (mantendo apenas funcionalidade básica)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Adicionar efeito hover nas tecnologias
  const techCards = document.querySelectorAll("#Technologies .border");
  techCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // Adicionar efeito hover nos depoimentos
  const testimonialCards = document.querySelectorAll("#Testimonials .card");
  testimonialCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});
