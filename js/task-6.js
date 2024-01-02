function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const inputNumber = document.querySelector('#controls input');

const createBoxes = (amount) => {
  let boxesMarkup = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    boxesMarkup.push(`<div class="new-box" style="width:${size}px; height:${size}px; background-color: ${getRandomHexColor()}"></div>`);
    size += 10;
  }
  const boxesMarkupFull = boxesMarkup.join('');
  boxes.insertAdjacentHTML('beforeend', boxesMarkupFull);
}

const destroyBoxes = () => {
  const newBoxes = document.querySelectorAll('.new-box');
  newBoxes.forEach(box => {
    box.remove();
  });
}

create.addEventListener('click', () => {
  const amountValue = inputNumber.value;
  if (amountValue >= 1 && amountValue <= 100) {
    destroyBoxes();
    inputNumber.value = '';
    createBoxes(amountValue);
  }
});

destroy.addEventListener('click', destroyBoxes);