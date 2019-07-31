'use strict';

const submitButton = document.querySelector('.button-card');
const twitterShare = document.querySelector('.form__success-twitter');

function twitter(){
  twitterShare.classList.remove('hidden');
  submitButton.classList.add('not-available');
}

submitButton.addEventListener('click', twitter);



