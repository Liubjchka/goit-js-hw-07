function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const colorSpanEl = document.querySelector(".color");
const changeColorButtonEl = document.querySelector(".change-color");

changeColorButtonEl.addEventListener("click", () => {
  const randomColorEl = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColorEl;
  colorSpanEl.textContent = randomColorEl;
});
