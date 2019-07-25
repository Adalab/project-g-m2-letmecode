'use strict';
// Escribe la info del input en la tarjeta
const formName = document.querySelector('.form__field-name');
const previewName = document.querySelector('.preview-card__name');
const formJob = document.querySelector('.form__field-job');
const previewJob = document.querySelector('.preview-card__career');

function writing(event) {
    previewName.innerHTML = event.currentTarget.value;
}
formName.addEventListener('keyup', writing);

function writing2(event) {
    previewJob.innerHTML = event.currentTarget.value;
}
formJob.addEventListener('keyup', writing2);


//input iconPhone
const inputPhone = document.querySelector('.form__field-phone');
const enlacePhone = document.querySelector('.phone__link');

function writeIcon3() {
  enlacePhone.href = `phoneto:${inputPhone.value}`;
}

inputPhone.addEventListener('keyup', writeIcon3);

//input iconEmail
const inputEmail = document.querySelector('.form__field-mail');
const enlaceEmail = document.querySelector('.email__link');

function writeIcon4() {
  enlaceEmail.href = `mailto:${inputEmail.value}`;
}

inputEmail.addEventListener('keyup', writeIcon4);

//input iconLinkedin
const inputLinkedIn = document.querySelector('.form__field-linkedin');
const enlaceLinkedIn = document.querySelector('.linkedin__link');

function writeIcon5() {
  enlaceLinkedIn.href = `//${inputLinkedIn.value}`;
}

inputLinkedIn.addEventListener('keyup', writeIcon5);

//input iconGitHub
const inputGitHub = document.querySelector('.form__field-github');
const enlaceGitHub = document.querySelector('.github__link');

function writeIcon6() {
  const userName = inputGitHub.value;
  const userNamePro = userName.substring(1,);

  enlaceGitHub.href = `//github.com/${userNamePro}`;
}

inputGitHub.addEventListener('keyup', writeIcon6);
