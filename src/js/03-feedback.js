import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));


const formData = {};

// populateForm();

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    evt.preventDefault()
    evt.currentTarget.reset()
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateForm() {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY)
  if (savedData) {
    email.value = savedData.email;
    message.value = savedData.message;
  }
}



