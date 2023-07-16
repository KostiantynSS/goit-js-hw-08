import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset();
});
function handleInput(event) {
  event.preventDefault();
  const userData = { message: form.message.value, email: form.email.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}
if (localStorage.getItem('feedback-form-state')) {
  const inputHelper = JSON.parse(localStorage.getItem('feedback-form-state'));
  form.email.value = inputHelper.email;
  form.message.value = inputHelper.message;
}
