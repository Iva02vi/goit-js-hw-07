function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('button.change-color');
const body = document.querySelector('body');
const color = document.querySelector('span.color');

changeColor.addEventListener('click', () => {
  color.textContent = getRandomHexColor();
  body.style.backgroundColor = color.textContent;
})