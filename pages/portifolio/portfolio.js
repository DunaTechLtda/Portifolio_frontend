// Portfolio Filter Functionality
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter items
      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filterValue === "all" || category === filterValue) {
          item.style.display = "block";
          item.classList.remove("fade-out");
        } else {
          item.classList.add("fade-out");
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Portfolio item hover effects
  portfolioItems.forEach((item) => {
    const card = item.querySelector(".card");
    const overlay = item.querySelector(".portfolio-overlay");

    card.addEventListener("mouseenter", function () {
      if (overlay) {
        overlay.style.opacity = "1";
      }
    });

    card.addEventListener("mouseleave", function () {
      if (overlay) {
        overlay.style.opacity = "0";
      }
    });
  });

  // Smooth scroll for CTA buttons
  const ctaButtons = document.querySelectorAll('a[href^="../"]');
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Add a small animation before navigation
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  // Stats counter animation (when in viewport)
  const stats = document.querySelectorAll("#Stats h2");
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalNumber = target.textContent.replace(/\D/g, "");
        animateNumber(target, finalNumber);
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  stats.forEach((stat) => {
    observer.observe(stat);
  });

  function animateNumber(element, finalNumber) {
    const originalText = element.textContent;

    // Se for 24/7, não animar
    if (originalText === "24/7") {
      return;
    }

    const suffix = element.textContent.replace(/[\d]/g, "");
    let currentNumber = 0;
    const increment = finalNumber / 50;

    const timer = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= finalNumber) {
        element.textContent = finalNumber + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(currentNumber) + suffix;
      }
    }, 40);
  }

  // Testimonials carousel removed - using normal responsive layout instead

  // Add loading state to external links
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const originalText = this.innerHTML;
      this.innerHTML =
        '<i class="bi bi-hourglass-split me-2"></i>Carregando...';

      setTimeout(() => {
        this.innerHTML = originalText;
      }, 2000);
    });
  });
});
