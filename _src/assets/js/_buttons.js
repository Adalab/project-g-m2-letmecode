'use strict';

//añadir funcionalidad botón de twitter (compartir mensaje y url de la tarjeta creada)
const submitButton = document.querySelector('.button-card');
const twitterShareCard = document.querySelector('.form__success-twitter');
const twitterButton = document.querySelector('.button-twitter');


function twitter() {
  twitterShareCard.classList.remove('hidden');
  submitButton.classList.add('not-available');
  const twitterText = 'Ey!%20This%20is%20my%20new%20profile%20card%20:)';
  const cardLink = 'https://fonts.google.com/'; //link de prueba CAMBIAAAR!!
  twitterButton.href = `https://twitter.com/intent/tweet?text=${twitterText} ${cardLink}`;
}

submitButton.addEventListener('click', twitter);



