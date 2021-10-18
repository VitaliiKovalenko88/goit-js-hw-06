const refs = {
  inputEl: document.querySelector('input'),
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('#controls > button:nth-child(2)'),
  deatroyBtn: document.querySelector('#controls > button:nth-child(3)'),
};
// console.log(refs.inputEl);

function createBoxes(amount) {
  return refs.boxes.map((ref, index) => {
    const size = 30 + [i] * 10;
    refs.box = document.createElement('div');
    // refs.box.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()`;
  });

  // for (let i = 0; i < amount; i += 1) {
  //   // const size = 30 + [i] * 10;
  //   refs.box = document.createElement('div');
  //   refs.box.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
  // }
}

function destroBoxes() {}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCreateBtnClick() {
  refs.boxes.insertAdjacentHTML('beforeend', createBoxes(4));
  console.dir();
}
function onDestroyBtnClick() {}

refs.createBtn.addEventListener('click', onCreateBtnClick);
