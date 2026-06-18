document.addEventListener("DOMContentLoaded", () => {
  const animationTargets = [
    "main > section",
    "main > div",
    "header",
    "footer",
    ".container > .row",
    ".custom-card",
    ".cat-card",
    ".course-card",
    ".instructor-card",
    ".blog-card",
    ".info-card",
    ".accordion-item",
    ".filter-pill",
    ".map-placeholder-canvas",
    ".card",
  ];

  const elements = document.querySelectorAll(animationTargets.join(","));

  elements.forEach((element, index) => {
    if (!element.hasAttribute("data-aos")) {
      element.setAttribute("data-aos", index % 2 === 0 ? "fade-up" : "fade-right");
    }

    if (!element.hasAttribute("data-aos-duration")) {
      element.setAttribute("data-aos-duration", "700");
    }

    if (!element.hasAttribute("data-aos-delay")) {
      element.setAttribute("data-aos-delay", String(Math.min((index % 6) * 80, 400)));
    }
  });

  if (window.AOS) {
    AOS.init({
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }
});
