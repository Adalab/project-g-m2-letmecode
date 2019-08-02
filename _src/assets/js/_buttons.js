'use strict';

const resetBtn = document.querySelector('.button__text');

function resetea(){
   form.reset();
   previewName.innerHTML = ('Nombre Apellidos');
   previewJob.innerHTML = ('Front-end developer');
   previewPhone.parentElement.classList.add('hidden');
   previewEmail.parentElement.classList.add('hidden');
   previewLinkedIn.parentElement.classList.add('hidden');
   previewGitHub.parentElement.classList.add('hidden');

}


resetBtn.addEventListener('click', resetea);
