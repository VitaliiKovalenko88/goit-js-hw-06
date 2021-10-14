const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onDraggingSlider);

function onDraggingSlider(e) {
  refs.text.style.fontSize = e.currentTarget.value + 'px';
}
