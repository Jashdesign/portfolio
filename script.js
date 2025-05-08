// ===== Scroll to Top Button =====
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Dark Mode Toggle =====
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save theme to localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
