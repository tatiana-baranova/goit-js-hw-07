function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
console.log(bodyColor);

const btnChange = document.querySelector(".change-color");
console.log(btnChange);

const spanColor = document.querySelector(".color");
console.log(spanColor);

btnChange.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = `${randomColor}`;
  spanColor.textContent = `${randomColor}`
});