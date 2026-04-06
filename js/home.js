// FAQ
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    document.querySelectorAll(".faq-answer").forEach((a) => {
      if (a !== answer) a.classList.remove("open");
    });

    answer.classList.toggle("open");
  });
});

// validation
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

// forms
function handleForm(formId, inputId) {
  const form = document.getElementById(formId);
  const input = document.getElementById(inputId);

  if (!form || !input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value.trim();

    if (!value) return alert("Email is required");
    if (!isValidEmail(value)) return alert("Enter a valid email");

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "auth.html";
    }, 400);
    input.value = "";
  });
}

handleForm("heroForm", "heroEmail");
handleForm("faqForm", "faqEmail");

const signInForm = document.getElementById("signInForm");

if (signInForm) {
  signInForm.addEventListener("submit", function (e) {
    e.preventDefault();

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "auth.html";
    }, 400);
  });
}
