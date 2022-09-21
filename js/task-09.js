function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  btnChangeColor: document.querySelector('.change-color'),
  text: document.querySelector('.color'),
};

refs.btnChangeColor.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick() {
  const bgColor = getRandomHexColor();
  refs.body.style.backgroundColor = bgColor;
  refs.text.textContent = bgColor;
};

