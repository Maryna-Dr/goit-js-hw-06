const refs = {
  inputNumber: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  const inputValue = refs.inputNumber.valueAsNumber;
  destroyBoxes();
  createBoxes(inputValue);
};

function createBoxes(amount) {
  const sizeList = [];
  let initSize = 30;

  for (let i = 0; i < amount; i += 1) {
    sizeList.push(initSize + 10 * i);
  };
  
  refs.boxes.insertAdjacentHTML('afterbegin', getBoxListTemplate(sizeList));
};

function getBoxTemplate(size) {
  const color = getRandomHexColor();
  return `<div style='width: ${size}px; 
  height: ${size}px; 
  background-color: ${color}'></div>`;
};

function getBoxListTemplate(array) {
  return array.map(getBoxTemplate).join('');
};

function onDestroyBtnClick() {
  destroyBoxes();
  resetInput();
};

function destroyBoxes() {
  const childAmount = boxes.childNodes.length;
  for (let i = 0; i < childAmount; i += 1) {
    boxes.lastChild.remove();
  };
};

function resetInput() {
  refs.inputNumber.value = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



