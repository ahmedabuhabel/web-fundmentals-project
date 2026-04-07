console.log("theme loaded");

const toggle = document.getElementById("theme");

if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
  });
}
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href && !href.startsWith("#")) {
      e.preventDefault();

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    }
  });
});
