window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
function goToPage() {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "detail.html";
  }, 400);
}
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 150 && rect.bottom >= 50) {
      current = section.getAttribute("id");
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    current = sections[sections.length - 1].id;
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
