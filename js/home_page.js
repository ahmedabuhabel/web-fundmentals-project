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
