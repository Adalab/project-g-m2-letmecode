'use strict';

//declarar constantes
const collapsableColors = document.querySelector('.palette');
const collapsableFill = document.querySelector('.fill__container');
const collapsableSubmit = document.querySelector('.form__submit');

const collapsableClickColors = document.querySelector('.collapsable__colors');
const collapsableClickFill = document.querySelector('.collapsable__fill');
const collapsableClickSubmit = document.querySelector('.collapsable__submit');


//funciones
function closeCollapsable() {

  collapsableColors.classList.toggle('container--close');
}

function openCollapsable(event) {

  event.currentTarget.classList.toggle('container--open');
}

//
collapsableClickColors.addEventListener('click', closeCollapsable);
collapsableClickFill.addEventListener('click', openCollapsable);
collapsableClickSubmit.addEventListener('click', openCollapsable);


