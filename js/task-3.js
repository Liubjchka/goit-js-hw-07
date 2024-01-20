document.addEventListener("DOMContentLoaded", function () {
  const nameInputEl = document.getElementById("name-input");
  const nameOutputEl = document.getElementById("name-output");

  nameInputEl.addEventListener("input", function () {
    const enterName = nameInputEl.value.trim();
    if (enterName === "") {
      nameOutputEl.textContent = "Anonymous";
    } else {
      nameOutputEl.textContent = enterName;
    }
  });
});
