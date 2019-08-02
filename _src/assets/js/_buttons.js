'use strict';

const resetBtn = document.querySelector('.button__text');

function resetea(){
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
}


resetBtn.addEventListener('click', resetea);
