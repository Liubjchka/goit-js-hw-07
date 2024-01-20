document.addEventListener("DOMContentLoaded", () => {
  const loginFormEl = document.querySelector(".login-form");

  loginFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValueEl = loginFormEl.elements.email.value.trim();
    const passwordValueEl = loginFormEl.elements.password.value.trim();
    if (emailValueEl === "" || passwordValueEl === "") {
      alert(`All form fields must be filled in`);
      return;
    }

    const formDataEl = { email: emailValueEl, password: passwordValueEl };
    console.log(formDataEl);
    loginFormEl.reset();
  });
});
