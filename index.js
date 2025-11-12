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

  // Controle robusto de navegação ativa
  const navLinks = document.querySelectorAll(".nav-pills .nav-link");
  const inicioLink = document.querySelector('.nav-pills .nav-link[href="#"]');
  const servicosLink = document.querySelector(
    '.nav-pills .nav-link[href="#Servicos"]'
  );

  // Função para garantir que apenas "Início" esteja ativo
  function forceInicioActive() {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });
    if (inicioLink) {
      inicioLink.classList.add("active");
      inicioLink.setAttribute("aria-current", "page");
    }
  }

  // Observer para monitorar mudanças nas classes dos links
  const navObserver = new MutationObserver(() => {
    let activeCount = 0;
    navLinks.forEach((link) => {
      if (link.classList.contains("active")) activeCount++;
    });

    // Se mais de um link estiver ativo, ou se "Serviços" estiver ativo
    if (
      activeCount > 1 ||
      (servicosLink && servicosLink.classList.contains("active"))
    ) {
      forceInicioActive();
    }
  });

  // Observar mudanças em todos os nav-links
  navLinks.forEach((link) => {
    navObserver.observe(link, {
      attributes: true,
      attributeFilter: ["class"],
    });
  });

  // Função para detectar se é mobile
  function isMobile() {
    return window.innerWidth <= 768;
  }

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // No mobile, prevenir completamente o comportamento do Bootstrap
      if (isMobile() && this.classList.contains("nav-link")) {
        e.stopPropagation();
        e.stopImmediatePropagation();

        // Remover imediatamente qualquer classe active que possa ter sido adicionada
        this.classList.remove("active");
        this.removeAttribute("aria-current");
      }

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Para links âncora internos, forçar apenas "Início" ativo
      if (
        this.getAttribute("href") !== "#" &&
        this.getAttribute("href").startsWith("#")
      ) {
        setTimeout(() => forceInicioActive(), 50);
      }
    });
  });

  // Garantir estado correto ao carregar a página e em intervalos
  window.addEventListener("load", () => {
    forceInicioActive();
  });

  // Verificar periodicamente se o estado está correto
  setInterval(() => {
    let activeCount = 0;
    navLinks.forEach((link) => {
      if (link.classList.contains("active")) activeCount++;
    });

    if (activeCount !== 1 || !inicioLink.classList.contains("active")) {
      forceInicioActive();
    }
  }, 1000);

  // Listener para mudanças de tamanho de tela
  window.addEventListener("resize", () => {
    forceInicioActive();
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
