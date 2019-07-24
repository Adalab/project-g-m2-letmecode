'use strict';

console.log('>> Ready :)');

//collapsable
const form = document.querySelector('form');

const onFormClick = (event) => {
  const target = event.target;
  //.closest es un querySelector hacia arriba desde el elemento en el que se ha hecho target.
  const header = target.closest('.collapsable__header');

  if (header) {
    const nextBlock = header.nextElementSibling;

    //falta añadir que la flecha se gire//
    nextBlock.classList.toggle('collapsable--visible');
  }


}

form.addEventListener('click', onFormClick)
