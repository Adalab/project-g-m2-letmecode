'use strict';

//collapsable
const form = document.querySelector('form');

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
        //si el "este" bloque no es el bloque asociado al header que he clickado
        if (openedBlocks[i] !== nextBlock) {
          openedBlocks[i].classList.remove('collapsable--visible');
          openedBlocks[i].previousElementSibling.querySelector('.fa-chevron-down').classList.remove('collapsable--rotate');

        }
      }
    }

    nextBlock.classList.toggle('collapsable--visible');

    //Rotate arrow icon//
    const icon = header.querySelector('.fa-chevron-down');
    icon.classList.toggle('collapsable--rotate');

  }


}

form.addEventListener('click', onFormClick)
