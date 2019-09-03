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

//Local-Storage: lo primero que ocurre al recargar la página

//Guardo en LS input name
const lsUserName = localStorage.getItem('user-name');

if (lsUserName) {
  previewName.innerHTML = lsUserName;
  inputName.value = lsUserName;
}

//Guardamos en LS input job
const lsUserJob = localStorage.getItem('user-job');
if (lsUserJob) {
  previewJob.innerHTML = lsUserJob;
  inputJob.value = lsUserJob;
}

//Funcion para mostrar los iconos
function showIcon(previewElement) {
  previewElement.parentElement.classList.remove('hidden')
}

//Guardamos en LS el input del mail
const lsUserMail = localStorage.getItem('user-mail');
if (lsUserMail) {
  inputEmail.value = lsUserMail;
  showIcon(previewEmail);
}

//Guardamos en LS el input del phone
const lsUserPhone = localStorage.getItem('user-phone');
if (lsUserPhone) {
  inputPhone.value = lsUserPhone;
  showIcon(previewPhone);
}

//Guardamos en LS el input del linkedin
const lsUserLinkedin = localStorage.getItem('user-linkedin');
if (lsUserLinkedin) {
  inputLinkedIn.value = lsUserLinkedin;
  showIcon(previewLinkedIn);
}

//Guardamos en LS el input del gitHub
const lsUserGithub = localStorage.getItem('user-github');
if (lsUserGithub) {
  inputGitHub.value = lsUserGithub;
  showIcon(previewGitHub);
}


//Functions - input handlers

function onNameJobInputs(newValue,previewValue,varNameLS,defaultMessage){
  if (newValue) {
    previewValue.innerHTML = newValue;
    localStorage.setItem(varNameLS, newValue);
  } else {
    previewValue.innerHTML = defaultMessage;
    localStorage.removeItem(varNameLS);
  }
}

function onNameInput() {
  const newValue = event.currentTarget.value;
  onNameJobInputs(newValue, previewName,'user-name','Nombre Apellido');
}

function onJobInput() {
  const newValue = event.currentTarget.value;
  onNameJobInputs(newValue,previewJob,'user-job','Front-end developer');
}

function onIconInputs(newValue,previewValue,varNameLS){
  if (newValue) {
    previewValue.parentElement.classList.remove('hidden');
    localStorage.setItem(varNameLS, newValue);
  } else {
    previewValue.parentElement.classList.add('hidden');
    localStorage.removeItem(varNameLS);
  }
}

function onEmailInput() {
  const newValue = event.currentTarget.value;
  onIconInputs(newValue, previewEmail, 'user-mail');
  previewEmail.href = `mailto:${inputEmail.value}`;
}

function onPhoneInput() {
  const newValue = event.currentTarget.value;
  onIconInputs(newValue, previewPhone, 'user-phone');
  previewPhone.href = `tel:${inputPhone.value}`;
}

function onLinkedInInput() {
  const newValue = event.currentTarget.value;
  onIconInputs(newValue, previewLinkedIn, 'user-linkedin');
  previewLinkedIn.href = `//linkedin.com/in/${inputLinkedIn.value}`;
}

function formatGithubUserName(userName) {
  if (userName[0] === '@') {
    userName = userName.substring(1);
  }
  return userName;
}

function onGitHubInput() {
  let userName = formatGithubUserName(inputGitHub.value);
  const newValue = event.currentTarget.value;
  onIconInputs(newValue, previewGitHub, 'user-github');
  previewGitHub.href = `//github.com/${userName}`;
}
//listeners
inputName.addEventListener('keyup', onNameInput);
inputJob.addEventListener('keyup', onJobInput);
inputPhone.addEventListener('keyup', onPhoneInput);
inputEmail.addEventListener('keyup', onEmailInput);
inputLinkedIn.addEventListener('keyup', onLinkedInInput);
inputGitHub.addEventListener('keyup', onGitHubInput);
