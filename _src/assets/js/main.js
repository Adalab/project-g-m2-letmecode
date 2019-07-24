'use strict';

console.log('>> Ready :)');

const collapsable = document.querySelector('.palette');
const collapsableClick = document.querySelector('.collapsable');

function openCollapsable() {

  if (collapsable.classList.contains('container--open') === true) {
    // Si está abierto (tiene la clase container--open), lo cierras
    collapsable.classList.remove('container--open');
  } else {
    // si está cerrado (no tiene la clase), lo abres
    collapsable.classList.add('container--open');
  }

}

collapsableClick.addEventListener('click', openCollapsable);
