const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onBlurInput);

function onBlurInput(e) {
  if (e.currentTarget.value.length === parseInt(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
