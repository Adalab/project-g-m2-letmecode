'use strict';
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
