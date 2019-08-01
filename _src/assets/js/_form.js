'use strict';
// Recogemos la info del input del formulario
const inputName = document.querySelector('.form__field-name');
const inputJob = document.querySelector('.form__field-job');
const inputEmail = document.querySelector('.form__field-mail');
const inputPhone = document.querySelector('.form__field-phone');
const inputLinkedIn = document.querySelector('.form__field-linkedin');
const inputGitHub = document.querySelector('.form__field-github');

// Recogemos la info del donde poner los input del formulario en la preview-card
const previewName = document.querySelector('.preview-card__name');
const previewJob = document.querySelector('.preview-card__career');
const previewEmail = document.querySelector('.email__link');
const previewPhone = document.querySelector('.phone__link');
const previewLinkedIn = document.querySelector('.linkedin__link');
const previewGitHub = document.querySelector('.github__link');

//Functions
function onNameInput(event) {
    if (event.currentTarget.value) {
        previewName.innerHTML = event.currentTarget.value;
    } else {
        previewName.innerHTML = ('Nombre Apellidos');
    }
}

function onJobInput(event) {
    if (event.currentTarget.value) {
        previewJob.innerHTML = event.currentTarget.value;
    } else {
        previewJob.innerHTML = ('Front-end developer');
    }
}

function onPhoneInput() {
    if (event.currentTarget.value) {
        previewPhone.parentElement.classList.remove('hidden');
    } else {
        previewPhone.parentElement.classList.add('hidden');
    }
    previewPhone.href = `tel:${inputPhone.value}`;
}

function onEmailInput() {
    if (event.currentTarget.value) {
        previewEmail.parentElement.classList.remove('hidden');
    } else {
        previewEmail.parentElement.classList.add('hidden');
    }
    previewEmail.href = `mailto:${inputEmail.value}`;
}

function onLinkedInInput() {
    if (event.currentTarget.value) {
        previewLinkedIn.parentElement.classList.remove('hidden');
    } else {
        previewLinkedIn.parentElement.classList.add('hidden');
    }
    previewLinkedIn.href = `//linkedin.com/in/${inputLinkedIn.value}`;
}

function onGitHubInput() {
    let userName = inputGitHub.value;

    if (userName[0] === '@') {
        userName = userName.substring(1);
    }
    if (event.currentTarget.value) {
        previewGitHub.parentElement.classList.remove('hidden');
    } else {
        previewGitHub.parentElement.classList.add('hidden');
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
