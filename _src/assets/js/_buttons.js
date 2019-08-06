'use strict';

const resetBtn = document.querySelector('.button__text');

function resetea() {
  form.reset();
  previewCard.classList.remove('preview-card-red');
  previewCard.classList.remove('preview-card-green');
  previewCard.classList.remove('preview-card-yellow');
  previewName.innerHTML = ('Nombre Apellidos');
  previewJob.innerHTML = ('Front-end developer');
  previewPhone.parentElement.classList.add('hidden');
  previewEmail.parentElement.classList.add('hidden');
  previewLinkedIn.parentElement.classList.add('hidden');
  previewGitHub.parentElement.classList.add('hidden');
  profileImage.style.backgroundImage = `url(${defaultImage})`;
  profilePreview.style.backgroundImage = `url()`;
  localStorage.clear();
}


resetBtn.addEventListener('click', resetea);
//crear tarjeta
const successLink = document.querySelector('.success__link');
let cardLink = ''; //link de tarjeta creada
const baseUrl = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net';

//añadir funcionalidad botón de twitter (compartir mensaje y url de la tarjeta creada)
const submitButton = document.querySelector('.button-card');
const twitterShareCard = document.querySelector('.form__success-twitter');
const twitterButton = document.querySelector('.button-twitter');

//Funciones api, url y twitter
function sendRequest() {
  const checkedRadio = document.querySelector('input[name="palette"]:checked');
  requestData = {
    palette: checkedRadio.value,
    name: inputName.value,
    job: inputJob.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    linkedin: inputLinkedIn.value,
    github: formatGithubUserName(inputGitHub.value),
    photo: userNewImage
  };
  const json = JSON.stringify(requestData);
  const url = baseUrl + '/card/';
  return fetch(url, {
    method: 'POST',
    body: json,
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      showURL(data);
      saveTwitterURL(data);
    })
    .catch(error => console.log(error));
}

function saveTwitterURL(data) {
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

function showTwitterData() {
  twitterShareCard.classList.remove('hidden');

  const twitterText = encodeURIComponent('Hey! This is my new profile card :)');
  const hashtags = encodeURIComponent('adalab,js,css');
  twitterButton.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${cardLink}&hashtags=${hashtags}`;
}


//añadir localStorage comprobación

//Listener submit
form.addEventListener('submit', function (event) {
  event.preventDefault();
  submitButton.classList.add('not-available');

  sendRequest().then(function () {
    showTwitterData();
  }).finally(function () {
    submitButton.classList.remove('not-available');
  });
});
