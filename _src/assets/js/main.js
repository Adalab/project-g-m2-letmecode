'use strict';

//declarar constantes
const collapsable = document.querySelector('.palette');
const collapsableClick = document.querySelector('.collapsable__header');

//funciones
function openCollapsable() {

  collapsable.classList.toggle('container--close');
}

//
collapsableClick.addEventListener('click', openCollapsable);
