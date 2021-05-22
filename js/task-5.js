const refs = {
  input: document.querySelector('#name-input'),
  titleLable: document.querySelector('body > h1'),
  titleName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event);
  refs.titleName.textContent =
    event.currentTarget.value.trim() !== ''
      ? event.currentTarget.value
      : 'незнакомец';
}
