// Villa Mira — main.js

const nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("stuck", window.scrollY > 80);
  },
  { passive: true },
);

const burger = document.getElementById("burger");
const drawer = document.getElementById("drawer");
const dx = document.getElementById("dx");

burger.addEventListener("click", () => drawer.classList.add("open"));
dx.addEventListener("click", () => drawer.classList.remove("open"));
drawer
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => drawer.classList.remove("open")),
  );

// Reveal
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("on");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
document
  .querySelectorAll(".r, .r-left, .r-right")
  .forEach((el) => io.observe(el));

// Dates
const today = new Date().toISOString().split("T")[0];
const ci = document.getElementById("ci");
const co = document.getElementById("co");
if (ci) ci.min = today;
if (co) co.min = today;
ci?.addEventListener("change", () => {
  if (co) {
    co.min = ci.value;
    if (co.value && co.value <= ci.value) co.value = "";
  }
});

document.getElementById("cf")?.addEventListener("submit", (e) => {
  if (ci?.value && co?.value && co.value <= ci.value) {
    e.preventDefault();
    alert("Departure must be after arrival.");
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const t = document.querySelector(a.getAttribute("href"));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: "smooth" });
    }
  });
});
