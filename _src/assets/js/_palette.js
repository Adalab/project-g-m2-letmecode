'use strict';
//-----partial------------CODIGO PARA CAMBIAR DE COLORES EL PREVIEW DE USUARIO

//escuchamos los input radio
const inputRadio1 = document.querySelector('.js__radio1');
const inputRadio2 = document.querySelector('.js__radio2');
const inputRadio3 = document.querySelector('.js__radio3');

const previewCard = document.querySelector('.js__preview-card');
const lsPaletteColor = localStorage.getItem('colorKey');


const palette = {
  '1': 'preview-card-green',
  '2': 'preview-card-red',
  '3': 'preview-card-yellow'
};

function colorea() {
  if (palette[1] === lsPaletteColor) {
    inputRadio1.checked=true;
  }
  if (palette[2] === lsPaletteColor) {
    inputRadio2.checked=true;
  }
  if (palette[3] === lsPaletteColor) {
    inputRadio3.checked=true;
  }
}

if (lsPaletteColor) {
  previewCard.classList.add(lsPaletteColor);
  colorea();
}

function changeColor(event) {
  const color = palette[event.currentTarget.value];
  previewCard.classList.remove('preview-card-red');
  previewCard.classList.remove('preview-card-green');
  previewCard.classList.remove('preview-card-yellow');
  previewCard.classList.add(color);
  localStorage.setItem('colorKey', color);
}

inputRadio1.addEventListener('click', changeColor);
inputRadio2.addEventListener('click', changeColor);
inputRadio3.addEventListener('click', changeColor);
