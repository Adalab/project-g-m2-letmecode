'use strict';
//crear tarjeta
// const radio = document.querySelectorAll('input').focus();
const successLink = document.querySelector('.success__link');
let cardLink = ''; //link de tarjeta creada

function sendRequest() {
  const requestData = {
    palette: 1,
    name: inputName.value,
    job: inputJob.value,
    email: inputPhone.value,
    phone: inputEmail.value,
    linkedin: inputLinkedIn.value,
    github: inputGitHub.value,
    photo: fr.result,
  };
  const json = JSON.stringify(requestData);

  return fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: json,
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response =>  response.json())
    .then(data => {
      showURL(data);
      saveTwitterURL(data);
    })
    .catch(error => console.log(error));
}

function saveTwitterURL(data){
  cardLink = data.cardURL;
}

function showURL(data) {
  if (data.success) {
    successLink.href = data.cardURL;
    successLink.innerText = data.cardURL;
  } else {
    successLink.innerHTML = 'ERROR:' + data.error;
  }
}


//añadir funcionalidad botón de twitter (compartir mensaje y url de la tarjeta creada)
const submitButton = document.querySelector('.button-card');
const twitterShareCard = document.querySelector('.form__success-twitter');
const twitterButton = document.querySelector('.button-twitter');

function twitter() {
  twitterShareCard.classList.remove('hidden');

  const twitterText = encodeURIComponent('Hey! This is my new profile card :)');
  const hashtags = encodeURIComponent('adalab,js,css');
  twitterButton.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${cardLink}&hashtags=${hashtags}`;
}

submitButton.addEventListener('click', function(event){
  submitButton.classList.add('not-available');
  sendRequest(event).then(function(){
    twitter(event);
  });
});



