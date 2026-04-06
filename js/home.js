document.getElementById('theme').addEventListener('change', function() {
  document.documentElement.setAttribute('data-theme', this.checked ? 'light' : 'dark');
  localStorage.setItem('theme', this.checked ? 'light' : 'dark');
});
const saved = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', saved);
document.getElementById('theme').checked = saved === 'light';

 document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    document.querySelectorAll(".faq-answer").forEach(a => {
      if (a !== answer) a.classList.remove("open");
    });

    answer.classList.toggle("open");
  });
});
document.getElementById("signinBtn").addEventListener('click',function(){
  window.location.href="auth.html"
});
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

function handleForm(formId, inputId) {
  const form = document.getElementById(formId);
  const input = document.getElementById(inputId);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value.trim();

    if (!value) {
      alert("Email is required");
      return;
    }

    if (!isValidEmail(value)) {
      alert("Enter a valid email");
      return;
    }

    alert("Welcome! Email: " + value);
    input.value = "";
  });
}

handleForm("heroForm", "heroEmail");
handleForm("faqForm", "faqEmail");


const dots = document.querySelector(".dots");
if (dots) {
  let frames = [".", "..", "..."];
  let i = 0;

  setInterval(() => {
    dots.textContent = frames[i];
    i = (i + 1) % frames.length;
  }, 500);
}