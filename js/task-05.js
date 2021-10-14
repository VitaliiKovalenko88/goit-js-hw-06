const refs = {
  input: document.querySelector('#name-input'),
  titleName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.titleName.textContent =
    event.currentTarget.value.trim() !== ''
      ? event.currentTarget.value
      : 'Anonymous';
}
