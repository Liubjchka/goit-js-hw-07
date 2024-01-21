function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("[data-destroy]"); // Вибираємо кнопку за атрибутом data-destroy
button.style.backgroundColor = "#FF4E4E";

const inputElement = document.querySelector('input[type="number"]');
inputElement.style.width = "150px";

const createBoxes = (amount) => {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
};

const destroyBoxes = () => {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
};

document.querySelector("[data-create]").addEventListener("click", () => {
  const input = document.querySelector("input");
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});
