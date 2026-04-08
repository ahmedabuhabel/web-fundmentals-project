let signIn = document.getElementById("signIn");
signIn.onmousemove = function () {
  document.body.style.backgroundColor = " red";
};
signIn.onmouseout = function () {
  document.body.style.backgroundColor = "gray";
};
const form = document.getElementById("signInForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

function isValidPassword(password) {
  return password.length >= 8;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email) {
    alert("Email is required");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Enter a valid email");
    return;
  }

  if (!password) {
    alert("Password is required");
    return;
  }

  if (!isValidPassword(password)) {
    alert("Password must be at least 8 characters");
    return;
  }

  setTimeout(() => {
    window.location.href = "home_page.html";
  }, 400);
  form.reset();
});
