'use strict';
// Recogemos la info del input del formulario
const inputName = document.querySelector('.form__field-name');
const inputJob = document.querySelector('.form__field-job');
const inputPhone = document.querySelector('.form__field-phone');
const inputEmail = document.querySelector('.form__field-mail');
const inputLinkedIn = document.querySelector('.form__field-linkedin');
const inputGitHub = document.querySelector('.form__field-github');

// Recogemos la info del donde poner los imput del formulario en la preview-card
const previewName = document.querySelector('.preview-card__name');
const previewJob = document.querySelector('.preview-card__career');
const previewPhone = document.querySelector('.phone__link');
const previewEmail = document.querySelector('.email__link');
const previewLinkedIn = document.querySelector('.linkedin__link');
const previewGitHub = document.querySelector('.github__link');

//Functions
function onNameInput(event) {
  previewName.innerHTML = event.currentTarget.value;
}

function onJobInput(event) {
  previewJob.innerHTML = event.currentTarget.value;
}

function onPhoneInput() {
  if (event.currentTarget.value){
    previewPhone.parentElement.classList.remove('hidden');
  }else {
    previewPhone.parentElement.classList.add('hidden');
  }
  previewPhone.href = `phoneto:${inputPhone.value}`;
}

function onEmailInput() {
  previewEmail.href = `mailto:${inputEmail.value}`;
}

function onLinkedInInput() {
  previewLinkedIn.href = `//${inputLinkedIn.value}`;
}

function onGitHubInput() {
  let userName = inputGitHub.value;

  if (userName[0] === '@') {
    userName = userName.substring(1);
  }

  previewGitHub.href = `//github.com/${userName}`;
}

//listeners
inputName.addEventListener('keyup', onNameInput);
inputJob.addEventListener('keyup', onJobInput);
inputPhone.addEventListener('keyup', onPhoneInput);
inputEmail.addEventListener('keyup', onEmailInput);
inputLinkedIn.addEventListener('keyup', onLinkedInInput);
inputGitHub.addEventListener('keyup', onGitHubInput);
