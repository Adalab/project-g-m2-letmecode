'use strict';

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

//callbacks
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
