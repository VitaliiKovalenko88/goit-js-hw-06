const refs = {
  form: document.querySelector('.login-form'),
  button: document.querySelector('button'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
}
