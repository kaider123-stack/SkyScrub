document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const slides = [...carousel.querySelectorAll(".slide")];
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");
    const dotsBox = carousel.querySelector(".dots");
    let index = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.addEventListener("click", () => show(i));
      dotsBox.appendChild(dot);
    });

    const dots = [...dotsBox.querySelectorAll(".dot")];

    function show(nextIndex) {
      slides[index].classList.remove("active");
      dots[index].classList.remove("active");
      index = (nextIndex + slides.length) % slides.length;
      slides[index].classList.add("active");
      dots[index].classList.add("active");
    }

    prev.addEventListener("click", () => show(index - 1));
    next.addEventListener("click", () => show(index + 1));

    if (carousel.dataset.autoplay === "true") {
      setInterval(() => show(index + 1), 4000);
    }
  });

  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));
});
