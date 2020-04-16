const label = document.getElementById("label");
const email = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = email.value;

  if (!isValid(emailValue)) {
    label.classList.remove("form_error")
    label.classList.add("form-error");
    email.classList.add("email-error");
  } else {
    label.classList.remove("form-error");
    label.classList.add("form_error")
  }
});

function isValid(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}