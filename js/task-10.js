const refs = {
  inputEl: document.querySelector('input'),
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('#controls > button:nth-child(2)'),
  destroyBtn: document.querySelector('#controls > button:nth-child(3)'),
};

function createBoxes(amount) {
  const array = [];

  array.length = amount;

  array.fill(amount).map((ref, index) => {
    const size = 30 + index * 10;

    console.log(array.length);
    refs.box = document.createElement('div');
    refs.box.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    refs.boxes.append(refs.box);
  });
}

function onDestroyBtnClick() {
  refs.inputEl.value = '';
  refs.boxes.innerHTML = '';
}

function onCreateBtnClick() {
  createBoxes(refs.inputEl.value);
  refs.destroyBtn.addEventListener('click', onDestroyBtnClick);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.createBtn.addEventListener('click', onCreateBtnClick);
