'use strict';
// Recogemos la info del input del formulario
const inputName = document.querySelector('.form__field-name');
const inputJob = document.querySelector('.form__field-job');
const inputPhone = document.querySelector('.form__field-phone');
const inputEmail = document.querySelector('.form__field-mail');
const inputLinkedIn = document.querySelector('.form__field-linkedin');
const inputGitHub = document.querySelector('.form__field-github');

// Recogemos la info del donde poner los input del formulario en la preview-card
const previewName = document.querySelector('.preview-card__name');
const previewJob = document.querySelector('.preview-card__career');
const previewPhone = document.querySelector('.phone__link');
const previewEmail = document.querySelector('.email__link');
const previewLinkedIn = document.querySelector('.linkedin__link');
const previewGitHub = document.querySelector('.github__link');

//Local-Storage: lo primero que ocurre al recargar la página
//guardo en LS input name
const lsUserName = localStorage.getItem('user-name');

if (lsUserName) {
  previewName.innerHTML = lsUserName;
  inputName.value = lsUserName;
}

else {
  previewName.innerHTML = 'Nombre Apellido';
}
//guardamos en LS input job
const lsUserJob = localStorage.getItem('user-job');
if (lsUserJob) {
  previewJob.innerHTML = lsUserJob;
  inputJob.value = lsUserJob;
}
else {}

//guardamos en LS el input del mail
const lsUserMail = localStorage.getItem('user-mail');
if (lsUserMail) {
  inputEmail.value = lsUserMail;
  previewEmail.parentElement.classList.remove('hidden');

}
else {}

//guardamos en LS el input del phone
const lsUserPhone = localStorage.getItem('user-phone');
if (lsUserPhone) {
  inputPhone.value = lsUserPhone;
  previewPhone.parentElement.classList.remove('hidden');
}
else {}

//guardamos en LS el input del linkedin
const lsUserLinkedin = localStorage.getItem('user-linkedin');
if (lsUserLinkedin) {
  inputLinkedIn.value = lsUserLinkedin;
  previewLinkedIn.parentElement.classList.remove('hidden');
}
else {}

//guardamos en LS el input del gitHub
const lsUserGithub = localStorage.getItem('user-github');
if (lsUserGithub) {
  inputGitHub.value = lsUserGithub;
  previewGitHub.parentElement.classList.remove('hidden');
}
else {}

//Functions
function onNameInput() {
  const newValue = event.currentTarget.value;
    if (newValue) {
        previewName.innerHTML = newValue;
        localStorage.setItem('user-name', newValue );
    } else {
        previewName.innerHTML = 'Nombre Apellido';
        localStorage.removeItem('user-name');
    }
}

function onJobInput() {
  const newValue = event.currentTarget.value;
    if (newValue) {
        previewJob.innerHTML = newValue;
        localStorage.setItem('user-job', newValue);
    } else {
        previewJob.innerHTML = ('Front-end developer');
        localStorage.removeItem('user-job');
    }
}

function onEmailInput() {
  const newValue = event.currentTarget.value;
  if (newValue) {
      previewEmail.parentElement.classList.remove('hidden');
      localStorage.setItem('user-mail', newValue);
  } else {
      previewEmail.parentElement.classList.add('hidden');
      localStorage.removeItem('user-mail');
  }
  previewEmail.href = `mailto:${inputEmail.value}`;

}

function onPhoneInput() {
    const newValue = event.currentTarget.value;
    if (newValue) {
        previewPhone.parentElement.classList.remove('hidden');
        localStorage.setItem('user-phone', newValue);
    } else {
        previewPhone.parentElement.classList.add('hidden');
        localStorage.removeItem('user-phone');
    }
    previewPhone.href = `tel:${inputPhone.value}`;
}

function onLinkedInInput() {
  const newValue = event.currentTarget.value;
    if (newValue) {
        previewLinkedIn.parentElement.classList.remove('hidden');
        localStorage.setItem('user-linkedin', newValue);
    } else {
        previewLinkedIn.parentElement.classList.add('hidden');
        localStorage.removeItem('user-linkedin');
    }
    previewLinkedIn.href = `//linkedin.com/in/${inputLinkedIn.value}`;
}

function formatGithubUserName (userName) {
  if (userName[0] === '@') {
    userName = userName.substring(1);
  }
  return userName;
}

function onGitHubInput() {
    let userName = formatGithubUserName(inputGitHub.value);
    const newValue = event.currentTarget.value;

    if (newValue) {
        previewGitHub.parentElement.classList.remove('hidden');
        localStorage.setItem ('user-github', newValue)
    } else {
        previewGitHub.parentElement.classList.add('hidden');
        localStorage.removeItem ('user-github', newValue)
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
