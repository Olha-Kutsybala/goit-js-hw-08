import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const messageEl = document.querySelector('.message')
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', saveMessage);
updateOutput();

function saveMessage(evt) {
    evt.preventDefault();
    localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
    updateOutput();
    form.reset();
}

function updateOutput() {
  messageEl.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
}

