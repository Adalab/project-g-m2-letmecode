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
    previewLinkedIn.href = `//${inputLinkedIn.value}`;
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



//-----partial------------CODIGO PARA CAMBIAR DE COLORES EL PREVIEW DE USUARIO

//escuchamos los input radio
const inputRadio1 = document.querySelector('.js__radio1');
const inputRadio2 = document.querySelector('.js__radio2');
const inputRadio3 = document.querySelector('.js__radio3');

const previewCard = document.querySelector('.js__preview-card');

function changeColor (event) {
        previewCard.classList.remove('preview-card-red');
        previewCard.classList.remove('preview-card-green');
        previewCard.classList.remove('preview-card-yellow');
        previewCard.classList.add(event.currentTarget.value);
}

inputRadio1.addEventListener('click', changeColor);
inputRadio2.addEventListener('click', changeColor);
inputRadio3.addEventListener('click', changeColor);
//collapsable
const form = document.querySelector('form');

//functions
function rotateIconFromHeader(header) {
  const icon = header.querySelector('.fa-chevron-down');
  icon.classList.toggle('collapsable--rotate');
}

function openCollapsable(header) {
  rotateIconFromHeader(header);
  //seleccionamos el elemento hermano de la cabecera (el contenido)
  header.nextElementSibling.classList.toggle('collapsable--visible');
}

function closeCollapsable(block) {
  rotateIconFromHeader(block.previousElementSibling);
  block.classList.remove('collapsable--visible');
}


const onFormClick = (event) => {
  const target = event.target;
  //.closest es un querySelector hacia arriba desde el elemento en el que se ha hecho target.
  const header = target.closest('.collapsable__header');
  //seleccionamos todos los elementos con clase collapsable--visible
  const openedBlocks = form.querySelectorAll('.collapsable--visible');

  //Si se ha hecho click en un elemento con la clase .collapsable__header(header)
  if (header) {
    //seleccionamos el elemento hermano de la cabecera (el contenido)
    const nextBlock = header.nextElementSibling;

    //si hay elementos con la clase .collapsable--visible, collapsables abiertos
    if (openedBlocks.length) {
      //recorro el array que contiene todos los collapsables abiertos
      for (let i = 0; i < openedBlocks.length; i++) {
        //si "este" bloque no es el bloque asociado al header que he clickado
        if (openedBlocks[i] !== nextBlock) {
          closeCollapsable(openedBlocks[i]);
        }
      }
    }

    openCollapsable(header);
  }
}

//listeners
form.addEventListener('click', onFormClick);


