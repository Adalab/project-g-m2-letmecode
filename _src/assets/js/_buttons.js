'use strict';

//añadir funcionalidad botón de twitter (compartir mensaje y url de la tarjeta creada)
const submitButton = document.querySelector('.button-card');
const twitterShareCard = document.querySelector('.form__success-twitter');
const twitterButton = document.querySelector('.button-twitter');


function twitter() {
  twitterShareCard.classList.remove('hidden');
  submitButton.classList.add('not-available');
  const cardLink = 'https://fonts.google.com/'; //link de prueba CAMBIAAAR!!
  const twitterText = encodeURIComponent('Hey! This is my new profile card :)');
  const hashtags = encodeURIComponent('adalab,js,css');
  twitterButton.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${cardLink}&hashtags=${hashtags}`;
}

submitButton.addEventListener('click', twitter);



