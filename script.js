const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  })
);

// Comportamento do header ao rolar
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("header-translucido");
  }

  if (currentScroll > lastScroll && !header.classList.contains("nav-open")) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
    if (currentScroll > 0) {
      header.classList.add("header-translucido");
    }
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});
