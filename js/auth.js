let signIn = document.getElementById("signIn");
signIn.onmousemove = function () {
  document.body.style.backgroundColor = " red";
};
signIn.onmouseout = function () {
  document.body.style.backgroundColor = "gray";
};
const form = document.getElementById("signInForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // 🔥 أهم سطر

  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "home_page.html";
  }, 400);
});
