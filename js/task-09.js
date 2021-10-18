const refs = {
  body: document.querySelector('body'),
  color: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

refs.button.addEventListener('click', onButtonClick);

function onButtonClick() {
  const {
    color,
    body: { style },
  } = refs;
  color.textContent = getRandomHexColor();
  style.backgroundColor = color.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
