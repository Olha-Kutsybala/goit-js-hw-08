import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));


let formData =  JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

populateForm();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const { email, message } = evt.target.elements;
  console.log(email, message)
  if (!email.value.trim() || !message.value.trim()) {
    alert("Заповність всі поля");
    return;
  }
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  evt.currentTarget.reset()
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formData = {};
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)); 
  if (savedData){
    email.value = savedData.email || "";
    message.value = savedData.message || "";
  }
  }
 





